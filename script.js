const loginForm = document.querySelector('form');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const termsCheckbox = document.getElementById('terms');

// Event listener for Register form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Form validation logic
    let isValid = true;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.tel.value;
    const password = form.password.value;

    if (!name || !email || !phone || !password) {
        isValid = false;
        alert('All fields are required.');
    }

    if (!termsCheckbox.checked) {
        isValid = false;
        alert('You must agree to the terms and conditions.');
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.submit(); // Submit the form if valid
    }
});

// Event listener for Login form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    const username = usernameField.value;
    const password = passwordField.value;

    if (username === 'admin' && password === 'admin123') {
        alert('Login successful!');
        window.location.href = 'home.html'; // Redirect to home page
    } else {
        alert('Invalid username or password.');
    }
});

// Example of using a loop with collections (for the Register form)
const inputFields = document.querySelectorAll('input');
inputFields.forEach((input) => {
    input.addEventListener('focus', function() {
        input.style.borderColor = '#f0ad4e'; // Highlight field on focus
    });

    input.addEventListener('blur', function() {
        input.style.borderColor = '#667'; // Reset border color on blur
    });
});