// const http = require('http');

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   if (url === '/') {
//     res.write('<html>');
//     res.write('<head><title>Siva Kumar</title></head>');
//     res.write('<body><h2>Hello,Welcome</h2></body>');
//     res.write('</html>');
//     return res.end();
//   }

//   if (url === '/about') {
//     res.write('<html>');
//     res.write('<head><title>Siva Kumar</title></head>');
//     res.write('<body><h2>Hello,Welcome</h2></body>');
//     res.write('</html>');
//     return res.end();
//   }
// });

// server.listen(6000, () => {
//   console.log(`Server started on port 6000`);
// });

// Requiring the module
const http = require('http');

// Creating server object
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>GeeksforGeeks</title><head>');
  res.write('<body><h2>Hello from Node.js server!!</h2></body>');
  res.write('</html>');
  res.end();
});

// Server setup
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
