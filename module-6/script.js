// Color Changing Button Functionality
const colorButton = document.getElementById('colorButton');
const clickCountDisplay = document.getElementById('clickCount');
let clickCount = 0;

// Array of colors for the button to cycle through
const colors = [
    '#667eea',
    '#f093fb',
    '#4facfe',
    '#43e97b',
    '#fa709a',
    '#ff6b6b',
    '#feca57',
    '#48dbfb'
];

let currentColorIndex = 0;

// Button click event with looping through colors
colorButton.addEventListener('click', function() {
    // Increment click count
    clickCount++;
    clickCountDisplay.textContent = `Clicks: ${clickCount}`;
    
    // Loop through colors array
    currentColorIndex++;
    
    // If-Else control flow: Reset to start if we've reached the end
    if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
    }
    
    // Change button background color
    colorButton.style.backgroundColor = colors[currentColorIndex];
    
    // Add animation effect
    colorButton.style.transform = 'scale(1.1)';
    setTimeout(() => {
        colorButton.style.transform = 'scale(1)';
    }, 200);
});

// Form Submission with Validation
const messageForm = document.getElementById('messageForm');
const userNameInput = document.getElementById('userName');
const userMessageInput = document.getElementById('userMessage');

messageForm.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Get input values and trim whitespace
    const name = userNameInput.value.trim();
    const message = userMessageInput.value.trim();
    
    // If-Else control flow: Check if inputs are empty
    if (name === '' && message === '') {
        // Both fields are empty
        alert('⚠️ Error: Both name and message fields are empty!\n\nPlease fill in at least one field before submitting.');
    } else if (name === '') {
        // Only name is empty
        alert('⚠️ Error: Name field is empty!\n\nPlease enter your name before submitting.');
    } else if (message === '') {
        // Only message is empty
        alert('⚠️ Error: Message field is empty!\n\nPlease enter a message before submitting.');
    } else {
        // Both fields have content - success!
        let successMessage = `✅ Form Submitted Successfully!\n\n`;
        successMessage += `Name: ${name}\n`;
        successMessage += `Message: ${message}\n\n`;
        successMessage += `Thank you for your submission!`;
        
        alert(successMessage);
        
        // Clear the form after successful submission
        messageForm.reset();
    }
});

// Additional feature: Character counter for message field with loop
userMessageInput.addEventListener('input', function() {
    const messageLength = userMessageInput.value.length;
    const maxLength = 500;
    
    // If-Else: Check message length
    if (messageLength > maxLength) {
        userMessageInput.value = userMessageInput.value.substring(0, maxLength);
        alert(`⚠️ Maximum character limit (${maxLength}) reached!`);
    }
});

// Loop example: Add hover effect to all gallery items using a for loop
const galleryItems = document.querySelectorAll('.gallery-item');

for (let i = 0; i < galleryItems.length; i++) {
    galleryItems[i].addEventListener('mouseenter', function() {
        // If-Else: Alternate behavior based on index
        if (i % 2 === 0) {
            this.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.5)';
        } else {
            this.style.boxShadow = '0 8px 20px rgba(118, 75, 162, 0.5)';
        }
    });
    
    galleryItems[i].addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
}

// Console message to show JavaScript is loaded
console.log('JavaScript loaded successfully!');
console.log('Total gallery items:', galleryItems.length);