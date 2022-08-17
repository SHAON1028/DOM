//step:1 btn a event add tarpor input filed er value nibo .input field er jonno value obossoi
        //deposit
document.getElementById('deposit-btn').addEventListener('click',function () {
        const inputDeposit = document.getElementById('deposit-input')
        const newDepositValue = parseInt(inputDeposit.value)  // input field a value nite hoy
        // console.log(depositValue);


        const depositTotalElemnet = document.getElementById('deposit-amount')
        const previousDepositTotal = parseInt(depositTotalElemnet.innerText)
        // console.log('OK');
        depositTotalElemnet.innerText = newDepositValue + previousDepositTotal
        inputDeposit.value = ''

        //balance
        const balanceElement = document.getElementById('balance-amount')
        const balanceAmount  = parseInt(balanceElement.innerText)

        const totalBalance  = parseFloat(balanceAmount + newDepositValue)
      
        balanceElement.innerText = totalBalance
        
})