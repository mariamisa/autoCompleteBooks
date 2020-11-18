module.exports = (req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<h1>Not Found</h1>');
};
