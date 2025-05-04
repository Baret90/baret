
// Navigasi ke halaman lain
function navigate(page) {
    if (isLoggedIn()) {
        window.location.href = page;
    } else {
        alert("Silakan login terlebih dahulu untuk mengakses halaman ini.");
    }
}

// Cek status login
function isLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
}

// Simulasi login
function login(username, password) {
    const validUsername = "admin";
    const validPassword = "baret2025";

    if (username === validUsername && password === validPassword) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInUser", username);
        alert("Login berhasil!");
        window.location.href = "index.html";
    } else {
        alert("Username atau password salah.");
    }
}

// Logout
function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    alert("Anda telah logout.");
    window.location.href = "login.html";
}

// Menampilkan user yang login
function showLoggedInUser() {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
        document.getElementById("userInfo").innerText = "Login sebagai: " + user;
    }
}
