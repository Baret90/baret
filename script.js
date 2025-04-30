// script.js

// Efek ketik sambutan
document.addEventListener("DOMContentLoaded", function () {
  const welcomeText = "SELAMAT DATANG DI WEBSITE BARISAN REMAJA TEMPEL (BARET)";
  const container = document.getElementById("sambutan");
  let index = 0;

  function typeWriter() {
    if (index < welcomeText.length) {
      container.innerHTML += welcomeText.charAt(index);
      index++;
      setTimeout(typeWriter, 70); // Kecepatan ketik
    }
  }

  container.innerHTML = "";
  typeWriter();
});
