export function inizializeLogout() {
  const logoutButton = document.querySelector('[data-js="logout"]');
  let state = true;

  logoutButton.addEventListener('click', () => {
    state = !state;
    logoutButton.textContent = state ? 'Logout' : 'Login';
  });
}
