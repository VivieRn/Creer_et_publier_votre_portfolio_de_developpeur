export function sendMessage(formData, recaptchaToken) {
  formData.append("recaptchaToken", recaptchaToken);

  fetch("/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        alert("E-mail envoyé avec succès!");
      } else {
        alert("Erreur lors de l’envoi de l’e-mail: " + data.message);
      }
    })
    .catch(() => {
      alert("Erreur lors de la connexion au serveur.");
    });
}
