
// Simpan akun baru
function register() {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value;

    if (!username || !password) {
        alert("Username dan password tidak boleh kosong.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[username]) {
        alert("Username sudah terdaftar. Silakan pilih username lain.");
        return;
    }

    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Pendaftaran berhasil! Silakan login.");
    window.location.href = "login.html";
}

// Login pengguna
function login(username, password) {
    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[username] && users[username] === password) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInUser", username);
        alert("Login berhasil!");
        window.location.href = "index.html";
    } else {
        alert("Username atau password salah.");
    }
}

// Navigasi dengan login check
function navigate(page) {
    if (isLoggedIn()) {
        window.location.href = page;
    } else {
        alert("Silakan login terlebih dahulu untuk mengakses halaman ini.");
    }
}

function isLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    alert("Anda telah logout.");
    window.location.href = "login.html";
}

function showLoggedInUser() {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
        document.getElementById("userInfo").innerText = "Login sebagai: " + user;
    }
}
