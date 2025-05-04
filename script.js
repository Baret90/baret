
window.onload = function () {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
        showMainContent(currentUser);
    } else {
        document.getElementById("popup").style.display = "block";
        document.getElementById("mainContent").style.display = "none";
    }
}

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find(user => user.username === username && user.password === password);

    if (found) {
        localStorage.setItem("currentUser", username);
        showMainContent(username);
    } else {
        alert("Username atau password salah.");
    }
}

function register() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Isi username dan password.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some(user => user.username === username)) {
        alert("Username sudah terdaftar.");
        return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Pendaftaran berhasil! Silakan login.");
}

function showMainContent(username) {
    document.getElementById("popup").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    const greeting = document.getElementById("userGreeting");
    if (greeting) greeting.innerText = "Halo, " + username + "!";
}

function logout() {
    localStorage.removeItem("currentUser");
    location.reload();
}

function navigate(page) {
    window.location.href = page;
}
