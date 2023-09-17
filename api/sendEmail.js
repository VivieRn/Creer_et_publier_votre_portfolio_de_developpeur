const nodemailer = require("nodemailer");
const axios = require("axios");

async function verifyRecaptcha(token) {
  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET,
          response: token,
        },
      }
    );

    if (response.data.success && response.data.score >= 0.5) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Recaptcha Verification Error:", error);
    return false;
  }
}

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { email, subject, message, recaptchaToken } = req.body;

    if (!(await verifyRecaptcha(recaptchaToken))) {
      return res
        .status(400)
        .send({ status: "error", error: "Recaptcha vérification échouée" });
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TARGET,
      subject: subject,
      text: `Message de : ${email}\n\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send({ status: "success" });
    } catch (error) {
      console.error("Send Mail Error:", error);
      res.status(500).send({ status: "error", error: error.message });
    }
  } else {
    res.status(405).send({ error: "Seules les requêtes POST sont acceptées" });
  }
};
