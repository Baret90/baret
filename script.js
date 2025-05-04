
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (user && pass) {
        localStorage.setItem("user", user);
        document.getElementById("popup").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        alert("Username dan Password harus diisi!");
    }
}

function register() {
    alert("Fitur pendaftaran berhasil! Silakan login.");
}

function navigate(page) {
    window.location.href = page;
}
