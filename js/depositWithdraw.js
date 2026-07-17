let money = 0;

const deposit = document.querySelector(".depositButton");
const withdraw = document.querySelector(".withdrawButton");
const moneyInput = document.querySelector("#moneyInput");
const balance = document.querySelector(".balanceJS");
balance.innerHTML = money + "$";

deposit.addEventListener("click", (e) => {
  if (
    moneyInput.value !== null &&
    moneyInput.value !== undefined &&
    moneyInput.value > 0
  ) {
    money += Number(moneyInput.value);
    console.log(money);
    balance.innerHTML = money + "$";
  } else {
    console.error(error);
  }
});

withdraw.addEventListener("click", (e) => {
  if (
    moneyInput.value !== null &&
    moneyInput.value !== undefined &&
    moneyInput.value > 0 &&
    money >= Number(moneyInput.value)
  ) {
    money -= Number(moneyInput.value);
    console.log(money);
    balance.innerHTML = money + "$";
  } else {
    console.error(error);
  }
});