const express = require('express'); //initiating express.js
const path = require('path'); //Initiating path
const app = express(); //creating executable file of express so that its functions can be used

const FilePath = path.join(__dirname); // File path will fold the dir name
app.use(express.static(FilePath));//express.statis will load only static HTML files, app.use is express funvtion to render
console.log(__dirname);
app.listen(4500);//listen to port for an output
console.log(`${__dirname}/index.html`)
app.get('home',(req,resp)=>{
    resp.sendFile(`${__dirname}/index.html`);//This will open index.html with "homepage" alias
})  

app.get('*',(req,resp)=>{
    resp.sendFile(`${__dirname}/error.html`);//This will open index.html with "homepage" alias
})  