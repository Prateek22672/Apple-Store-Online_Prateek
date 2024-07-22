document.addEventListener("DOMContentLoaded", () => {
    const orderId = document.getElementById("orderId");
    const orderDate = document.getElementById("orderDate");
    const deliveryDateElem = document.createElement("p");
    const progressSteps = document.querySelectorAll(".progress-step");

    // Example data - in a real application, you might fetch this from an API
    const orderData = {
        id: "7631345219",
        date: "2024-07-22", // Original order date
        status: "Shipped" // Change this value to test different statuses
    };

    // Function to add days to a date
    function addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    // Calculate the delivery date
    const orderDateObj = new Date(orderData.date);
    const deliveryDate = addDays(orderDateObj, 4);

    // Format the delivery date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDeliveryDate = deliveryDate.toLocaleDateString(undefined, options);

    // Display order data
    orderId.textContent = orderData.id;
    orderDate.textContent = orderData.date;

    // Display delivery date
    deliveryDateElem.innerHTML = `<strong>Delivered by:</strong> ${formattedDeliveryDate}`;
    document.querySelector(".order").appendChild(deliveryDateElem);

    // Update progress bar
    const statuses = ["Ordered", "Shipped", "Out for Delivery", "Delivered"];
    const currentStatusIndex = statuses.indexOf(orderData.status);

    for (let i = 0; i <= currentStatusIndex; i++) {
        progressSteps[i].classList.add("active");
    }
});
