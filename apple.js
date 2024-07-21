// Function to update the display of cart quantity
function updateCartQuantityDisplay() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const quantElement = document.getElementById('quant');
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

// Function to add item to cart
function addToBag(event) {
    const button = event.target;
    const productBox = button.closest('.box2, .q, .rx, .quto, .quote'); // Include .quote class
    const productName = productBox.getAttribute('data-product');
    const productPrice = parseInt(productBox.getAttribute('data-price'));
    const productImage = productBox.querySelector('img').src;

    const item = {
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartQuantityDisplay();
}


// Function to remove cart items and update display
function purchaseItems() {
    localStorage.removeItem('cart');
    displayCart(); // Assuming displayCart() function is defined elsewhere
    updateCartQuantityDisplay();
}

// Event listener to update cart quantity display on page load
document.addEventListener('DOMContentLoaded', updateCartQuantityDisplay);

// Event listener for scrolling effect on video
document.addEventListener('scroll', function() {
    const video = document.querySelector('.video video');
    const scrollY = window.scrollY;
    const scale = Math.max(0.4, 1.1 - scrollY / 2000); // Adjust the divisor to control the zoom sensitivity, and prevent scaling below 0.6
    video.style.transform = `scale(${scale})`;
});