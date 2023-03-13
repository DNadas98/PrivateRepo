/*
https://www.youtube.com/watch?v=2vaTy4dkbJM&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=4
*/
//modules from npm
const {format}=require("date-fns");
const{v4:uuid}=require("uuid"); //creates unique id
//common core modules
const fs=require("fs");
const fsPromises=require("fs").promises;
const path=require("path");

//function to log events
const logEvents=async(message,logName)=>{
  //create the log item
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  const dateTime=`${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem=`${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try{
    //if the folder doesn't exist yet, create it
    if(!fs.existsSync(path.join(__dirname,"logs"))){
      await fsPromises.mkdir("./logs");
    }
    //append logs/errLog.txt or reqLog.txt with the log item
    await fsPromises.appendFile(path.join(__dirname,"logs",logName),logItem);
  } catch(err){
      console.log(err);
  }
};

//export the function
module.exports=logEvents;
