const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const button = document.querySelector("button");

passwordInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        button.click();
    }
})

button.addEventListener("click", (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Successful login!")
            console.log(data)
        })
        .catch((err) => {
            console.error("Error:", err);
        });



    emailInput.value = "";
    passwordInput.value = "";
});

