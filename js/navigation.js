export function inizializeNavigation() {
  const headline = document.querySelector('[data-js="header"]');

  const homepage = document.querySelector('[data-js="homesection"]');
  const bookmarks = document.querySelector('[data-js="bookmarksection"]');
  const create = document.querySelector('[data-js="createsection"]');
  const profile = document.querySelector('[data-js="profilesection"]');

  const homepageButton = document.querySelector('[data-js="home"]');
  const bookmarksButton = document.querySelector('[data-js="book"]');
  const createButton = document.querySelector('[data-js="creation"]');
  const profileButton = document.querySelector('[data-js="profile"]');

  homepageButton.addEventListener('click', () => {
    headline.textContent = 'Quizelton';
    homepage.classList.remove('hidden');
    bookmarks.classList.add('hidden');
    create.classList.add('hidden');
    profile.classList.add('hidden');
  });

  bookmarksButton.addEventListener('click', () => {
    headline.textContent = 'Bookmarks';
    homepage.classList.add('hidden');
    bookmarks.classList.remove('hidden');
    create.classList.add('hidden');
    profile.classList.add('hidden');
  });

  createButton.addEventListener('click', () => {
    headline.textContent = 'Create Card';
    homepage.classList.add('hidden');
    bookmarks.classList.add('hidden');
    create.classList.remove('hidden');
    profile.classList.add('hidden');
  });

  profileButton.addEventListener('click', () => {
    headline.textContent = 'Profile';
    homepage.classList.add('hidden');
    bookmarks.classList.add('hidden');
    create.classList.add('hidden');
    profile.classList.remove('hidden');
  });
}
