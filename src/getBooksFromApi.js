const { writeFile } = require('fs');
const { join } = require('path');
const fetch = require('node-fetch');

module.exports = () => {
  fetch('https://www.googleapis.com/books/v1/volumes?q=a')
    .then((res) => res.json())
    .then((res) => {
      const filePath = join(__dirname, 'books.json');
      writeFile(filePath, JSON.stringify(res.items), (err) => {
        console.log(err);
      });
    })
    .catch(console.log);
};
