export function sendMessage(formData, recaptchaToken, callback) {
  const data = {
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    recaptchaToken: recaptchaToken,
  };

  fetch("/api/sendEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        callback("/api/email-success");
      } else {
        callback("/api/email-error");
      }
    })
    .catch(() => {
      callback("/api/email-error");
    });
}
