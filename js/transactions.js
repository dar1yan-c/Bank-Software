let transactions = JSON.parse(localStorage.getItem("transactionHistory")) || [];

const transactionBox = document.querySelector(".transactionsBox");
const clearButton = document.querySelector(".clearButton");

transactions.forEach((transaction) => {
  let div = document.createElement("div");
  div.classList.add("box");
  transactionBox.appendChild(div);
  let h1Element = document.createElement("h1");
  h1Element.innerText = "Transaction made";
  div.appendChild(h1Element);
  let h2Element = document.createElement("h2");
  h2Element.innerHTML = `${transaction.method}ed ${transaction.amount}$`;
  div.appendChild(h2Element);
});

clearButton.addEventListener("click", (e) => {
    localStorage.clear();
});
