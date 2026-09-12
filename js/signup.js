const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const button = document.querySelector("button");

passwordInput.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    button.click();
  }
})

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
        password: passwordInput.value,
        role: "USER"
      })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Successful signup!")
    // * * * Redirect the signed in user to the account page * * * 


    console.log(data);
  }
  catch (err) {
    console.error(err);
  }

  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
});
