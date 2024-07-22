document.addEventListener('DOMContentLoaded', () => {
    // Set the order date dynamically
    const orderDateElement = document.getElementById('orderDate');
    const expectedDeliveryDateElement = document.getElementById('expectedDeliveryDate');
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    orderDateElement.textContent = formattedDate;

    // Calculate expected delivery date (4 days after the order date)
    const expectedDeliveryDate = new Date(currentDate);
    expectedDeliveryDate.setDate(expectedDeliveryDate.getDate() + 4);
    const formattedExpectedDeliveryDate = expectedDeliveryDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    expectedDeliveryDateElement.textContent = formattedExpectedDeliveryDate;

    const progress = document.createElement('div');
    progress.className = 'order-progress';
    document.getElementById('orderProgressBar').appendChild(progress);
    
    const progressSteps = Array.from(document.querySelectorAll('.order-progress-step'));

    const updateProgressBar = (currentStep) => {
        progressSteps.forEach((step, index) => {
            if (index <= currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        const activeSteps = document.querySelectorAll('.order-progress-step.active');
        progress.style.width = ((activeSteps.length - 1) / (progressSteps.length - 1)) * 100 + '%';
    };

    const getCurrentStep = () => {
        // Simulate an API call to get the current order status
        // Replace the below line with actual API call to get the order status
        return 'Shipped'; // Example status
    };

    const currentStep = getCurrentStep();
    const stepIndex = progressSteps.findIndex(step => step.dataset.title === currentStep);
    updateProgressBar(stepIndex);
});
