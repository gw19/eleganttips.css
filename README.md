# eleganttip.css&nbsp;&nbsp;[![GitHub release](https://img.shields.io/github/release/gw19/eleganttip.css.svg)](https://github.com/gw19/eleganttip.css/releases)
Provide a simple and elegant tips message (tooltips) on your element with pure CSS.
<br>
<br>
## Installation
Including `eleganttip.css` or `eleganttip.min.css` in your html file.<br>
```html
<link rel='stylesheet' href='eleganttip.css'>
```
or
```html
<link rel='stylesheet' href='eleganttip.min.css'>
```
## Usage
### The easiest way
Adding the class &nbsp;`et`&nbsp; in the tag of element in which you want to display the tips on.<br>
E.g. if you want to show the tips message on your button,<br>
```html
<button class='et'>hover me!</button>
```
then creating a child element `<span>` with adding one of the following position in its class:
* et-bottom
* et-top
* et-left
* et-right
  
and write messages into `<span>`, e.g.
```html
<button class='et'>Hover me!
  <span class='et-top'>
    Here you are!
  </span>
</button>
```
it will show you the message "Here you are!" on the top of the button.

**Note that the class &nbsp;`et`&nbsp; is necessary in the parent element,<br>
and one of the position classes like &nbsp;`et-top`&nbsp; is necessary in the child element `<span>`.**
<br>
<br>
### Other options
Now you can have other features and styles by adding more classes in your element tag.
#### Arrows
```html
<span class='et-top et-arrow'>
```
#### Styles
```html
<span class='et-top et-arrow et-style-night'>
```
```html
<span class='et-top et-arrow et-style-warn'>
```
#### Width of tips block
```html
<span class='et-top et-narrow'>
```
```html
<span class='et-top et-wide'>
```
#### Combination
```html
<span class='et-left et-arrow et-style-night et-wide'>
```
