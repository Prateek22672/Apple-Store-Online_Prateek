function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const errorMessage = document.getElementById('error-message');

    if (password === "OG") {
        // Store email in local storage
        localStorage.setItem('email', email);
        
        // If the password is correct, hide any error messages and redirect
        errorMessage.style.display = 'none';
        window.location.href = 'store.html';
    } else { 
        // Display error message if the password is incorrect
        errorMessage.style.display = 'block';
        
        // Optionally, clear the password field after an incorrect attempt
        document.getElementById('pass').value = '';
    }
}


const splashScreen = document.getElementById('splash-screen');

// Check if splash screen has been shown before
if (!sessionStorage.getItem('splashShown')) {
    splashScreen.style.display = 'flex'; // Show splash screen

    setTimeout(() => {
        splashScreen.style.opacity = '0'; // Start fading out

        setTimeout(() => {
            splashScreen.style.display = 'none'; // Hide splash screen
            sessionStorage.setItem('splashShown', 'true'); // Set flag in sessionStorage
        }, 1000); // Duration for fade-out transition
    }, 2000); // Duration to show splash screen
} else {
    splashScreen.style.display = 'none'; // Skip splash screen if already shown
}


// Add event listener for Enter key press on both fields
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
