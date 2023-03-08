/*
    https://docs.google.com/spreadsheets/d/1Y76vfs16T3yq3IT3j3IM4uUS3V_e_cflCg9KTCYdS_I/edit#gid=1688105392
    https://www.codewars.com/users/DNadas98/completed_solutions
*/

//Random
{
    //https://www.codewars.com/kata/582e0e592029ea10530009ce
    console.log("duckDuckGoose");
    function duckDuckGoose(players, goose) {
        /*for(let i=0;i<players.length;i++){
          if(i==(goose-1)%players.length){
            return players[i].name;
          }
        }
        return "error";*/
        return players[(goose-1)%players.length].name;
      }
    console.log(duckDuckGoose([a={name:"A"},b={name:"B"},c={name:"C"},d={name:"D"}],17));
    
    //https://www.codewars.com/kata/5412509bd436bd33920011bc
    console.log("\nmaskify");
    function maskify(cc) {
        let arr=[];
        arr=cc.split("");
        for(let i=0;i<arr.length-4;i++){
            arr[i]="#";
        }
        arr=arr.join("");
        return arr;
    }
    console.log(maskify("4556364607935616"),maskify("123"))

    //https://www.codewars.com/kata/54b724efac3d5402db00065e
    console.log("\ndecodeMorse");
    decodeMorse = function(morseCode){  //handle trailing spaces in a string, where elements are split by spaces
        let morseArray=morseCode.trim().split(" ");
        //trim removes all whitespaces from the beginning and the end of a string
        //split(" ") splits by spaces, but multiple spaces result in multiple "" elements
        let result="";
        for(let i=0;i<morseArray.length;i++){
            if(morseArray[i-1]!=""&&morseArray[i]==""){//only +=" " (put space) at the first "" element
            result+=" ";
            }
            else if(morseArray[i]!=""){
            result+=MORSE_CODE(morseArray[i]); //MORSE_CODE translates letter by letter
            //console.log(i,"ű",morseArray[i],"ű",result);
            }
        }
        return result;
    }
    console.log("https://www.codewars.com/kata/54b724efac3d5402db00065e");

    //https://www.codewars.com/kata/52c31f8e6605bcc646000082
    console.log("\ntwoSum");
    function twoSum(numbers, target) {
        for(let i=0;i<numbers.length;i++){
            for(let j=0;j<numbers.length;j++){
                if(i!=j&&numbers[i]+numbers[j]==target){
                    return [i,j];
                }
            }
        }
        return "error";
    }
    console.log(twoSum([2,5,7],12));

    //https://www.codewars.com/kata/54e6533c92449cc251001667
    console.log("\nuniqueInOrder");
    var uniqueInOrder=function(iterable){
        let resultArr=[];
        let j=0;
        for(let i=0;i<iterable.length;i++){
            if(iterable[i]!=resultArr[j-1]){
                resultArr[j]=iterable[i];
                j++;
            }
        }
        return resultArr;
    }
    console.log(uniqueInOrder("AAAABBBCcDAAAA"), uniqueInOrder("11112333"));

    //https://www.codewars.com/kata/5541f58a944b85ce6d00006a
    console.log("\nproductFib");
    function productFib(prod){
        let fibArr=[0,1];   //first 2 numbers of the sequence
        let i=2;    //start with the 3rd number
        do{
            fibArr[i]=fibArr[i-2]+fibArr[i-1];  //the rule of the sequence
            if(fibArr[i]*fibArr[i-1]==prod){
                return [fibArr[i-1],fibArr[i],true];
            }
            i++;
        }while((fibArr[i-2]+fibArr[i-1])*fibArr[i-1]<=prod);
        return [fibArr[i-1],fibArr[i-2]+fibArr[i-1],false];
    }
    console.log(productFib(714),productFib(800));
}

//Phase1
{
    console.log("\nPhase1");

    //array.slice,join, string.split,replace
    let array=["a","s","d","f","g"];
    console.log(array);
    console.log(array.slice(1,-1));    //-1: backwards from the end of the array
    console.log(array.join(""));  //join()->s,d,f; join("")->sdf
    console.log(array.join("").split(""));   //split()->["sdf"]; split("")->["s","d","f"]
    let string2="       asd a  a a asd  ";
    console.log(string2,"\n",string2.replace(/\s/g, ''));   //replace(toReplace,toReplaceWith); /\s/:"matches all whitespace char", g: global, for the whole string
    
    //Math.
    let arrayOfNum=[-2.1,3,0,-5.67,891.0,-11];
    console.log(arrayOfNum);
    console.log("min:",Math.min(...arrayOfNum),"max:",Math.max(...arrayOfNum));   //...:extract data from arrays into distinct variables
        //https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa
    
    //bool ? (if true) : (if false)
    function booleanToString(b){
        return b?"yep":"nope";
    }
    console.log(booleanToString(true),booleanToString(false));

    //Abbreviate a Two Word Name
    function abbrevName(name){
        return (name.split(" ")[0][0]+"."+name.split(" ")[1][0]).toUpperCase();
    }
    console.log(abbrevName("daniel nadas"));
    //.map(): Convert number to reversed array of digits
    function digitize(n) {
        return n.toString().split("").reverse().map(Number);    //https://www.w3schools.com/jsref/jsref_map.asp
    }
    console.log(digitize(9876))
}

//Phase
{
    //
}

//Phase
{
    //
}

//Phase
{
    //
}

//Phase
{
    //
}

//Phase
{
    //
}