function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const errorMessage = document.getElementById('error-message');

    if (password === "") {
        // Display error message if email or password is incorrect
        errorMessage.style.display = 'block';
    } else { 
        // Store email in local storage
        localStorage.setItem('email', email);
        
        // If both fields are filled correctly, redirect to the next page
        window.location.href = 'store.html';
    }
}

// Add event listener for Enter key press
document.getElementById('email').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        validateForm(event);
    }
});
document.getElementById('pass').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        validateForm(event);
    }
});
