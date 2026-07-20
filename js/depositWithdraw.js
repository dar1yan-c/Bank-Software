let transactions = JSON.parse(localStorage.getItem("transactionHistory")) || [];

let money = Number(localStorage.getItem("savedBalance")) || 0;
localStorage.setItem("savedBalance", money.toString());

const deposit = document.querySelector(".depositButton");
const withdraw = document.querySelector(".withdrawButton");
const moneyInput = document.querySelector("#moneyInput");
const balance = document.querySelector(".balanceJS");
balance.innerText = money + "$";

function depositFunc() {
  if (
    moneyInput.value !== null &&
    moneyInput.value !== undefined &&
    moneyInput.value > 0
  ) {
    money += Number(moneyInput.value);
    localStorage.setItem("savedBalance", money.toString());
    let newTransaction = {
      amount: moneyInput.value,
      method: "deposit",
    };
    transactions.push(newTransaction);
    localStorage.setItem("transactionHistory", JSON.stringify(transactions));
  } else {
    console.error("Invalid input amount or insufficient funds");
  }
}

deposit.addEventListener("click", (e) => {
  depositFunc();
  balance.innerText = money + "$";
});

function withdrawFunc() {
  if (
    moneyInput.value !== null &&
    moneyInput.value !== undefined &&
    moneyInput.value > 0 &&
    money - moneyInput.value >= 0
  ) {
    money -= Number(moneyInput.value);
    localStorage.setItem("savedBalance", money.toString());
    let newTransaction = {
      amount: moneyInput.value,
      method: "withdraw",
    };
    transactions.push(newTransaction);
    localStorage.setItem("transactionHistory", JSON.stringify(transactions));
  } else {
    console.error("Invalid input amount or insufficient funds");
  }
}

withdraw.addEventListener("click", (e) => {
  withdrawFunc();
  balance.innerText = money + "$";
});
