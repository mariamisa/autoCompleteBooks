const searchInput = document.getElementById('search');
const container = document.getElementById('container');

function clearContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function renderData(data) {
  clearContainer();
  if (data.length) {
    data.forEach((el) => {
      const title = document.createElement('h3');
      title.textContent = `title :  ${el.volumeInfo.title}`;
      container.appendChild(title);

      const author = document.createElement('p');
      author.textContent = `Author :  ${
        el.volumeInfo.authors ? el.volumeInfo.authors[0] : 'no author found'
      }`;
      container.appendChild(author);
    });
  } else {
    const empty = document.createElement('h1');
    empty.textContent = 'no result';
    container.appendChild(empty);
  }
}

fetch('/books', renderData);

searchInput.addEventListener('keyup', ({ target: { value } }) => {
  if (value.trim()) {
    return fetch(`/books?q=${value}`, renderData);
  }
  return fetch('/books', renderData);
});
