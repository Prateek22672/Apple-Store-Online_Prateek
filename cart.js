document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    updateCartQuantityDisplay();

    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', clearCart);
    }

    const applyCouponButton = document.getElementById('applyCoupon');
    if (applyCouponButton) {
        applyCouponButton.addEventListener('click', applyCoupon);
    }

    const continueButtons = document.querySelectorAll('#Continue');
    continueButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.history.back();
        });
    });
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
    const emptyQuote2 = document.getElementById('empty_cart_quote2');

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
        totalTextElement.style.display = 'none';
        cartContainerMain.style.display = 'none';
        return;
    }

    let total = 0;
    cartItems.forEach((item) => {
        total += item.price * item.quantity;
    });

    subtotalElement.innerText = `₹${total}.00`;
    totalQuotePriceElement.innerText = `₹${total}.00`;
    totalTextElement.innerText = `Your bag total is ₹${total}.00 or ₹5814.00/mo.^`;
    totalTextElement.style.display = 'block';

    cartContainer.innerHTML = '';
    cartContainerMain.style.display = 'block';
    continueButton.style.display = 'none';

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
    cart[index].quantity = parseInt(newQuantity, 10);
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
    
    if (quantElement) {
        quantElement.innerText = totalQuantity;
        quantElement.style.display = totalQuantity > 0 ? 'block' : 'none';
        quantElement.style.paddingRight = totalQuantity > 9 ? '18px' : '0';
    }
}

function applyCoupon() {
    const couponInput = document.getElementById('couponInput').value.trim().toUpperCase();
    const validCouponCode = "ff"; // Ensure this matches the expected value
    const subtotalElement = document.getElementById('subtotal_Number');
    const totalQuotePriceElement = document.getElementById('total_quote_price');
    const totalTextElement = document.getElementById('total-text');
    
    let subtotal = parseFloat(subtotalElement.innerText.replace('₹', '').replace('.00', ''));
    let total = parseFloat(totalQuotePriceElement.innerText.replace('₹', '').replace('.00', ''));
    
    console.log('Entered Coupon Code:', couponInput);
    console.log('Valid Coupon Code:', validCouponCode);
    
    if (couponInput === validCouponCode) {
        subtotalElement.innerText = '₹0.00';
        totalQuotePriceElement.innerText = '₹0.00';
        totalTextElement.innerText = 'Your bag total is ₹0.00 or ₹0.00/mo.^';
    }else {
        subtotalElement.innerText = '₹0.00';
        totalQuotePriceElement.innerText = '₹0.00';
        totalTextElement.innerText = 'Your bag total is ₹0.00 or ₹0.00/mo.^';
    }
}
