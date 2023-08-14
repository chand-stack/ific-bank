document.getElementById('login-btn').addEventListener('click', function(){
    const emailInput = document.getElementById('email-field');
    const email = emailInput.value;

    const passwordInput = document.getElementById('password-field');
    const password = passwordInput.value;

    if(email === 'chand@gmail.com' && password=== 'chand'){
        window.location.href = 'login.html'
    }
    else{
        return alert('invalid user information')
    }
})