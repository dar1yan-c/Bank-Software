const whenEmpty = document.querySelector(".whenEmpty");

let transactions = JSON.parse(localStorage.getItem("transactionHistory")) || [];
console.log(transactions);

if (transactions.length > 0) {
  localStorage.setItem("classApplied", "true");
}

if (localStorage.getItem("classApplied") === "true") {
  whenEmpty.classList.add("hide");
  console.log(whenEmpty.classList);
} else if (localStorage.getItem("classApplied") === "false") {
  whenEmpty.classList.remove("hide");
  console.log(whenEmpty.classList);
}

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
  localStorage.setItem("classApplied", "false");
});
