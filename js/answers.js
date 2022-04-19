export function inizializeCardToggling() {
  const cardToggle = document.querySelector('[data-js="cardToggle"]');
  const buttonToggle = document.querySelector('[data-js="buttonToggle"]');

  buttonToggle.addEventListener('click', () => {
    cardToggle.classList.toggle('hidden');
    if (cardToggle.classList.contains('hidden')) {
      buttonToggle.textContent = 'Show Answer';
    } else {
      buttonToggle.textContent = 'Hide Answer';
    }
  });
}
