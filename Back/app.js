require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const {
  checkRequest,
  blockExcessiveRangeRequests,
} = require("./middleware/rateLimit.js");
const { logRequest, logError } = require("./middleware/logger");
const emailController = require("./components/emailController.js");

const app = express();

// Définition du chemin vers les fichiers statiques
const staticFilePath = path.join(__dirname, "../html");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://nicolas-vivier.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Middleware de log
app.use(logRequest);
app.use(logError);

// Middleware de limitation de débit
app.use(blockExcessiveRangeRequests);
app.use(checkRequest);

// Serve static files from the React app
app.use(express.static(staticFilePath));

// Route pour envoyer un email
app.post("/api/send-email", emailController);

app.get("/api/test", (req, res) => {
  res.send("Test route is working");
});

// Gestion d'erreur 404
app.get("*", (req, res) => {
  res.sendFile(path.join(staticFilePath, "index.html"));
});

module.exports = app;
