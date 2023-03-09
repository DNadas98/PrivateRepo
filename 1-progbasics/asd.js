//... operator: "unpacks" the elements of an array
let asd1=[1,2,3,4,5,8];
console.log(Math.max(asd1));//
console.log(Math.max(...asd1));
let asd2=["a","b","c","d"];
let asd3=["e","f","g","h"];
asd2.push(asd3);
console.log(asd2,"\n",...asd2);
let asd4=["a","b","c","d"];
let asd5=["e","f","g","h"];
asd4.push(...asd5);
console.log(asd4,"\n",...asd4);

//??:)
console.log("\n\n");
console.log(null===0);
console.log(null==0);
console.log(null>0);
console.log(null<0);
console.log(null>=0);
console.log(null<=0,"\n\n");
