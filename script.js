const loginbtn = document.getElementById("login").addEventListener("click", function(){
    const loginArea = document.getElementById("loginArea");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transactionArea");
    transactionArea.style.display = "block";
})



// ========================== Deposit Area ===============================
const depositBtn = document.getElementById("addDeposit").addEventListener("click", function(){
    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber = parseFloat(depositAmount);
    const depositNumber = getInputNumber("depositAmount");

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = currentBalanceNumber + totalDeposit;
    // document.getElementById("currentBalance").innerText = totalBalance;


    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})


// ============================================================================



// ============================= Withdraw Area ================================
const withdrawBtn = document.getElementById("addWithdraw").addEventListener("click", function(){
    // const withdrawAmount = document.getElementById("withdrawAmount").value;
    // const withdrawAmountNumber = parseFloat(withdrawAmount);
    const withdrawNumber = getInputNumber("withdrawAmount");

    // const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    // const currentWithdrawNumber = parseFloat(currentWithdraw);
    // const totalWithdraw = withdrawAmountNumber + currentWithdrawNumber;
    // document.getElementById("currentWithdraw").innerText = totalWithdraw;

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = currentBalanceNumber - totalWithdraw;
    // document.getElementById("currentBalance").innerText = totalBalance;


    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);

    document.getElementById("withdrawAmount").value = "";
})
// ====================================================================================

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}


function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}