/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let state=false;

  function exampleJsFunction(){
    if(state===false){
      document.getElementById("example").innerHTML="press subscribe again to change back";
      state=!state;
    }
    else{
      document.getElementById("example").innerHTML=str;
      state=!state;
    }
}
