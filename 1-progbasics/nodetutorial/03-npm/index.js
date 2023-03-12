/*https://docs.npmjs.com/cli/v9
npm i nodemon
npm i date-fns
--save-dev shortcut: -D
package.json:
    "start":"node index",
    "dev":"nodemon index"
npm run dev
npm i uuid
https://docs.npmjs.com/packages-and-modules
"uuid": "^9.0.0": "major version . minor version . patch version"
  "":dont update, use specifically this
  "^":update minor version or patch version
  "~":update patch version, no minor version or major version
  "*":update everything use the absolutely latest version
npm update
npm uninstall=un=rm
  npm rm -D, npm rm -g
  won't change script!
*/
const {format}=require("date-fns");
const{v4:uuid}=require("uuid");//import specific version
console.log(format(new Date(),"yyyyMMdd\tHH:mm:ss"));
console.log(format(new Date(),"yyyy"));
console.log(uuid());  //generate different ID on each log
console.log("asd");
