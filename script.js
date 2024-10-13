const resultDisplay = document.getElementById("game-result")
resultDisplay.classList.add("gamee-result")

console.log("testing");
let currentPlayer = "X";
let Gameboard = {
  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],


  displayBoard: function () {
    for (let row = 0; row < this.board.length; row++) {
      console.log(this.board[row]);
    }
  },
  markX: function (row, col) {
    if (this.board[row][col] == "") {
      this.board[row][col] = "X";
      this.checkWin("X");
      this.checkDraw();
    } 
    else {
      console.log("already occpied");
    }
    this.updateDisplayBoard()
  },
  markO: function (row, col) {
    if (this.board[row][col] == "") {
      this.board[row][col] = "O";
      this.checkWin("O");
      this.checkDraw();
      
    } else {
      console.log("already occpied");
    }
    this.updateDisplayBoard()
  },
  checkDraw: function () {
    if (this.checkWin() !== true) {
      let isDraw = true;
      for (let row = 0; row < this.board.length; row++) {
        for (let col = 0; col < this.board[row].length; col++) {
          if (this.board[row][col] == "") {
            isDraw = false;
            break;
          }
        }
      }
      if (isDraw) {
        resultDisplay.textContent += "It's a Draw!"
        console.log("It's a draw");
        this.restartGame()
      }
    }
    
    this.updateDisplayBoard()
  },
  checkWin: function (player) {
    for (let row = 0; row < this.board.length; row++) {
      if (
        this.board[row][0] == player &&
        this.board[row][1] == player &&
        this.board[row][2] == player
      ) {
        console.log(`${player} wins`);
        this.restartGame();
        console.log("new game");
        return true;
      }
    }

    for (let col = 0; col < this.board.length; col++) {
      if (
        this.board[0][col] == player &&
        this.board[1][col] == player &&
        this.board[2][col] == player
      ) {
        console.log(`${player} wins`);
        this.restartGame();
        console.log("new game");
        return true;
      }
    }
    if (
      this.board[0][0] == player &&
      this.board[1][1] == player &&
      this.board[2][2] == player
    ) {
      
      console.log(`${player} wins`);
      this.restartGame();
      resultDisplay.textContent = `${player} won`
      console.log("new game");
      return true;
    }
    if (
      this.board[0][2] == player &&
      this.board[1][1] == player &&
      this.board[2][0] == player
    ) {
      resultDisplay.textContent = `Congrats ${player} Won!`

      console.log(`${player} wins`);
      this.restartGame();
      console.log("new game");
      return true;
    } else console.log("");
  },
  restartGame: function () {
    for (let row = 0; row < this.board.length; row++) {
      for (let col = 0; col < this.board[row].length; col++) {
        this.board[row][col] = "";
      }
    }
    this.updateDisplayBoard()
  },
  updateDisplayBoard: function () {
    const divs = document.querySelectorAll(".ticGrid");
    divs.forEach(div => {
      const row = div.dataset.row;
      const col = div.dataset.col;
      div.textContent = this.board[row][col];
      div.classList.remove("playerX", "playerO")
      if(this.board[row][col] == "X"){
        div.classList.add("playerX")
      }
      else if(this.board[row][col]== "O"){
        div.classList.add("playerO")
      }
    });
  },
  
};

const gameContainer = document.querySelector("#game-container");
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    const gameDiv = document.createElement("div");
    gameDiv.classList.add("ticGrid");
    gameDiv.dataset.row = row;
    gameDiv.dataset.col = col;
    gameContainer.appendChild(gameDiv);
  }
}

const gameCells = document.querySelectorAll(".ticGrid");
gameCells.forEach(cell => {
  cell.addEventListener("click", function() {
    const row = cell.dataset.row;
    const col = cell.dataset.col;  
    if (Gameboard.board[row][col]=="") {
      if (currentPlayer === "X") {
        Gameboard.markX(row, col);
        currentPlayer = "O"
    }
    else{
      Gameboard.markO(row,col)
      currentPlayer = "X"
    }
  }
       
  });
});



const RestartButton = document.createElement("button")
RestartButton.classList.add("restart-button")
RestartButton.addEventListener("click" , ()=>Gameboard.restartGame())
const maingameDiv = document.querySelector(".game")
maingameDiv.appendChild(RestartButton)
RestartButton.innerHTML="Restart"

