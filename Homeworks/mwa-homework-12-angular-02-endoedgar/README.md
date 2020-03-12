# MWA - Homework 12 - Angular 02
## Exercise
* Create two components (`smart` and `dumb`) smart component will have state (array of objects) and it will render every element of the array items with dumb component. *(dumb is presentational component or reusable component, always has encapsulated styles, it does not hold a state, it just displays the data it receives as input).*
* Create a custom directive called `isVisible` that accepts a boolean which is going to show or hide the element.
* Create a custom directive called `makeBigger` that increases the size of the text by `2px` every time users double-click on the host element. *Set a default font size with `[ngStyle]`*
* Create a custom pipe `multi` that works on strings and receives one number to repeat the string number of times, example: `string | multi:3` will result to: `string string string`
