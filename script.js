console.log("testing");
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
    } else {
      console.log("already occpied");
    }
  },
  markO: function (row, col) {
    if (this.board[row][col] == "") {
      this.board[row][col] = "O";
      this.checkWin("O");
      this.checkDraw();
    } else {
      console.log("already occpied");
    }
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
        console.log("It's a draw");
      }
    }
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
      console.log("new game");
      return true;
    }
    if (
      this.board[0][2] == player &&
      this.board[1][1] == player &&
      this.board[2][0] == player
    ) {
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
  },
  updateDisplayBoard: function () {
    const divs = document.querySelectorAll(".ticGrid");
    divs.forEach(div => {
      const row = div.dataset.row;
      const col = div.dataset.col;
      div.textContent = this.board[row][col];
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

