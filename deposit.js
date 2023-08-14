document.getElementById('deposit-btn').addEventListener('click', function(){

    const inputAmount =document.getElementById('deposit-field')
    const stringAmount = inputAmount.value;
    const floatAmount = parseFloat(stringAmount);
  


    const deposit = document.getElementById('deposit-amount')
    const depositAmount = deposit.innerText;
    const floatDeposit = parseFloat(depositAmount);

    const newValue = floatAmount + floatDeposit 

    deposit.innerText = newValue

    const totalBalance = document.getElementById('total-balance')
    const balanceString = totalBalance.innerText;
    const floatBalance = parseFloat(balanceString);

    const finalTotal = floatBalance + floatAmount;
    totalBalance.innerText = finalTotal;

    
    inputAmount.value = '';
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-field')
    const withdrawString = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawString);

    const withdrawBalance = document.getElementById('withdraw-amount')
    const stringWithdraw = withdrawBalance.innerText;
    const withdrawFinal = parseFloat(stringWithdraw);

    const finalWithdrawBalance = withdrawAmount + withdrawFinal;
    withdrawBalance.innerText = finalWithdrawBalance;

    const totalBalance = document.getElementById('total-balance')
    const balanceString = totalBalance.innerText;
    const floatBalance = parseFloat(balanceString);
    
    const finalTotal =Math.abs (withdrawAmount - floatBalance);
    totalBalance.innerText = finalTotal;

    withdrawInput.value = '';
})

