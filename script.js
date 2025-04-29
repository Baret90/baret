document.addEventListener("DOMContentLoaded", () => {
  // Fungsi scroll teks (jika digunakan)
  const marquee = document.querySelector(".marquee-text");
  if (marquee) {
    console.log("Marquee aktif");
  }

  // Tombol WhatsApp Live Chat
  const waButton = document.getElementById("wa-livechat");
  if (waButton) {
    waButton.addEventListener("click", () => {
      const phoneNumber = "6285712790226"; // Sudah disesuaikan format WA internasional
      const message = encodeURIComponent("Halo, saya ingin bertanya...");
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    });
  }
});
