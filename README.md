# SHOTSTACK TEMPLATES

A template generator and collection of templates.


### Generate Templates

```
npm run build
```

## Core

All the core editing features here


## Components

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

Add an asset to the carousel, assets are displayed in the order they are added. You can also apply a motion effect for each asset.

```
const asset = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/happy1.jpg');
carousel.addAsset(core.assets.image(asset));
```

##### Params

| Argument | Type | Description |
|----------|------|-------------|
| asset | core.assets | add an asset to the collection of assets in the carousel |
| effect | string | add a [motion effect](##Motion Effect) to the asset once it finishes transitioning  |

#### `getter - track`

Generates and returns the carousel track for use in a `core.track`.

```
const track = carousel.track;
```

#### Example

```
let subtitles = new Subtitles(650, 80, `p { font-family: "Open Sans"; }`, 'bottom', 0, 0.01);

subtitles.addSubtitle(`<p>This is the first subtitle</p>`, 0, 5);
subtitles.addSubtitle(`<p>This is the second subtitle</p>`, 5, 5);

const track = subtitles.track;
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
const track = panel.asset;
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
| position | string | starting position on the video to place text |
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
let subtitles = new Subtitles(650, 80, `p { font-family: "Open Sans"; }`, 'bottom', 0, 0.01);

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
