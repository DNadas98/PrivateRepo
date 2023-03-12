const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

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

//setFile('./proba.json',JSON.stringify(strarr));
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
app.get('/', (req, res) => {
  //res.sendFile(__dirname+'/index.html');
  getFile('./probaread.json',callBackReadFile,res);
//  res.send(strarr2);
});
app.get('/set', (req, res) => {
  //res.sendFile(__dirname+'/index.html');
    let strarr=
    {
      "id": 2,
      "title": "Próba...",
      "completed": true
    };
    setFile('./probawrite.json',JSON.stringify(strarr));
  res.send(strarr);
});

/* 
app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username === 'admin' && password === 'admin') {
        res.send('Login successful');
    }
    else {
        res.send('Login failed');
    }
})
*/

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
