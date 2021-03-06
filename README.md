# SHOTSTACK TEMPLATES (ALPHA)

A template generator/framework for the [Shotstack API](https://shotstack.io) and collection of templates.

**Note:** This project is released as **ALPHA** and is in the very early stages 
of development. Be advised that the codebase may change without notice, including breaking 
changes. We value any suggestions and opening issues and will take all feedback onboard.

## Requirements

- NodeJS 8+

## Install

```
npm install
```

## Generate Templates

```
npm run build
```

Templates are generated as JSON files in the build folder. For details on how to submit the JSON to the 
API check out the [docs](https://shotstack.gitbook.io/docs/guides/getting-started) or 
our [Hello World](https://shotstack.io/learn/hello-world/) tutorial.

## Core

All the core editing features here...


## Components

A collection of off the shelf components covering common use cases.

### Carousel

Create a carousel style animation using images, video and text clips

#### `const carousel = new Carousel(interval, direction, delay, startOnFirstAsset, finishOnLastAsset);`

##### Params

| Argument | Type | Description |
|----------|------|-------------|
| interval | float | the interval between each carousel transition |
| direction | string | the direction to scroll the carousel, one of `left`, `right`, `up`, `down` |
| delay | float | the delay between transitions, from when an asset transitions off-screen and a new asset transition on to screen |
| startOnFirstAsset | boolean | set to `false` to start with the first asset off-screen |
| finishOnLastAsset | boolean | set to `false` to finish with the last asset off-screen  |

#### `addAsset(asset, effect)`

Add an asset to the carousel, assets are displayed in the order they are added. You can optionally apply a motion effect to each asset.

```
const asset = core.assets.image('https://shotstack.io/images/photo1.jpg');
carousel.addAsset(asset, 'slideLeft');
```

##### Params

| Argument | Type | Description |
|----------|------|-------------|
| asset | core.assets | add an asset to the collection of assets in the carousel |
| effect | string | add a [motion effect](#motion-effects) to the asset once it finishes transitioning  |

#### `getter - track`

Generates and returns the carousel track for use in a `core.track`.

```
const track = carousel.track;
```

#### Example

```
const carousel = new Carousel(2, 'left');

carousel.addAsset(core.assets.image('https://shotstack.io/images/photo1.jpg'), 'slideLeft');
carousel.addAsset(core.assets.image('https://shotstack.io/images/photo2.jpg'), 'slideLeft');
carousel.addAsset(core.assets.image('https://shotstack.io/images/photo3.jpg'), 'slideLeft');

const track = carousel.track;
```

---

### Panel

Create a solid rectangle block of colour.

#### `const panel = new Panel(width, height, color);`

| Argument | Type | Description |
|----------|------|-------------|
| width | integer | width in pixels of the panel |
| height | integer | height in pixels of the panel |
| color | string | panel background color using hex notation |


#### `getter - asset`

Generates and returns the asset for use in a `core.clip`.

```
const asset = panel.asset;
```

#### Example

```
const panel = new Panel(1024, 720, '#7027D8');
const asset = panel.asset;
```

---

### Subtitles

Create subtitles

#### `const subtitles = new Subtitles(width, height, css, position, x, y, background);`

Create the subtitle component shared by all subtitle text elements.

##### Params

| Argument | Type | Description |
|----------|------|-------------|
| width | integer | width in pixels of the subtitle container |
| height | integer | height in pixels of the subtitle container |
| css | string | css styling to apply to the subtitle text |
| position | string | starting [position](#positions) on the video to place text |
| x | float | x offset adjustment from the starting position |
| y | float | y offset adjustment from the starting position |
| background | string | text background color using hex notation |

#### `addSubtitle(text, start, length)`

Adds a subtitle element, a line of text to display for a given period of time.

```
subtitles.addSubtitle(`<p>This is a subtitle.</p>`, 0, 3);
```

##### Params

| Argument | Type | Description |
|----------|------|-------------|
| text | string | the subtitle text including html elements |
| start | float | the start point, in seconds, on the timeline |
| length | float | the number of seconds the subtitle should play for |

#### `getter - track`

Generates and returns the subtitles track for use in a `core.track`.

```
const track = subtitles.track;
```

#### Example

```
const subtitles = new Subtitles(650, 80, `p { font-family: "Open Sans"; }`, 'bottom', 0, 0.01);

subtitles.addSubtitle(`<p>This is the first subtitle</p>`, 0, 5);
subtitles.addSubtitle(`<p>This is the second subtitle</p>`, 5, 5);

const track = subtitles.track;
```

---

### Title

Create a text title asset

#### `const title = new Title(text, width, height, options);`

##### Params

| Argument | Type | Description |
|----------|------|-------------|
| title | string | the title text |
| width | integer | width in pixels of the text area |
| height | integer | height in pixels of the text area |
| position | the starting [position](#positions) within the text area to place text |
| options | object | title formatting options |

##### Options

| Argument | Description |
|----------|-------------|
| font | The title font |
| color | text colour using hex notation |
| size | text size in pixels (px) or points (pt) |
| align | horizontal alignment, `left`, `right` or `center` |
| bold | set to `true` to make text bold |
| underline | set to `true` to underline text |
| italic |  set to `true` to make text italic |
| lineHeight | adjust line-height using % |


#### `getter - asset`

Generates and returns the asset for use in a `core.clip`.

```
const asset = title.asset;
```

#### Example

```
const title = new Title('Video Heading', 450, 100, {
    font: 'Open Sans',
    color: '#ffffff',
    size: '24px',
    align: 'left'
});

const asset = title.asset;
```

------

## Utilities

Helpers and utilities to use while creating templates and video edits.

### Probe

Get details of a local or remote media file. Reads the EXIF information of the file and returns 
useful statistics. Uses [Exiftool-vendored](https://www.npmjs.com/package/exiftool-vendored) under the hood.

#### Usage

```
const Probe = require('./src/utilities/Probe');
const probe = new Probe();

probe.inspect('photo.jpg').then((image) => {
    console.log(`Image is ${image.getWidth()}px wide by ${image.getHeight()}px high.`);
    probe.close();
}).catch((error) => {
    console.error('An error occurred: ', error);
    probe.close();
});
```

See more examples in [src/examples](./src/examples/).

#### Methods

#### `inspect(filename|url)`

Accepts a local file or a remote URL. Reads the Exif information and returns a promise object with the following 
functions and parameters:

| Parameter | Type | Description |
|----------|------|-------------|
| tags | array | array of all available tags (EXIF data) for the media file |
| getWidth() | function | returns the width in pixels of the media asset |
| getHeight() | function | returns the height in pixels of the media asset |
| getDuration() | function | returns the length in seconds of a video asset |
| getRotation() | function | returns the rotation the media asset |
| get(tag) | function | returns the media asset value for the specified tag |

#### `close()`

Closes the the probe process (exiftool).

It is important to close the Probe process when finished or your script might hang.


------

## Motion Effects

Built in motion effects

| Effect | Description |
|----------|-------------|
| slideLeft | slide asset from right to left |
| slideRight | slide asset from left to right |
| slideUp | slide asset from bottom to top |
| slideDown | slide asset from top to bottom |
| zoomIn | increase the scale of the asset |
| zoomOut | decrease the scale of the asset |

------

## Positions

Sets the starting position of the clip

| Position | Description |
|----------|-------------|
| topRight | top right corner of screen |
| right | right middle of screen |
| bottomRight | bottom right corner of screen |
| bottom | bottom center of screen |
| bottomLeft | bottom left corner of screen |
| left | left middle of screen |
| topLeft | top left corner of screen |
| center | center of screen (default) |
