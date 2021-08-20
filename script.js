const loginBtn = document
  .getElementById("login")
  .addEventListener("click", function () {
    document.getElementById("login-area").style.display = "none";
    document.getElementById("transaction-area").style.display = "block";
  });

const depositBtn = document
  .getElementById("depositBtn")
  .addEventListener("click", function () {
    // const depositValue = document.getElementById("depositValue").value;
    // const depositNumber = parseFloat(depositValue);
    const depositNumber = getInputValue("depositValue");

    // const depositAmount = document.getElementById("depositAmount").innerText;
    // const depositAmountValue = parseFloat(depositAmount);
    // totalDeposit = depositAmountValue + depositNumber;
    // document.getElementById("depositAmount").innerText = totalDeposit;

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // total = currentBalanceNumber + depositNumber;
    // document.getElementById("currentBalance").innerText = total;
    if (depositNumber < 0) {
      alert("Deposit number can't be negative");
      document.getElementById("depositValue").value = "";
    } else {
      updateSpanValue("depositAmount", depositNumber);
      updateSpanValue("currentBalance", depositNumber);

      document.getElementById("depositValue").value = "";
    }
  });
const withdrawBtn = document
  .getElementById("withdrawBtn")
  .addEventListener("click", function () {
    // const withdrawValue = document.getElementById("withdrawValue").value;
    // const withdrawNumber = parseFloat(withdrawValue);
    const withdrawNumber = getInputValue("withdrawValue");

    updateSpanValue("withdrawAmount", withdrawNumber);
    updateSpanValue("currentBalance", -1 * withdrawNumber);

    document.getElementById("withdrawValue").value = "";
  });

function getInputValue(id) {
  const amountValue = document.getElementById(id).value;
  const AmountNumber = parseFloat(amountValue);
  return AmountNumber;
}

function updateSpanValue(id, number) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  total = currentNumber + number;
  document.getElementById(id).innerText = total;
}
