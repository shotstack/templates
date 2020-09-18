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

Create a solid rectangle block of colour and adjust its size and position.

#### `Panel(width, height, color, start, length, position, x, y);`

| Argument | Type | Description |
|----------|------|-------------|
| width | integer | width in pixels of the panel |
| height | integer | height in pixels of the panel |
| start | float | the start point, in seconds, on the timeline |
| length | float | the number of seconds the panel should play for |
| color | string | panel background color using hex notation |
| position | string | starting position on the video to place panel |
| x | float | x offset adjustment from the starting position |
| y | float | y offset adjustment from the starting position |

#### `getTrack()`

Fetches all the panel information as a track ready to be used by core.track().

#### Example

```
let panel = new Panel(1024, 720, '#7027D8', 0, 5);
const track = panel.getTrack();
```

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