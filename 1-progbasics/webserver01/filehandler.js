const fs = require('fs');

function getFile(filestr,myCallback,ress) {
  fs.readFile(filestr, "utf8", (err, data) => {
      if (err) {
          console.log(err);
      }
      myCallback(data,ress);
  });
}
function callBackReadFile(arr,resss){
  let strarr2=JSON.parse(arr);
//  console.log('strarr2\n'+strarr2);
  resss.send(strarr2);
}
function setFile(filestr,arr) {
  fs.writeFile(filestr, arr, (err) => {
      if (err) {
          console.log(err);
      }
      console.log('Saved file!');
  });
}
module.exports={getFile,callBackReadFile,setFile};