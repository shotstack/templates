'use strict';

const templates = require('./src/templates');
const json = require('./src/helpers/json');

const folders = Object.entries(templates);

for (const [folder, files] of folders) {
    const fileNames = Object.values(files);

    for (const file of fileNames) {
        const template = require('./src/templates/' + folder + '/' + file);
        const edit = template.generateTemplateJson();

        json.write(folder, file, edit);
    }
}
