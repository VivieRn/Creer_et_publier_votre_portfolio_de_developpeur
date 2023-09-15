export function sendMessage(formData, recaptchaToken, callback) {
  formData.append("recaptchaToken", recaptchaToken);

  fetch("https://85.31.237.165:3000/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
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
