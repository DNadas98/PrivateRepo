//https://www.youtube.com/watch?v=3ZAKY-CDKog&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=5
//currently at https://youtu.be/3ZAKY-CDKog?t=1601


//import common core modules
const http=require("http");
const fs=require("fs");
const path=require("path");//!
const fsPromises=require("fs").promises;
//events
/*
const logEvents=require("./logEvents"); //custom module
const EventEmitter=require("events"); //import events
class Emitter extends EventEmitter{}
//initialize object
const myEmitter=new Emitter();*/
//set port
const PORT=process.env.PORT || 3000;
//
const serveFile=async(filePath,contentType,response)=>{
  try{
    const data=await fsPromises.readFile(filePath,"utf8");
    response.writeHead(200,{"Content-Type":contentType});
    response.end(data);
  } catch(err){
    console.log(err);
    response.statusCode=500;
    response.end();
  }
};
//create server
const server=http.createServer((req,res)=>{
  console.log(req.url,req.method);  //log request and request method
  //GET: browser requests site from server
  //other html methods: PUT:browser sends data to server in the url, POST: browser sends data not to the url
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
      contentType="text/json";
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
      contentType="text/html";  //default: html
  }
  //determine file path based on content type
  let filePath=//chained ternary statement: condition ? if_true : else_condition2 ? if_condition2_true : else_condition3 ? ...
    contentType==="text/html"&&req.url==="/"  //condition 1(if): if its html and url is just a /
      ?path.join(__dirname,"views","index.html")  //then this will be the file shown in the browser: (./views/index.html)
      :contentType==="text/html"&&req.url.slice(-1)==="/" //condition 2(else if): the last char is a /: (subdirectory, not just the main)
        ?path.join(__dirname,"views",req.url,"index.html")  //then this will be the value
        :contentType==="text/html"  //condition 3: is it a html?
          ?path.join(__dirname,"views",req.url) //look in the views folder
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


/*myEmitter.on("log",(msg)=>logEvents(msg)); //add listener for the log event
//Emit event
myEmitter.emit("log","Log event emitted!");*/
