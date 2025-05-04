
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
    window.location.href = "login.html";
}
