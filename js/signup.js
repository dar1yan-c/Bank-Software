const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const button = document.querySelector("button");

button.addEventListener("click", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
      })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Successful signup!")
    console.log(data);
  }
  catch (err) {
    console.error(err);
  }

  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
});
