// Get form elements
const form = document.getElementById('signupForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Real-time validation on input
firstName.addEventListener('input', () => validateField(firstName, 'firstNameError', 'First name is required'));
lastName.addEventListener('input', () => validateField(lastName, 'lastNameError', 'Last name is required'));
email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input', validateConfirmPassword);

// Validate generic field
function validateField(input, errorId, errorMessage) {
    const errorElement = document.getElementById(errorId);
    
    if (input.value.trim() === '') {
        showError(input, errorElement, errorMessage);
        return false;
    } else {
        showSuccess(input, errorElement);
        return true;
    }
}

// Validate email field
function validateEmail() {
    const errorElement = document.getElementById('emailError');
    
    if (email.value.trim() === '') {
        showError(email, errorElement, 'Email is required');
        return false;
    } else if (!emailRegex.test(email.value.trim())) {
        showError(email, errorElement, 'Please enter a valid email address');
        return false;
    } else {
        showSuccess(email, errorElement);
        return true;
    }
}

// Validate password field
function validatePassword() {
    const errorElement = document.getElementById('passwordError');
    
    if (password.value === '') {
        showError(password, errorElement, 'Password is required');
        return false;
    } else if (password.value.length < 6) {
        showError(password, errorElement, 'Password must be at least 6 characters');
        return false;
    } else {
        showSuccess(password, errorElement);
        // Re-validate confirm password if it has a value
        if (confirmPassword.value !== '') {
            validateConfirmPassword();
        }
        return true;
    }
}

// Validate confirm password field
function validateConfirmPassword() {
    const errorElement = document.getElementById('confirmPasswordError');
    
    if (confirmPassword.value === '') {
        showError(confirmPassword, errorElement, 'Please confirm your password');
        return false;
    } else if (confirmPassword.value !== password.value) {
        showError(confirmPassword, errorElement, 'Passwords do not match');
        return false;
    } else {
        showSuccess(confirmPassword, errorElement);
        return true;
    }
}

// Show error message and styling
function showError(input, errorElement, message) {
    input.classList.add('error');
    input.classList.remove('success');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Show success styling
function showSuccess(input, errorElement) {
    input.classList.remove('error');
    input.classList.add('success');
    errorElement.classList.remove('show');
}

// Form submission handler
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validate all fields
    const isFirstNameValid = validateField(firstName, 'firstNameError', 'First name is required');
    const isLastNameValid = validateField(lastName, 'lastNameError', 'Last name is required');
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    // If all validations pass
    if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        // Show success popup
        document.getElementById('overlay').classList.add('show');
        document.getElementById('successPopup').classList.add('show');

        // Reset form after 2 seconds
        setTimeout(() => {
            document.getElementById('overlay').classList.remove('show');
            document.getElementById('successPopup').classList.remove('show');
            form.reset();
            
            // Remove success classes
            document.querySelectorAll('input').forEach(input => {
                input.classList.remove('success');
            });
        }, 2000);
    }
});