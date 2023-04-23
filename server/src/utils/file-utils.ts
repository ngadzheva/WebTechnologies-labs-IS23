// const fs = require ('fs');
import * as fs from 'fs';

export const read: (path: string) => Promise<string> = (filename: string) => {
  return new Promise((resolve: (result: string) => void, reject: (error) => void) => {
    fs.readFile(filename, (error, data) => {
      let result: string;

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

export const readFile = async (filename: string): Promise<string> => {
  return await read(filename);
};

export const write: (filename: string, data: string) => Promise<string> = (filename: string, data: string) => {
  return new Promise((resolve: (result: string) => void, reject: (error) => void) => {
    fs.writeFile(filename, data, (error) => {
      let result: string;

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

// module.exports = { read, write };