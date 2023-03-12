https://www.youtube.com/watch?v=JZXQ455OT3A&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=1
//node runs on a server, not in browser
//global object vs window object
console.log(global);
//commonJS modules instead of ES6 modules
const os =require("os");
const path=require("path");

console.log(os.type());
console.log(__filename);
console.log(path.extname(__filename));

const math=require("./math");
console.log(math.add(2,3));
const{add,subtract,multiply,divide}=require("./math");
console.log(divide(2,3));
//node missing some js apis like fetch