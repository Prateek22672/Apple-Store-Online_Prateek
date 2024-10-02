document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Basic form validation
    const name = document.getElementById('name').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const expiryDate = document.getElementById('expiry-date').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (name === '' || cardNumber === '' || expiryDate === '' || cvv === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Show OTP input form
    document.getElementById('payment-form').classList.add('hidden');
    document.getElementById('otp-container').classList.remove('hidden');

    // Simulate sending OTP (In a real application, you'd send an OTP via email or SMS)
    console.log('OTP sent to user');
});


const splashScreen = document.getElementById('splash-screen');

splashScreen.style.display = 'flex';

setTimeout(() => {
    splashScreen.style.opacity = '0';//start fadding it out

    setTimeout(() => {
        splashScreen.style.display = 'none';//hiding splash screen
    }, 1000);//it is the duration for fade-out transisition
}, 2000);//this is the duration to show splash screen 



document.getElementById('otp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Basic OTP validation
    const otp = document.getElementById('otp').value.trim();

    if (otp === '') {
        alert('Please enter the OTP.');
        return;
    }

    // Simulate OTP verification (In a real application, you'd verify the OTP with your server)
    if (otp === '123456') { // Example correct OTP
        // Show success message
        document.getElementById('otp-container').classList.add('hidden');
        document.getElementById('success-message').classList.remove('hidden');
        window.location.href = "conformation.html";
    } else {
        alert('Invalid OTP. Please try again.');
    }
});
