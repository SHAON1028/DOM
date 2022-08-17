//step1: add click event

document.getElementById('btn-submit').addEventListener('click',function () {
    console.log('submit btn click');
    //step:2 get email;
    const email = document.getElementById('email-id')
    const emailText = email.value
    console.log(emailText);
    //step:3 get pass
    const pass = document.getElementById('pass-id')
    const passText = pass.value
    //Just for check not Ideal one
    console.log(passText);
    if(emailText ==='shaon@gmail.com'&& passText==='number'){
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid user')
    }
})
