// LogIn Button
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {

  const loginArea = document.getElementById("login-area");

  loginArea.style.display = "none";

  const txArea = document.getElementById("transaction-area");

  txArea.style.display = "block";
});

// Deposit Button
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {

  const depositAmount = getInputNumber("deposit-amount");

  if(depositAmount > 0){
    amountUpgrade("current-deposit", depositAmount);

  amountUpgrade("current-balance", depositAmount);
  }

  document.getElementById("deposit-amount").value = "";
});

// Withdraw Button
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {

  const withdrawAmount = getInputNumber("withdraw-amount");

  if(withdrawAmount > 0){
    amountUpgrade("current-withdraw", withdrawAmount);

    amountUpgrade("current-balance", -1 * withdrawAmount);
  }

  document.getElementById("withdraw-amount").value = "";
});


function amountUpgrade(id, depositAmount) {

  const currentAmount = parseFloat(document.getElementById(id).innerText);

  const totalAmount = currentAmount + depositAmount;

  document.getElementById(id).innerText = totalAmount;
  return totalAmount;
}

function getInputNumber(id) {

  const amount = parseFloat(document.getElementById(id).value);
  
  return amount;
}

