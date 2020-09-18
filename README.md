# SHOTSTACK TEMPLATES

A template generator and collection of templates.


### Generate Templates

```
npm run build
```

## Core

All the core editing features here


## Components

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
const asset = panel.asset
```

#### Example

```
const panel = new Panel(1024, 720, '#7027D8');
const track = panel.asset;
```

---

### Subtitles

Create subtitles

#### `Subtitles(width, height, css, position, x, y, background);`

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

##### Params

| Argument | Type | Description |
|----------|------|-------------|
| text | string | the subtitle text including html elements |
| start | float | the start point, in seconds, on the timeline |
| length | float | the number of seconds the subtitle should play for |

#### `getTrack()`

Fetches all the subtitle information as a track ready to be used by core.track().

#### Example

```
let subtitles = new Subtitles(650, 80, `p { font-family: "Open Sans"; }`, 'bottom', 0, 0.01);

subtitles.addSubtitle(`<p>This is the first subtitle</p>`, 0, 5);
subtitles.addSubtitle(`<p>This is the second subtitle</p>`, 5, 5);

const track = subtitles.getTrack();
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
const asset = title.asset
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