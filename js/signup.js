const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((err) => console.error("Error:", err));

  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
});
