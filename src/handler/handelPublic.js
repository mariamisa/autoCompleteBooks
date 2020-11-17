const { join,extname } = require('path');
const { readFile } = require('fs');

const handelHtml=(req,res)=>{
    const filePath = join(__dirname, '..','..', 'public', 'index.html');
    readFile(filePath, (err, file) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        return res.end('<h1>server error</h1>');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(file);
    });
}
const handelPublic=(req,res)=>{
    const endPoint=req.url
    const mimeType={
        '.js':'text/javascript',
        '.css':'text/css',
        '.ico':'image/vnd.microsoft.icon'
    }
    const filePath = join(__dirname, '..','..','public', endPoint);
    readFile(filePath, (err, file) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        return res.end('<h1>server error</h1>');
      }
      res.writeHead(200, { 'Content-Type': mimeType[extname(endPoint)] });
      res.end(file);
    });
}

module.exports={
    handelHtml,
    handelPublic
}