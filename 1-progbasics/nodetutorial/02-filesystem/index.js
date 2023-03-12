//https://www.youtube.com/watch?v=yQBw8skBdZU&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=2
//https://nodejs.org/docs/latest-v19.x/api/fs.html
const fs=require("fs");

fs.readFile("./files/starter.txt","utf8",(err,data)=>{
  if(err) throw err;
  console.log(data);
});


fs.writeFile(("./files/reply.txt"),"Text written in the file",(err)=>{
  if(err) throw err;
  console.log("Write complete");
});

fs.appendFile(("./files/test.txt"),"Test in text",(err)=>{
  if(err) throw err;
  console.log("Append complete");
});
//asyncronous --> do something in the callback of the other
//works, but callback hell...
fs.writeFile(("./files/reply2.txt"),"Text written in the file",(err)=>{
  if(err) throw err;
  console.log("Write2 complete");
  fs.appendFile(("./files/reply2.txt"),"\n\nTest in text",(err)=>{
    if(err) throw err;
    console.log("Append2 complete");
    fs.rename(("./files/reply2.txt"),"./files/reply3.txt",(err)=>{
      if(err) throw err;
      console.log("Rename complete");
    });
  });
});


//exit on uncaught errors
process.on("uncaughtException",err=>{
  console.error(`Uncaught error:${err}`)
});