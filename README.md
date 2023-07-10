## Why use Embedded JavaScripts (EJS):
- When building an backend we use ```res.write()``` function. In order to avoid that we can just add the content in our HTML file and then call it in our app.js file:
```javascript
res.sendFile(__dirname+"/index.html");
```
- But at the same time, we cannot write repetitive HTML files all the time for each condition. So therefore, we use templates for those who have similar content to each other.

## Getting started with EJS:
- To get started
```bash
npm install ejs
```
- To use the ejs we have to create a view directory that contains the index.ejs file.
- The ejs code is the same as HTML code, i.e., anything that is a valid HTML code will also be a valid ejs code.