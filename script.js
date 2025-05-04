
// Navigasi ke halaman
function navigate(page) {
    if (isLoggedIn()) {
        window.location.href = page;
    } else {
        alert("Silakan login terlebih dahulu.");
    }
}

// Cek login
function isLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
}

// Login dari form
function login(username, password) {
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[username] === password) {
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

// Tampilkan nama user
function showLoggedInUser() {
    const user = localStorage.getItem("loggedInUser");
    if (user && document.getElementById("userInfo")) {
        document.getElementById("userInfo").innerText = "Login sebagai: " + user;
    }
}

// Daftar akun baru
function register() {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value;
    if (!username || !password) {
        alert("Username dan password tidak boleh kosong.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[username]) {
        alert("Username sudah ada.");
        return;
    }

    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Pendaftaran berhasil. Silakan login.");
    window.location.href = "login.html";
}
