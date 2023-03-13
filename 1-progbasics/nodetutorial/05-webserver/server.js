//https://www.youtube.com/watch?v=3ZAKY-CDKog&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=5
//currently at https://youtu.be/3ZAKY-CDKog?t=1601

//import common core modules http, fs, fs promises, path
const http=require("http");
const fs=require("fs");
const fsPromises=require("fs").promises;
const path=require("path");//!

//handle events https://nodejs.org/api/events.html#events_events
const EventEmitter=require("events"); //import events
const logEvents=require("./logEvents"); //my custom module
class Emitter extends EventEmitter{}  
const myEmitter=new Emitter();  //initialize object
myEmitter.on("log",(msg,fileName)=>logEvents(msg,fileName)); //add listener for the log event

//set the port
const PORT=process.env.PORT || 3000;

//
const serveFile=async(filePath,contentType,response)=>{
  try{
    const rawData=await fsPromises.readFile(filePath,
      contentType.includes("image")  //if it's an image, leave encoding blank, else set to utf8
      ?""
      :"utf8");
    const data=contentType==="application/json" //if it's a json file, parse
      ?JSON.parse(rawData)
      :rawData;
    response.writeHead(
      filePath.includes("404.html") //don't send 200 when 404
        ?404
        :200,
      {"Content-Type":contentType});
    response.end(
      contentType==="application/json"
        ?JSON.stringify(data)
        :data);
  } catch(err){
    console.log(err);
    myEmitter.emit("log",`${err.name}: ${err.message}`,"errLog.txt"); //Emit event
    response.statusCode=500;
    response.end();
  }
};

//create the server
const server=http.createServer((req,res)=>{
  console.log(req.url,req.method);  //log request and request method
  //GET: browser requests site from server
  //other html methods: PUT:browser sends data to server in the url, POST: browser sends data not to the url
  myEmitter.emit("log",`${req.url}\t${req.method}`,"reqLog.txt"); //Emit event

  const extension=path.extname(req.url);  //get extension name
  //define content types
  let contentType;
  switch(extension){
    case ".css":
      contentType="text/css";
      break;
    case ".js":
      contentType="text/javascript";
      break;
    case ".json":
      contentType="application/json";
      break;
    case ".txt":
      contentType="text/plain";
      break;
    case ".jpg":
      contentType="image/jpeg";
      break;
    case ".png":
      contentType="image/png";
      break;
    default:
      contentType="text/html";  //default: html!
  }

  //determine file path based on content type
  let filePath=//chained ternary statement: condition ? if_true : else_condition2 ? if_condition2_true : else_condition3 ? ...
    contentType==="text/html"&&req.url==="/"  //if its html and url is just a /
      ?path.join(__dirname,"views","index.html")  //then this will be the file shown in the browser: (./views/index.html)
      :contentType==="text/html"&&req.url.slice(-1)==="/" //(else if): the last char is a /: (subdirectory, not just the main)
        ?path.join(__dirname,"views",req.url,"index.html")  //then same as before but include path
        :contentType==="text/html"  //condition 3: is it a html?
          ?path.join(__dirname,"views",req.url) //if it is, look in the views folder
          :path.join(__dirname,req.url);  //look in another folder
  if(!extension&&req.url.slice(-1)!=="/") filePath+=".html";  //makes .html ext. not required in the browser

  //check to see if the file exists
const fileExists=fs.existsSync(filePath);
if(fileExists){
  //serve the file, http response
  serveFile(filePath,contentType,res);
}
else{
  //handle the 301 redirects
  switch(path.parse(filePath).base){
    case "old-page.html":
      res.writeHead(301,{"Location":"/new-page.html"}); //redirect from old-page to new-page
      res.end();
      break;
    case "www.-page.html":
      res.writeHead(301,{"Location":"/"});  //redirect to root
      res.end();
      break;
    default:  //handle the 404
      serveFile(path.join(__dirname,"views","404.html"),"text/html",res);

  }
}
});

//make server listen for requests (start the server) should always be at the bottom
server.listen(PORT,()=>console.log(`server running on port ${PORT}`));

