export function inizializeBookmarkToggling() {
  const bookmarkToggle = document.querySelectorAll(
    '[data-js="bookmarkToggle"]'
  );

  bookmarkToggle.forEach(bookmarks => {
    bookmarks.addEventListener('click', () => {
      bookmarks.classList.toggle('bookmark-color');
    });
  });
}
