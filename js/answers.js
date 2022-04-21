export function inizializeCardToggling() {
  const questionCards = document.querySelectorAll('[data-js="questionCard"]');

  questionCards.forEach(card => {
    const buttonToggle = card.querySelector('[data-js="buttonToggle"]');
    const cardToggle = card.querySelector('[data-js="cardToggle"]');
    buttonToggle.addEventListener('click', () => {
      cardToggle.classList.toggle('hidden');
      if (cardToggle.classList.contains('hidden')) {
        buttonToggle.textContent = 'Show Answer';
      } else {
        buttonToggle.textContent = 'Hide Answer';
      }
    });
  });
}
