// script.js

// Animasi efek ketika tombol ditekan
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.95)';
  });

  button.addEventListener('mouseup', () => {
    button.style.transform = 'scale(1)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});

console.log('Website BARISAN REMAJA TEMPEL aktif!');
