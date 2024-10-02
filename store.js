const splashScreen = document.getElementById('splash-screen');

// Always show the splash screen on page load
splashScreen.style.display = 'flex'; // Show splash screen

setTimeout(() => {
    splashScreen.style.opacity = '0'; // Start fading out

    setTimeout(() => {
        splashScreen.style.display = 'none'; // Hide splash screen
    }, 1000); // Duration for fade-out transition
}, 1600); // Duration to show splash screen


 
// Button navigation
const pages = {
    b1: 'status.html',
    b2: 'cart.html',
    b3: 'store.html'
};

Object.keys(pages).forEach(buttonId => {
    document.getElementById(buttonId).addEventListener('click', function() {
        window.location.href = pages[buttonId];
    });
});

// Retrieve the name and email from local storage
const name = localStorage.getItem('name');
const email = localStorage.getItem('email');
const greetingElement = document.getElementById('allx');

// Display the appropriate greeting
if (name) {
    greetingElement.innerHTML = `Hello ${name},<br>`;
} else if (email) {
    greetingElement.innerHTML = `Hello ${email},<br>`;
}

