
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find(user => user.username === username && user.password === password);
    if (found) {
        localStorage.setItem("currentUser", username);
        window.location.href = "index.html";
    } else {
        alert("Username atau password salah.");
    }
}
