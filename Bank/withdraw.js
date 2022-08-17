document.getElementById('withdraw-btn').addEventListener('click',function () {
    //step:1 input theke value nilam
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawElement = parseInt(withdrawInput.value) //quotaion dile kaj hobe na
    

    //step:2 widraw card a show korbo

    const withdrawAmount = document.getElementById('withdraw-amount')
    const withdrawTotal =parseInt(withdrawAmount.innerText)
    
    withdrawAmount.innerText = withdrawElement + withdrawTotal
    //step:3 balance theke minus korbo

    const balance = document.getElementById('balance-amount')
    const totalBalance = balance.innerText
  
    const balanceAfterWithdraw = parseInt(totalBalance-withdrawElement)
   
    balance.innerText = balanceAfterWithdraw
    withdrawInput.value = ''
    
})