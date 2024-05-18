document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();


    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    

    if (email === 'judylyn43@gmail.com' && password === 'jud56dsdf') {
        document.getElementById('comment').textContent = 'Loading...';
        window.location.href="indext.html";
    }
        

    else {
        document.getElementById('comment').textContent = 'Wrong password ';
        
    }


    if (email === '') {
        document.getElementById('comment').textContent = 'Enter Phone Number'
    }

    if (password === '') {
        document.getElementById('comment').textContent = 'Enter Password'
    }



});