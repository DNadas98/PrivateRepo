const express = require('express');
const fileHandler=require("./filehandler.js");

const app = express();  //creates express app

app.get('/', (req, res) => {  //
  fileHandler.getFile('./probaread.json',fileHandler.callBackReadFile,res);
});
app.get('/set', (req, res) => {
    const strarr=
    {
      "id": 2,
      "title": "Próba...",
      "completed": true
    };
    fileHandler.setFile('./probawrite.json',JSON.stringify(strarr));
  res.send(strarr);
});

//start the webserver on port 3000
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
