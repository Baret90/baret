
document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const protectedButtons = [
    "Tentang",
    "Visi Misi",
    "Struktur",
    "Profil",
    "Galeri",
    "Saldo",
    "Live Chat"
  ];

  protectedButtons.forEach(id => {
    const buttons = document.querySelectorAll(`button`);
    buttons.forEach(button => {
      if (button.innerText.trim() === id && !isLoggedIn) {
        button.disabled = true;
        button.style.opacity = 0.5;
        button.title = "Silakan login untuk mengakses fitur ini";
        button.style.cursor = "not-allowed";
      }
    });
  });
});
