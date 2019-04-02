# fmt-string
Lightweight, faster and easier way to format any string with values from an object

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