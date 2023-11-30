function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Dummy credentials for demonstration purposes
    var validUsername = "user123";
    var validPassword = "pass123";

    if (username === validUsername && password === validPassword) {
        document.getElementById("message").innerText = "Login successful!";
    } else {
        document.getElementById("message").innerText = "Invalid username or password. Please try again.";
    }
}

// Fungsi untuk mengarahkan ke index.html
function redirectToIndex() {
    window.location.href = "index.html";
}