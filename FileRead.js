const fs = require('fs');

// fs.readFile('test.txt.txt','utf8', (err, data) => {
//     console.log(err, data)
//   })
const UserInput = process.argv; //it takes userinput from console.
const path = require('path');
const dir = path.join(__dirname); 
console.log(dir) //Printing dir
console.log(UserInput[2])//Reading user input
fs.readdir(dir,(err,files)=>{
  if(err){
    console.log(err);
  }else{
    console.log(files);
    console.log(files.length)
  }
  for (i=0; i<files.length;i++){

const ipos = files[i].indexOf(UserInput[2]);
if(ipos==0){
console.log("File.js exist in the system");
  }}
});
