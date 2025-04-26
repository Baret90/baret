
// Animasi tombol klik
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('active');
        setTimeout(() => button.classList.remove('active'), 200);
    });
});
