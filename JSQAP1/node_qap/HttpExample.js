// Import the http module
const http = require('http');

// Create an HTTP server 
const server = http.createServer((req, res) => {
  // Write a response to tell that server is on
  res.statusCode = 200; //set it to success
  res.setHeader('Content-Type', 'text/plain');//makes it plain text
  res.end('Server on!\n');
});

// Server listens on port 3000
server.listen(3001, () => {
    //respond to console that it is working
  console.log('Server running!');
});
