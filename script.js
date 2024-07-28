document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    nameInput.addEventListener('input', function() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameError.style.display = 'block';
        } else {
            nameError.style.display = 'none';
        }
    });

    emailInput.addEventListener('input', function() {
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    });

    passwordInput.addEventListener('input', function() {
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    });

    confirmPasswordInput.addEventListener('input', function() {
        if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match';
            confirmPasswordError.style.display = 'block';
        } else {
            confirmPasswordError.style.display = 'none';
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameError.style.display = 'block';
        }

        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.display = 'block';
        }

        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            passwordError.style.display = 'block';
        }

        if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match';
            confirmPasswordError.style.display = 'block';
        }

        if (
            nameInput.value.trim() !== '' &&
            validateEmail(emailInput.value) &&
            passwordInput.value.length >= 6 &&
            confirmPasswordInput.value === passwordInput.value
        ) {
            alert('Registration successful!');
            form.reset();
        }
    });
});
