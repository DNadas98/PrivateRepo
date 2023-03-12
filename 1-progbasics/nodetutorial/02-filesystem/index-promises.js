//https://www.youtube.com/watch?v=yQBw8skBdZU&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=2
//https://nodejs.org/docs/latest-v19.x/api/fs.html
const fsPromises=require("fs").promises;
const fileOps=async()=>{
  try{
    //read
    const data=await fsPromises.readFile(("./files/starter.txt"),"utf8");
    console.log(data);
    //delete original
    await fsPromises.unlink(("./files/starter.txt"),data);
    //write
    await fsPromises.writeFile(("./files/promiseWrite.txt"),data);
    //append
    await fsPromises.appendFile(("./files/promiseWrite.txt"),"\n\nasd");
    //rename
    await fsPromises.rename(("./files/promiseWrite.txt"),"./files/promiseComplete.txt");
    //read new file
    const newData=await fsPromises.readFile(("./files/promiseComplete.txt"),"utf8");
    console.log(newData);
  } catch(err){
    console.error(err);
  }
}

fileOps();
//exit on uncaught errors
process.on("uncaughtException",err=>{
  console.error(`Uncaught error:${err}`)
});