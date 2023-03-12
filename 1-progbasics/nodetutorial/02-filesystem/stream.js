const fs=require("fs");
const rs=fs.createReadStream("./files/promiseComplete.txt");
const ws=fs.createWriteStream("./files/newTextFile");
/*
rs.on("data",(dataChunk)=>{
  ws.write(dataChunk);
});
*/
rs.pipe(ws);