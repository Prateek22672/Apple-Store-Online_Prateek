function validateForm(event) {
    event.preventDefault();  // Fixed typo

    const name = document.getElementById('name').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation for name and password
    if (name === "") {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Please enter your name to Continue.';
    } else {
        // Store name in local storage
        localStorage.setItem('name', name);

        // Redirect to store.html
        window.location.href = 'store.html';
    }
}

// Add event listeners for 'Enter' key press on both name and password input fields
document.getElementById('name').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        validateForm(event);
    }
});
