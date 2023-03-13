const board = [["","","",""],["","","","0"],["q","","",""],["","","",""]];

function selectGame(data) {
//input: string: size:_,s:{s_:a_,s_,c_}
// ezekbe a mezőkbe rakja az ai a hajókat
//game 3-ig 2db, game 4-től 3db
  displayMessage(data, "black");//fenti üzenet
}

function handleClick(data) {
  displayTextMessage(data.x + data.y + data.clickType);
}

function resetGame() {
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      board[i][j] = "";
    }
  }
  displayBoard({boardnumber: 1,board: board});
}

function aiShoot(data) {
}

displayBoard({boardnumber: 1,board: board});
displayBoard({boardnumber: 2,board: board});
displayMessage("message", "green");
displayTextMessage("text message", "red");