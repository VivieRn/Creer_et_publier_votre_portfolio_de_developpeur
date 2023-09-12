export function sendMessage(formData, recaptchaToken, callback) {
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
        callback("/email-success");
      } else {
        callback("/email-error");
      }
    })
    .catch(() => {
      callback("/email-error");
    });
}
