document.addEventListener("DOMContentLoaded", () => {
    const orderId = document.getElementById("orderId");
    const orderDate = document.getElementById("orderDate");
    const progressSteps = document.querySelectorAll(".progress-step");

    // Example data - in a real application, you might fetch this from an API
    const orderData = {
        id: "12345",
        date: "2024-07-22",
        status: "Out for Delivery" // Change this value to test different statuses
    };

    // Display order data
    orderId.textContent = orderData.id;
    orderDate.textContent = orderData.date;

    // Update progress bar
    const statuses = ["Ordered", "Shipped", "Out for Delivery", "Delivered"];
    const currentStatusIndex = statuses.indexOf(orderData.status);

    for (let i = 0; i <= currentStatusIndex; i++) {
        progressSteps[i].classList.add("active");
    }
});
