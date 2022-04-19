export function inizializeBookmarkToggling() {
  const bookmarkToggle = document.querySelector('[data-js="bookmarkToggle"]');

  bookmarkToggle.addEventListener('click', () => {
    bookmarkToggle.classList.toggle('bookmark-color');
  });
}
