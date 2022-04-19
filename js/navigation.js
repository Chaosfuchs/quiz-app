export function inizializeNavigation() {
  const headline = document.querySelector('[data-js="header"]');

  const homepage = document.querySelector('[data-js="homesection"]');
  const bookmarks = document.querySelector('[data-js="bookmarksection"]');
  const create = document.querySelector('[data-js="createsection"]');

  const homepageButton = document.querySelector('[data-js="home"]');
  const bookmarksButton = document.querySelector('[data-js="book"]');
  const createButton = document.querySelector('[data-js="creation"]');

  homepageButton.addEventListener('click', () => {
    headline.textContent = 'Quizelton';
    homepage.classList.remove('hidden');
    bookmarks.classList.add('hidden');
    create.classList.add('hidden');
  });

  bookmarksButton.addEventListener('click', () => {
    headline.textContent = 'Bookmarks';
    homepage.classList.add('hidden');
    bookmarks.classList.remove('hidden');
    create.classList.add('hidden');
  });

  createButton.addEventListener('click', () => {
    headline.textContent = 'Create Card';
    homepage.classList.add('hidden');
    bookmarks.classList.add('hidden');
    create.classList.remove('hidden');
  });
}
