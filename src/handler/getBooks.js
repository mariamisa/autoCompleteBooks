const { join } = require('path');
const { readFile } = require('fs');
const queryString = require('querystring');
const getDataFromApi = require('../getBooksFromApi')

//un comment it to fill books.json file with books data
// getDataFromApi()

const getBooks = (req, res) => {
  const filePath = join(__dirname, '..', 'books.json');
  readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.write('<h1>server error</h1>');
      return res.end();
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(file);
  });
};

const getSearchBook = (req, res) => {
  const filePath = join(__dirname, '..', 'books.json');
  readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.write('<h1>server error</h1>');
      return res.end();
    }
    const searchValue = queryString.parse(req.url.split('?')[1]).q;
    const parseData = JSON.parse(file);
    const filteredData = parseData.filter((el) =>el.volumeInfo.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(filteredData));
  });
};

module.exports = { getBooks, getSearchBook };
