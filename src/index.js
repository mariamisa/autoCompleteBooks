require('dotenv').config();
const http = require('http');

const router = require('./route');

http
  .createServer(router)
  .listen(process.env.PORT || 3000, () => console.log('server start'));
