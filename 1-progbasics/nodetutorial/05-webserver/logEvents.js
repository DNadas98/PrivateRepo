/*
https://www.youtube.com/watch?v=2vaTy4dkbJM&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=4
*/
//import modules
const {format}=require("date-fns");
const{v4:uuid}=require("uuid");
const fs=require("fs");
const fsPromises=require("fs").promises;
const path=require("path");

//logEvents function
const logEvents=async(message,logName)=>{
  const dateTime=`${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  const logItem=`${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try{
    if(!fs.existsSync(path.join(__dirname,"logs"))){
      await fsPromises.mkdir("./logs");
    }
    await fsPromises.appendFile(path.join(__dirname,"logs",logName),logItem);
  } catch(err){
      console.log(err);
  }
};

//export the function
module.exports=logEvents;
