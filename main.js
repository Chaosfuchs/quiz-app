const bookmarkToggle = document.querySelector('[data-js="bookmarkToggle"]');

function toggleBookmark() {
  bookmarkToggle.addEventListener("click", () => {
    bookmarkToggle.classList.toggle("bookmark--black");
    console.log(bookmarkToggle);
  });
}

toggleBookmark();
