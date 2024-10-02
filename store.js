// Function to update the display of cart quantity
function updateCartQuantityDisplay() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];//This line fetches the cart from local storage and parses it into a JavaScript array. If no cart data is found, it defaults to an empty array ([]).
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);//it uses the reduce function to sum up the quantity of all items in the cart.
    const quantElement = document.getElementById('quant');

    if (quantElement) {
        quantElement.innerText = totalQuantity;

        if (totalQuantity > 0) {
            quantElement.style.display = 'block';
        } else {
            quantElement.style.display = 'none';
        }

        if (totalQuantity > 9) {
            quantElement.style.paddingRight = '18px';
        } else {
            quantElement.style.paddingRight = '0';
        }
    }
}

// Event listener to update cart quantity display on page load
document.addEventListener('DOMContentLoaded', updateCartQuantityDisplay);





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


