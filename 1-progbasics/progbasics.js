/*00. Onboarding, git:
    my codecool setup guide: https://drive.google.com/drive/folders/1o-PZujjumsUnAjZ9eP2MywMNPox7MFQs
    to install: NodeJS, VSCode, Git, Chrome for chromecast
    git ssh: https://journey.study/v2/learn/materials/tutorials/git-ssh-setup.md
    git cheatsheet: https://journey.study/v2/learn/materials/pages/git/git-basics.md
    google Docs must be used for presentations
*/

//01/01. Structuring Data
{
    console.log("01/01. Structuring Data");
    let randomString="Random String";   //string variable
    let randomBoolean=false;    //boolean variable
    const birthYear=1998;   //constant
    const a=4,b=3,c=2; let d=a**b,e=d/(c+d); console.log(d,e);  //same type of variables can be declared after one another with ,
    let currentYear=new Date().getFullYear(); //new Date(). ... date and time of the local pc
    let age=currentYear-birthYear;   //not a constant
    let numArray=[0,1,-3,5,-7.5,11];    //array of numbers
    let stringArray=["null","one","two"];    //array of strings
    let randomObject={  //object
        key1: "value1", //
        key2: 2,
    };
    let objectArray=[   //array of objects
        randomObject,
        {
            key1: "onetwo",
            key2: 34,
        },
    ];
    console.log(objectArray,"\n",objectArray[0].key2);
    let i=0;
    for(i;i<10;i+=3){
        i++;
        console.log(i);
    }
    console.log(i);
}
/*
    https://journey.study/v2/learn/courses/252/modules/10952/units/5
    https://github.com/CodecoolGlobal/data-around-us-javascript-DNadas98
    https://github.com/CodecoolGlobal/my-top-4-movies-javascript-DNadas98
    https://github.com/CodecoolGlobal/best-selling-albums-javascript-DNadas98
    https://github.com/CodecoolGlobal/hundreds-of-movies-javascript-DNadas98

*/

//01/02. Logic behind coding
{
    console.log("\n\n01/02. Logic behind coding");
    //conditional statements
    let text="";

    switch (new Date().getDay()) {  //condition must be based on the same variable, but it's written only once
        case 6:
            text = "Today is saturday";
            break;
        case 0:
            text = "Today is sunday";
            break;
        default:
            text = "Looking forward to the weekend";
    }
    console.log(text);

    if(new Date().getDay()==6){    //condition can be based on a different variable, but it must be written every time
        text = "Today is saturday";
    }
    else if(new Date().getDay()==0){
        text = "Today is sunday";
    }
    else if(new Date().getMonth()>=6&&new Date().getMonth()<=8){
        text = "It's not the weekend, but at least it's summer";
    }
    else{
        text = "Looking forward to the weekend and also to next summer";
    }
    console.log(text);
    
    //loops
    let array=[0,1,2,3,4];

    for(let i=0;i<array.length;i++){
        console.log("for",array[i]);
    }
    for(const element of array){
        console.log("for of",element);
    }

    let i=0;
    while(i<array.length-2){    //executed only when the condition is true
        console.log("while",array[i]);
        i++;
    }
    i=0;
    do{
        console.log("do while still displays array[i]=",array[i],", i=",i);
        i++;
    }while(i>100);  //executed at least once, even when the condition fails
    console.log("do while final i",i);

}
/*
    https://journey.study/v2/learn/courses/252/modules/10952/units/6
    https://github.com/CodecoolGlobal/logic-inside-us-javascript-DNadas98
    https://github.com/CodecoolGlobal/what-if-javascript-DNadas98
    https://github.com/CodecoolGlobal/sold-out-javascript-DNadas98
    https://github.com/CodecoolGlobal/missing-heroes-javascript-DNadas98
*/

//01/03. 1st Teamwork
{
    console.log("\n\n01/03. 1st Teamwork");

    //data
    let ourTeam={members:[
        {
            name:"Dani",
            codingLevel:10,
            birthday:{
                year:1998,
                month:5,
                day:11,
            },
        },
        {
            name:"Sanyi",
            codingLevel:20,
            birthday:{
                year:1996,
                month:2,
                day:13,
            },
        },
        ],
    };

    //using a temporary variable to overwrite something
    for (let i = 0; i < ourTeam.members.length; i++) {
        console.log(ourTeam.members[i].codingLevel);
        let tmplvl = ourTeam.members[i].codingLevel;
        ourTeam.members[i].codingLevel = { level: tmplvl, seniority: "" };
            if (ourTeam.members[i].codingLevel.level >= 0 && ourTeam.members[i].codingLevel.level < 50) {
                ourTeam.members[i].codingLevel.seniority = "junior";
            }
        console.log(ourTeam.members[i].codingLevel);
    }

    //age taking month and day into account
    const currentyear = new Date().getFullYear();
    const currentmonth = new Date().getMonth();
    const currentday = new Date().getDay();
    let averageAge = 0;
    let averageCodingLevel = 0;
    for (let i = 0; i < ourTeam.members.length; i++) {
        if (ourTeam.members[i].birthday.month < currentmonth) {
            averageAge = averageAge + Math.floor(((currentyear - ourTeam.members[i].birthday.year) / ourTeam.members.length));
        }
        else if (ourTeam.members[i].birthday.month == currentmonth && ourTeam.members[i].birthday.day <= currentday) {
            averageAge = averageAge + ((currentyear - ourTeam.members[i].birthday.year) / ourTeam.members.length);
        }
        else {
            averageAge = averageAge + ((currentyear - ourTeam.members[i].birthday.year - 1) / ourTeam.members.length);
        }
    }
    console.log("average age: ",averageAge);

    //min, max algorithm
    let youngest = ourTeam.members[0];
    let oldest = ourTeam.members[0];
    for (let i = 0; i < ourTeam.members.length; i++) {
        if (ourTeam.members[i].birthday.year > youngest.birthday.year) {
            youngest = ourTeam.members[i];
        }
        if (ourTeam.members[i].birthday.year < oldest.birthday.year) {
            oldest = ourTeam.members[i];
        }
    }
    console.log("Youngest:",youngest.name,", Oldest:",oldest.name);

    //if it is a key in the object
    if("name" in ourTeam.members[0]){
        console.log("'name' is a key of the object 'ourTeam.members[0]', its value is:",ourTeam.members[0].name);
    }

}
/*
    https://journey.study/v2/learn/courses/252/modules/10952/units/7
    https://github.com/CodecoolGlobal/team-player-javascript-DNadas98
*/

//02/01. Reusability with Functions
{
    console.log("\n\n02/01. Reusability with Functions");
    //the data
    let favoriteBooks=[
        {
            title:"Dune",
            author:"Frank Herbert",
            year:1965,
            characters:["Paul Atreides", "Lady Jessica", "Duke Leto Atreides", "Baron Vladimir Harkonnen"]
        },
        {
            title:"For Whom the Bell Tolls",
            author:"Ernest Hemingway",
            year:1940,
            characters:["Robert Jordan", "Pablo", "Maria", "Anselmo"]
        }
    ];
    let currentYear=new Date().getFullYear();

    //declare new function: function functionName(parameters){code to be executed when it's called};
    //call function: functionName(arguments); arguments: the real data passed into the function's parameters
    function averageAge(p,q){
        let avg=0;
        for(let i=0;i<p.length;i++){
            avg=avg+((q-p[i].year)/p.length);   //p[i].year is working here
        }
        return avg;
    }
    console.log(averageAge(favoriteBooks,currentYear));
    function average(p,q){
        let avg=0;
        for (let i = 0; i < p.length; i++) {
            if (typeof p[i][q] === 'number') {  //p[i].q doesn't work here, p[i][q] should be used!
              avg += ((currentYear-p[i][q])/p.length);
            }
        }
        return avg;
    }
    console.log(average(favoriteBooks,"year"));
}
/*
    https://journey.study/v2/learn/courses/252/modules/10952/units/8
    https://github.com/CodecoolGlobal/organising-operations-javascript-DNadas98
    https://github.com/CodecoolGlobal/reusable-functions-javascript-DNadas98
    https://github.com/CodecoolGlobal/prince-of-persia-tutorial-javascript-DNadas98
    https://github.com/CodecoolGlobal/movie-database-processor-javascript-DNadas98

*/

//02/02. 2nd Teamwork
{
    console.log("\n\n02/02. 2nd Teamwork");
    
    let feedback="presentation feedback:\n"+
    "    less code (1, max 2 things) but explain it more in detail\n"+
    "    don't turn towards the wall\n"+
    "    let 1 person control the laptop, don't stand in each others way\n"+
    "    practice it, thursday afternoon is for presentation practice!\n"+
    "    fit in 5 mins somehow\n"+
    "code feedback:\n"+
    "    avoid global variables\n"+
    "    use switch where possible, only use if-else if when there are different variables in the conditions\n"+
    "    use variables for numbers and strings that are used multiple times in the code (better debugging)\n"+
    "    use longer variable names that describe the variable better\n"+
    "    use functions with parameters for doing a similar thing multiple times instead of repeated statements\n"+
    "teamwork feedback:\n"+
    "    be able to explain the logic of your code\n"+
    "    explain the code, wait for the others to catch up, then do actual teamwork\n"+
    "    try both delegating tasks and pair programming, each where it makes sense.";
    console.log(feedback,"\nAlso a lot of scrolling left and right in VSCode can be avoided this way.")
}
/*
    https://journey.study/v2/learn/courses/252/modules/10952/units/9
    https://github.com/DNadas98/0princeofpersia
    https://github.com/CodecoolGlobal/prince-of-persia-javascript-baloghb0110

*/

//03/01. Builtin methods
//.length, .includes, .push, math.floor, math.pow, object.hasOwnProperty("key1")
//also operators! "key1" in onject
{
    console.log("\n\n03/01. Builtin methods");
}
/*
    https://journey.study/v2/learn/courses/252/modules/10952/units/10
    https://github.com/CodecoolGlobal/function-best-thing-javascript-DNadas98
    https://github.com/CodecoolGlobal/the-pizza-madness-javascript-DNadas98
    https://github.com/CodecoolGlobal/project-halpert-javascript-DNadas98
    https://github.com/CodecoolGlobal/the-catastrophe-javascript-DNadas98
*/

//03/02. Function as an argument
{
    console.log("\n\n03/02. Function as an argument");
    //copied data from https://github.com/CodecoolGlobal/my-top-4-movies-javascript-DNadas98
    let favMovies=[
        {
            title:"The Godfather",
            year:1972,
            rating:9.2,
            description:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
        },
        {
            title:"Memento",
            year:2000,
            rating:8.4,
            description:"A man with short-term memory loss attempts to track down his wife's murderer.",
        },
        {
            title:"The Matrix",
            year:1999,
            rating:8.7,
            description:"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        },
        {
            title:"Fight Club",
            year:1999,
            rating:8.8,
            description:"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        }
    ];
    //map, forEach simplest form
    console.log("\n1. forEach, map:\n");
    function logTitles(p){//map
        return p.map(q=>q.title);
    }
    function logTitles2(p){///forEach
        let asd="";
        p.forEach(q=>(asd+=q.title+"\n"));
        return asd;
    }
    console.log(logTitles(favMovies),"\n",logTitles2(favMovies));
    //Object.values, ..., key in object
    let asdfg={a:"b",c:"d",e:"f"};
    console.log(Object.values(asdfg).length); //display each value of each key in an object (or something)
    console.log("a" in asdfg);    //true if it's a key in the object, false if not
    let asd=[0,2,5,7,3];
    console.log(...asd);    //expand object
}
/*
    https://journey.study/v2/learn/courses/252/modules/10952/units/11
    https://github.com/CodecoolGlobal/function-second-best-javascript-DNadas98
    https://github.com/CodecoolGlobal/refactor-movie-db-processor-javascript-DNadas98
    https://github.com/CodecoolGlobal/frontend-vs-backend-javascript-DNadas98
    https://github.com/CodecoolGlobal/fake-profiles-javascript-DNadas98
*/

//03/03. 3rd Teamwork
{
    //console.log("\n\n03/03. 3rd Teamwork");
    //
}
/*
    //
*/

//04/01. JSON
{
    //console.log("\n\n04/01. JSON");
    //
}
/*
    //
*/

//04/02. Structuring the View
{
    //console.log("\n\n04/02. Structuring the View");
    //
}
/*
    //
*/

//04/03. 4th Teamwork
{
    //console.log("\n\n04/03. 4th Teamwork");
    //
}
/*
    //
*/

//05/01. Events of the View
{
    //console.log("\n\n05/01. Events of the View");
    //
}
/*
    //
*/

//05/02. Design of the View
{
    //console.log("\n\n05/02. Design of the View");
    //
}
/*
    //
*/

//05/03. 5th Teamwork
{
    //console.log("\n\n05/03. 5th Teamwork");
    //
}
/*
    //
*/

//06/01. Workbook
{
    //console.log("\n\n06/01. Workbook");
    //
}
/*
    //
*/

//06/02. 1.PA
{
    //console.log("\n\n06/02. 1.PA");
    //
}
/*
    //
*/

