const nodemailer = require("nodemailer");
const axios = require("axios");

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { email, subject, message, recaptchaToken } = req.body;

    // Ajouter une vérification de recaptchaToken
    try {
      const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${recaptchaToken}`
      );
      const recaptchaResult = response.data;

      if (!recaptchaResult.success) {
        return res
          .status(400)
          .send({ status: "error", error: "Recaptcha vérification échouée" });
      }
    } catch (error) {
      return res
        .status(500)
        .send({ status: "error", error: "Erreur de vérification Recaptcha" });
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
      to: email,
      subject: subject,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send({ status: "success" });
    } catch (error) {
      res.status(500).send({ status: "error", error: error.message });
    }
  } else {
    res.status(405).send({ error: "Seules les requêtes POST sont acceptées" });
  }
};
