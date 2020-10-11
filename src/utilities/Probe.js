'use strict'

const exiftool = require("exiftool-vendored").exiftool

/**
 * Example:
 * const probe = new Probe();
 * probe.inspect('video.mp4').then((tags) => {
 *   console.log(tags.get('ImageWidth'))
 * })
 */
class Probe {
    inspect(file) {
        return new Promise((resolve, reject) => {
            exiftool
                .read(file)
                .then((tags) => {
                    exiftool.end()

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
                    console.error("Could not read file: ", err)
                    reject()
                })
        })
    }
}

module.exports.Probe = Probe;
