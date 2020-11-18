const { writeFile } = require('fs');
const { join } = require('path');
const https = require('https');

module.exports = () => {
  https.get('https://www.googleapis.com/books/v1/volumes?q=a', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        const data = parsedData.items.map((el) => ({ kind: el.kind, volumeInfo: el.volumeInfo }));
        const filePath = join(__dirname, 'books.json');
        writeFile(filePath, JSON.stringify(data), (err) => {
          console.log(err);
        });
      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
};
