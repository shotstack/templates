'use strict';

const fs = require('fs').promises;

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
    await fs.mkdir(BUILD_PATH + directory, { recursive: true });
}

const writeFile = async (path, json) => {
    await fs.writeFile(path, json);
}

module.exports.output = (data) => {
    console.log(getJson(data));
}

module.exports.write = (directory, file, data) => {
    makeDirectory(directory);
    writeFile(BUILD_PATH + directory + '/' + file + JSON_EXTENSION, getJson(data))
}
