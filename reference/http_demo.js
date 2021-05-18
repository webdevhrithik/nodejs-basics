const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
});

server.listen(PORT, (err) => {
  console.log(err);
});
