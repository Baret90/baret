// Animasi saat tombol diklik
const menuLinks = document.querySelectorAll('.menu a, .menu-secondary a');

menuLinks.forEach(link => {
  link.addEventListener('mousedown', () => {
    link.style.transform = 'scale(0.9)';
  });

  link.addEventListener('mouseup', () => {
    link.style.transform = 'scale(1)';
  });

  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
  });
});
