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

// module.exports.Probe = Probe;


// const probe = new Probe();
// probe.inspect('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/business-man.jpg').then((tags) => {
//     probe.close()
//     console.log(tags.get('ImageWidth'))
// }).catch((err) => {
//     console.log('fail')
// })

// const probe = new Probe();
// Promise.all([
//     probe.inspect('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/business-man.jpg'),
//     probe.inspect('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/cars-tunnel.mp4')
// ]).then(function (response) {
//     probe.close();
//     const [image, video] = response
//     console.log(image.getWidth())
//     console.log(video.getDuration())
// }).catch((err) => {
//     console.log('fail')
// })