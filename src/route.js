const { extname } = require("path");
const { handelHtml, handelPublic } = require("./handler/handelPublic");
const { getBooks, getSearchBook } = require("./handler/getBooks");
const notFound = require("./handler/notFound");

const router = (req, res) => {
  const endPoint = req.url;
  if (endPoint === "/") {
    handelHtml(req, res);
  } else if (extname(endPoint)) {
    handelPublic(req, res);
  } else if (endPoint === "/books") {
    getBooks(req, res);
  } else if (endPoint.includes("/books?q")) {
    getSearchBook(req, res);
  } else {
    notFound(req,res)
  }
};

module.exports = router;
