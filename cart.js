document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    updateCartQuantityDisplay();

    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', clearCart);
});

function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
    updateCartQuantityDisplay();
}

function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items-list');
    const totalContainer = document.getElementById('cart-total');
    const buyButton = document.getElementById('buy');
    const subtotalElement = document.getElementById('subtotal_Number');
    const totalQuotePriceElement = document.getElementById('total_quote_price');
    const totalTextElement = document.getElementById('total-text');
    const cartContainerMain = document.getElementById('cart-container');
    const continueButton = document.getElementById('Continue');
    const signinButton = document.getElementById('signIn');
    const emptyQuote = document.getElementById('empty_cart_quote');
    const emptyQuote2 = document.getElementById('empty_cart_quote2'); // Correct ID

    if (cartItems.length === 0) {
        emptyQuote.style.display = 'block';
        emptyQuote2.style.display = 'block';
        continueButton.style.display = 'block';
        signinButton.style.display = 'block';
        document.getElementById('line').style.display = 'none';
        buyButton.style.display = 'none';
        totalContainer.innerHTML = '';
        subtotalElement.innerText = '₹0.00';
        totalQuotePriceElement.innerText = '₹0.00';
        totalTextElement.style.display = 'none'; // Hide the total text
        cartContainerMain.style.display = 'none'; // Hide the container
        return;
    }

    let total = 0;
    cartItems.forEach((item) => {
        total += item.price * item.quantity;
    });

    subtotalElement.innerText = `₹${total}.00`;
    totalQuotePriceElement.innerText = `₹${total}.00`;
    totalTextElement.innerText = `Your bag total is ₹${total}.00 or ₹5814.00/mo.^`;
    totalTextElement.style.display = 'block'; // Ensure the total text is visible

    // Clear existing content
    cartContainer.innerHTML = '';
    cartContainerMain.style.display = 'block'; // Show the container
    continueButton.style.display = 'none'; // Hide the continue button

    // Append product details below the total
    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-details">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <p>${item.name}</p>
                    <p>Price: ₹${item.price}</p>
                    <label for="quantity${index}">Quantity:</label>
                    <select id="quantity${index}" class="quantity-select" onchange="updateQuantity(${index}, this.value)">
                        ${generateQuantityOptions(item.quantity)}
                    </select>
                    <p class="remove-button" onclick="removeItem(${index})">Remove</p>
                </div>
            </div>
        `;
        cartContainer.appendChild(itemElement);
    });

    buyButton.style.display = 'block';
}

function generateQuantityOptions(selectedQuantity) {
    let options = '';
    for (let i = 1; i <= 10; i++) {
        options += `<option value="${i}" ${i === selectedQuantity ? 'selected' : ''}>${i}</option>`;
    }
    return options;
}

function updateQuantity(index, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartQuantityDisplay();
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartQuantityDisplay();
}

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
        quantElement.style.paddingRight = '18px'; // Apply
    }
}

// Select the button with the ID 'Continue'
let btnback = document.querySelectorAll('#Continue');

// Add event listener to each button in the NodeList
btnback.forEach(button => {
    button.addEventListener('click', () => {
        window.history.back();
    });
});
