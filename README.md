# fmt-string
![License](https://img.shields.io/badge/license-ISC-blue.svg) [![NPM version](http://img.shields.io/npm/v/fmt-string.svg)](https://npmjs.org/package/fmt-string) [![Downloads](https://img.shields.io/npm/dm/fmt-string.svg)](https://www.npmjs.com/package/fmt-string)

Complete , lightweight, faster and easier way to format any string with values from an object, array , array of object etc.
### Install
`npm i fmt-string`

### Easy to Use
```javascript
const str = require('fmt-string');

// Your data
var obj = {};
obj.language = "javascript";

// Your string 
var text = "This is how to use format in {language}!";

// Format the String
str.format(text, obj);
// Return: This is how to use format in javascript !

// Another way 
str.format(text, {
    language: "JS"
});
// Return: This is how to use format in JS!
```

### Whats New in v1.1.x?
We are now support object inside object to make your life easier :)
Just use dot "." inside the bracket "{}"

```javascript
const str = require('fmt-string');

// Your data
var data = {};
data.programming = {};
data.programming.language = "NodeJS";

// Your string 
var text = "This multiple object value: {programming.language} ";

// Format the String
str.format(text, data);
// Return: This multiple object value: Nodejs
```

#### Python 3 str.format() equivalent
Just add another format so you can choose which one you like ;)
It's use **pformat()** function for this purpose!

```javascript
const str = require('fmt-string');

// Your string 
var text = "Ronaldo has {} cars and {} balls.";

// Format the String
str.pformat(text, [7, "many"]);
// Return: Ronaldo has 7 cars and many balls.
```
