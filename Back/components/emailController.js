const axios = require("axios");
const SibApiV3Sdk = require("sib-api-v3-sdk");
require("dotenv").config();

// Initialisation du client API
const defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;
let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// Fonction pour échapper les caractères HTML dangereux
function escapeHtml(unsafe) {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Fonction pour valider le token reCAPTCHA v3
async function verifyRecaptcha(token) {
  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
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
    return false;
  }
}

// Fonction pour envoyer l'email
const sendEmail = async (req, res) => {
  if (
    !req.body.email ||
    !req.body.subject ||
    !req.body.message ||
    !req.body.recaptchaToken
  ) {
    return res
      .status(400)
      .json({ status: "error", message: "Missing required fields" });
  }

  // Vérifiez le token reCAPTCHA
  const isRecaptchaValid = await verifyRecaptcha(req.body.recaptchaToken);
  if (!isRecaptchaValid) {
    return res.status(400).json({
      status: "error",
      message: "Invalid reCAPTCHA token or score too low",
    });
  }

  // Validez et échappez les entrées
  const email = escapeHtml(req.body.email);
  const subject = escapeHtml(req.body.subject);
  const message = escapeHtml(req.body.message);

  let sendSmtpEmail = {
    to: [
      {
        email: "vivier.nicolas0@gmail.com",
        name: "Nicolas VIVIER",
      },
    ],
    subject: subject,
    htmlContent: message,
    sender: {
      name: "Visiteur Portfolio",
      email: email,
    },
  };

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    res
      .status(200)
      .json({ status: "success", message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error sending email",
      error: error.message,
    });
  }
};

module.exports = sendEmail;
