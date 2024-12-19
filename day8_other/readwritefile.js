const fs = require('node:fs');
fs.readFile('C:\\Users\\UD SYSTEMS\\Documents\\city.csv', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});