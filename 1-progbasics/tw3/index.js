let board = []; //define ai board
let ownBoard = []; //define player board

//data parsing input parameter data: size:4,s:{s1:a1,s2:c4}
function getSettings(data){
  let [size, ...ste] = data.split(',') // ['size:4', 's:{s1:a1,s2:c4}']
  let steps = ste.join(',')

  size = size.split(':')[1] // ['size', '4'] -> 4
  //Number(size)? / Int.parse??
  steps = steps.slice(3, -1) // 's:{s1:a1,s2:c4}' -> 's1:a1,s2:c4'
  steps = steps.split(',') // ['s1:a1', 's2:c4']

  let stepsArray = getStepsByArray(steps)
  displayTextMessage(data,"black");
  displayMessage("size:"+size+", ai ships:"+JSON.stringify(stepsArray),"black");

  generateMap(size, stepsArray) //stepsArray-->ships
}

function getStepsByArray(array){
  let obj = [];  /*arr=[] instead of obj={}?*/
  for(let i = 0; i< array.length; i++){
    let splited = array[i].split(':')[1] // ['s1:a1', 's2:c4'] -> ['s1' ,'a1', 's2', 'c4']
    let data = splited.split('') // ['a1', 'c4'] -> ['a', '1']
    let row = data[0].charCodeAt(0)-97 // ['a', '1'] -> (a->0, 1)
    //a: ASCII 97
    let column = data[1] // 1, 4

    obj[i] = {
      row: row,
      column: Number(column)-1,
    }
  }
  console.log(obj)
  return obj
}
//data parsing results: obj=[{column:0,row:0},{column:3},row:2] (getStepsByArray); size=4 (getSettings)
// --> generateMap input size, ships for ai board, ship placement:
function generateMap(size, ships){ //stepsArray-->ships
  //clear the boards
  board = []
  ownBoard = []
  //make an i x j (size x size) board and ownBoard array
  for(let i = 0; i < size; i++){
    if(!board[i]) {board[i] = []}
    if(!ownBoard[i]) {ownBoard[i] = []}
    for(let j = 0; j < size; j++){
      if(!board[i][j]){board[i][j] = []}
      if(!ownBoard[i][j]){ownBoard[i][j] = []}

      //clear ai board and fill in the ai ships ("o")
      board[i][j] = ""
      for(el in ships){
        i === ships[el].row && j === ships[el].column ? board[i][j] = 'o' : ''
      }
      //clear ownBoard
      ownBoard[i][j] = ""
    }
  }
  //display the boards
  displayBoard({boardnumber: 1,board: board});
  displayBoard({boardnumber: 2,board: ownBoard});
}


function selectGame(data) {
  //displayMessage(data, "black");
  getSettings(data)
}

function handleClick(data) {
  //input parameter: data: x:"B",y:"3",clickType:"left"
  console.log(data);
  displayTextMessage(data.x + data.y + data.clickType);
}

/*reset both boards*/
function resetGame() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = "";
      ownBoard[i][j] = "";
    }
  }
  displayBoard({ boardnumber: 1, board: board });
  displayBoard({ boardnumber: 2, board: ownBoard });
}

function aiShoot(data) {

}
/*
displayBoard({boardnumber: 1,board: board});
displayBoard({boardnumber: 2,board: ownBoard});
displayMessage("message", "green");
displayTextMessage("text message", "red");*/
