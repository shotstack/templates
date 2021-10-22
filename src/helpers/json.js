'use strict';

const fs = require('fs');
const path = require("path");

const BUILD_PATH = './build/';
const JSON_EXTENSION = '.json';

const removeEmptyOrNull = (obj) => {
    Object.keys(obj).forEach(k =>
        (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||
        (!obj[k] && obj[k] !== undefined && obj[k] !== 0) && delete obj[k]
    );

    return obj;
};

const getJson = (data) => {
    return JSON.stringify(removeEmptyOrNull(data), null, 4)
}

const makeDirectory = async (directory) => {
    const exists = fs.existsSync(BUILD_PATH + directory)
    if (!exists) {
      try {
        await fs.promises.mkdir(BUILD_PATH + directory, { recursive: true });
      } catch (error) {
        console.log(error);
      }
    }
}

const writeFile = async (path, json) => {
  try {
    console.log(path);
    await fs.promises.writeFile(path, json);
  } catch (error) {
    console.log(error);
  }
}

module.exports.output = (data) => {
    console.log(getJson(data));
}

module.exports.write = (directory, file, data) => {
    const filePath = path.parse(file).dir;

    if (filePath) {
        makeDirectory(`${directory}/${filePath}`);
    } else {
        makeDirectory(directory);
    }

    writeFile(BUILD_PATH + directory + '/' + file + JSON_EXTENSION, getJson(data))
}
