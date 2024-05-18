// Import the filesystem module
const fs = require('fs');

// Define a file path
const filePath = './example.txt';
;

// Node can write data to a file
fs.writeFile(filePath, 'Hello File! We are writing to you', (err) => {
  if (err) throw err;
  console.log('File has been saved!');//When created log to console

  // Node can read the data from the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data); 

    // Node can delete the file
    fs.unlink(filePath, (err) => {
      if (err) throw err;
      console.log('File deleted!'); //When deleted, log to console
    });
  });
});
