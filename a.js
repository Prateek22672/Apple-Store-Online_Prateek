(() => {
    const carousels = document.querySelectorAll(".carousel");
    const wrapperElements = document.querySelectorAll(".wrapper");

    wrapperElements.forEach((wrapper, index) => {
        const carousel = carousels[index];
        const arrowBtns = wrapper.querySelectorAll("i");
        const firstCardWidth = carousel.querySelector(".card").offsetWidth;
        const dotsContainer = wrapper.querySelector(".dots-container");

        let isDragging = false, startX, startScrollLeft;
        let cardsPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        // Create dots
        const createDots = () => {
            const numDots = Math.ceil(carousel.children.length / cardsPerView);
            for (let i = 0; i < numDots; i++) {
                const dot = document.createElement("span");
                dot.classList.add("dot");
                dotsContainer.appendChild(dot);

                // Scroll to the respective card when a dot is clicked
                dot.addEventListener("click", () => {
                    carousel.scrollLeft = i * firstCardWidth * cardsPerView;
                });
            }
        };

        // Update the active dot based on scroll position
        const updateDots = () => {
            const dots = dotsContainer.querySelectorAll(".dot");
            dots.forEach(dot => dot.classList.remove("active"));

            const activeIndex = Math.round(carousel.scrollLeft / (firstCardWidth * cardsPerView)) % dots.length;
            dots[activeIndex].classList.add("active");
        };

        createDots();
        updateDots();

        // Arrow button functionality
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const scrollAmount = btn.id.includes("left") ? -firstCardWidth * cardsPerView : firstCardWidth * cardsPerView;
                carousel.scrollLeft += scrollAmount;
                setTimeout(updateDots, 50);
            });
        });

        // Drag functionality
        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX || e.touches[0].pageX;
            startScrollLeft = carousel.scrollLeft;
        };

        const dragging = (e) => {
            if (!isDragging) return;
            const x = e.pageX || e.touches[0].pageX;
            carousel.scrollLeft = startScrollLeft - (x - startX);

            if (Math.abs(x - startX) > 10) {
                e.preventDefault();
            }
        };

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
            updateDots();
        };

        // Event listeners
        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);

        carousel.addEventListener("touchstart", dragStart);
        carousel.addEventListener("touchmove", dragging);
        document.addEventListener("touchend", dragStop);

        carousel.addEventListener("scroll", updateDots);
    });

    const email = localStorage.getItem('email');
    if (email) {
        document.getElementById('Heading').innerHTML = `Hey ${email},<br> check out these<br> Accessories.`;
    }

    const addToBagButtons = document.querySelectorAll(".add_to_bag");
    const quant = document.getElementById("quant");
    quant.style.display = 'none';

    addToBagButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            addToBag(event);
            updateCartQuantityDisplay();
        });
    });

    document.addEventListener('scroll', function() {
        const video = document.querySelector('.video video');
        const scrollY = window.scrollY;
        const scale = Math.max(0.4, 1.1 - scrollY / 2000);
        video.style.transform = `scale(${scale})`;
    });

    document.addEventListener('DOMContentLoaded', updateCartQuantityDisplay);
})();

function addToBag(event) {
    const button = event.target;
    const productBox = button.closest('.card');
    const productName = productBox.querySelector('.t2').getAttribute('data-product');
    const productPrice = parseInt(productBox.querySelector('.t3').getAttribute('data-price'));
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
        quantElement.style.paddingRight = '18px'; // Apply margin-left -5px when quantity exceeds 10
    } else {
        
    }
}
