
// for log in page 
document.getElementById('login-btn').addEventListener('click', function(){
    const inputEmailText = document.getElementById('email-input').value;
    const inputPasswordText = document.getElementById('password-input').value;
    if( inputEmailText == 'mirzaazam@gmail.com' && inputPasswordText == 'nohi12345' ){
        location.href = 'index.html';
    }
    else{
        alert('Invalid user or password!');
    }
});

