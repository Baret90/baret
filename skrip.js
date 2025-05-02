
if (!localStorage.getItem('isLoggedIn')) {
  if (!window.location.href.includes('login.html')) {
    window.location.href = 'login.html';
  }
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');
  window.location.href = 'login.html';
}
