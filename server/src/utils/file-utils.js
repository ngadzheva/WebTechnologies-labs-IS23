const fs = require ('fs');

const read = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (error, data) => {
      let result;

      if (error) {
        result = 'Error reading file';
        reject(error);
        return;
      }

      result = data.toString();
      resolve(result);
    });
  });
};

const write = (filename, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, (error) => {
      let result;

      if (error) {
        result = 'Error writing file';
        reject(result);
        return;
      }

      result = 'Successfully written file';
      resolve(result);
    });
  });
};

module.exports = { read, write };