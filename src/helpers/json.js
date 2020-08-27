'use strict';

const fs = require('fs');

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
    return JSON.stringify(removeEmptyOrNull(data), null, 2)
}

const makeDirectory = (directory) => {
    fs.mkdir(BUILD_PATH + directory, { recursive: true }, (err) => {
        if (err) throw err;
    });
}

const writeFile = (path, json) => {
    fs.writeFileSync(path, json);
}

module.exports.output = (data) => {
    console.log(getJson(data));
}

module.exports.write = (directory, file, data) => {
    makeDirectory(directory);
    writeFile(BUILD_PATH + directory + '/' + file + JSON_EXTENSION, getJson(data))
}
