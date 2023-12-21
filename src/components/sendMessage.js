export function SendMessage(formData, recaptchaToken, navigate) {
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
      console.log("Response Data: ", data);
      if (data.status === "success") {
        navigate("/email-success");
      } else {
        navigate("/email-error");
      }
    })
    .catch((error) => {
      console.log("Error: ", error);
      navigate("/email-error");
    });
}
