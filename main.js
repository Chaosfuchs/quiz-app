/* Card 1 */
const bookmarkToggle = document.querySelector('[data-js="bookmarkToggle"]');

bookmarkToggle.addEventListener('click', () => {
  bookmarkToggle.classList.toggle('bookmark--black');
});

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
/* Card 2 */
const bookmarkToggle2 = document.querySelector('[data-js="bookmarkToggle2"]');

bookmarkToggle2.addEventListener('click', () => {
  bookmarkToggle2.classList.toggle('bookmark--black');
});

const cardToggle2 = document.querySelector('[data-js="cardToggle2"]');
const buttonToggle2 = document.querySelector('[data-js="buttonToggle2"]');

buttonToggle2.addEventListener('click', () => {
  cardToggle2.classList.toggle('hidden');
  if (cardToggle2.classList.contains('hidden')) {
    buttonToggle2.textContent = 'Show Answer';
  } else {
    buttonToggle2.textContent = 'Hide Answer';
  }
});

const homepage = document.querySelector('[data-js="homesection"]');
const bookmarks = document.querySelector('[data-js="bookmarksection"]');
const create = document.querySelector('[data-js="createsection"]');
const profile = document.querySelector('[data-js="profilesection"]');

const homepageButton = document.querySelector('[data-js="home"]');
const bookmarksButton = document.querySelector('[data-js="book"]');
const createButton = document.querySelector('[data-js="creation"]');
const profileButton = document.querySelector('[data-js="profile"]');

homepageButton.addEventListener('click', () => {
  homepage.classList.add('visible');
  homepage.classList.remove('hidden');
  bookmarks.classList.add('hidden');
  bookmarks.classList.remove('visible');
  create.classList.add('hidden');
  create.classList.remove('visible');
  profile.classList.add('hidden');
  profile.classList.remove('visible');
});

bookmarksButton.addEventListener('click', () => {
  homepage.classList.add('hidden');
  homepage.classList.remove('visible');
  bookmarks.classList.remove('hidden');
  bookmarks.classList.add('visible');
  create.classList.add('hidden');
  create.classList.remove('visible');
  profile.classList.add('hidden');
  profile.classList.remove('visible');
});

createButton.addEventListener('click', () => {
  homepage.classList.add('hidden');
  homepage.classList.remove('visible');
  bookmarks.classList.remove('visible');
  bookmarks.classList.add('hidden');
  create.classList.add('visible');
  create.classList.remove('hidden');
  profile.classList.add('hidden');
  profile.classList.remove('visible');
});
