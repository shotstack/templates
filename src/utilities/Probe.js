'use strict'

const exiftool = require("exiftool-vendored").exiftool;
const os = require('os');
const isUrl = require('is-url');
const fs = require('fs');
const download = require('download');
const uniqueFilename = require('unique-filename')

const downloadTmpFile = async (url) => {
    const RANDOM_FILE = uniqueFilename(os.tmpdir())
    fs.writeFileSync(RANDOM_FILE, await download(url));

    return RANDOM_FILE;
}

/**
 * Example:
 * const probe = new Probe();
 * probe.inspect('video.mp4').then((tags) => {
 *   console.log(tags.get('ImageWidth'))
 * })
 */
module.exports = class Probe {
    inspect(file) {
        return new Promise(async (resolve, reject) => {
            let path = file

            if (isUrl(file)) {
                path = await downloadTmpFile(file)
            };

            exiftool
                .read(path)
                .then((tags) => {
                    const response = {
                        tags: tags,
                        get: (tag) => {
                            return tags[tag]
                        },
                        getWidth: () => {
                            return tags.ImageWidth
                        },
                        getHeight: () => {
                            return tags.ImageHeight
                        },
                        getDuration: () => {
                            return tags.Duration
                        },
                        getRotation: () => {
                            return tags.Rotation
                        }
                    }
                    resolve(response)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    close() {
        exiftool.end()
    }
}
