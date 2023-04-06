// save.js
const fs = require('fs');

function saveFile(text) {
  fs.writeFile('file.txt', text, (err) => {
    if (err) {
      alert('An error occurred while saving the file!');
      return;
    }
    alert('The file has been saved successfully!');
  });
}

module.exports = { saveFile };
