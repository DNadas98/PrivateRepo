{
  let state=false;
  function exampleJsFunction(){
    if(state===false){
      document.getElementById("example").innerHTML="press again to change back";
      state=!state;
    }
    else{
      document.getElementById("example").innerHTML=str;
      state=!state;
    }
  }
}