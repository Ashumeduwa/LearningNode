const fs = require('fs');

// fs.readFile('test.txt.txt','utf8', (err, data) => {
//     console.log(err, data)
//   })
const read = process.argv;

if(read[2]=="add"){
  fs.writeFileSync(read[3],read[4])
}else if(read[2]=="remove"){
  fs.unlinkSync(read[3])
}else{
  console.log("Invalid file")
}