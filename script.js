document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // You should perform actual validation and authentication here.
        // For simplicity, we'll use a hardcoded username and password.
        if (username === 'user' && password === 'password') {
            message.textContent = 'Login successful!';
            message.style.color = 'green';
        } else {
            message.textContent = 'Invalid username or password';
            message.style.color = 'red';
        }
    });
});
