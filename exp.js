const getIPAddress = async () => {
    try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        const ipAddress = data.ip;

        // Display IP address on the webpage
        document.getElementById('ipAddress').textContent = ipAddress;

        // Link to IP location
        document.getElementById('ipLocation').innerHTML = `<a href="https://www.ip2location.com/demo/${ipAddress}" target="_blank">ip2location</a>`;

        // Store IP address in local storage
        localStorage.setItem('userIP', ipAddress);
        
        // Log IP address safely to the console
        console.log(`User's IP Address: ${ipAddress}`);

    } catch (error) {
        console.error('Failed to fetch IP:', error);
    }
};

getIPAddress();
