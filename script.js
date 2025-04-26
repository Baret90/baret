document.querySelectorAll('.nav-button, .footer-button').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('active');
    setTimeout(() => {
      button.classList.remove('active');
    }, 200);
  });
});
