document.addEventListener('DOMContentLoaded', () => {
    const progress = document.querySelector('.order-progress');
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
