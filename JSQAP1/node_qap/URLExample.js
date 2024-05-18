// Import the url module
const url = require('url');

// Parse a URL string
const urlString = 'http://www.example.com/index.html';
const parsedUrl = url.parse(urlString, true);

// Log the parsed URL object
console.log('Parsed URL:', parsedUrl);

// Access individual components of the parsed URL
console.log('Protocol:', parsedUrl.protocol);
console.log('Host:', parsedUrl.host);
console.log('Path:', parsedUrl.path);
console.log('Query:', parsedUrl.query);
