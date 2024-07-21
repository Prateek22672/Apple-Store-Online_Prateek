function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const errorMessage = document.getElementById('error-message');

    if (password === "og") {
        // Store email in local storage
        localStorage.setItem('email', email);
        
        // If both fields are filled correctly, redirect to the next page
        window.location.href = 'store.html';
    } else {
        // Display error message if email or password is incorrect
        errorMessage.style.display = 'block';
    }
}

// Add event listener for Enter key press
document.getElementById('email').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        validateForm(event);
    }
});
document.getElementById('pass').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        validateForm(event);
    }
});

/*


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=The+Nautigal:wght@400;700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Mingzat&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Sign In | Prateek™ - Apple (IN)</title>
    <link rel="icon" href="logo.png">
    <link rel="stylesheet" href="index.css">
</head>
<body>
  <div class="wrapper">
    <div class="container main">
        <div class="row">
            <div class="col-md-6 side-image">
                <!-------------      image     ------------->
                <img class="xv" src="apple-xxl.png" alt="">
                <div class="v">
                    <video autoplay loop muted>
                        <source src="v6.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="text">
                    <p>Apple ID</p>
                </div>
            </div>

            <div class="col-md-6 right">
                <div class="input-box">
                   <h2 class="Manage">Manage your Apple Account</h2>
                   <form id="sign-up-form">
                       <div class="input-field mb-3">
                            <input type="text" class="input form-control-dark" id="email" required>
                            <label for="email">Email</label> 
                        </div> 
                       <div class="input-field mb-3">
                            <input type="password" class="input form-control-dark" id="pass" required>
                            <label for="pass">Password</label>
                        </div> 
                       <div class="input-field mb-3">
                            <input type="submit" class="submit btn btn-dark" value="Sign Up">
                       </div>
                       <div id="error-message" class="text-danger" style="display: none;">Invalid email or password.</div>
                   </form>
                   <div class="signin mt-3">
                    <span>Already have an account? <a href="#">Log in here</a></span>
                    <p class="brand">Prateek™</p>
                   </div>
                </div>  
            </div>
        </div>
    </div>
</div>

<script>
    document.getElementById('sign-up-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('pass').value;
        const errorMessage = document.getElementById('error-message');

        // Sample validation, you can add more complex logic here
        if (password === "og") {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            window.location.href = 'store.html';
        } else {
            errorMessage.style.display = 'block';
        }
    });
</script>
</body>
</html>
*/