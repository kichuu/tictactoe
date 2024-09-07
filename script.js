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
    if(this.board[row][col]==""){
    this.board[row][col] = "X";
    this.checkWin("X");
    }
    else{console.log("already occpied")}
  },
  markO: function (row, col) {
    if(this.board[row][col]==""){
    this.board[row][col] = "O";
    this.checkWin("O");
    }
    else{console.log("already occpied")}
  },
  checkWin: function (player) {
    for (let row = 0; row < this.board.length; row++) {
      if (
        this.board[row][0] == player &&
        this.board[row][1] == player &&
        this.board[row][2] == player
      ) {
        console.log(`${player} wins`);
        return;
      }
    }

    for (let col = 0; col < this.board.length; col++) {
      if (
        this.board[0][col] == player &&
        this.board[1][col] == player &&
        this.board[2][col] == player
      ) {
        console.log(`${player} wins`);
        return;
      }
    }
    if (
      this.board[0][0] == player &&
      this.board[1][1] == player &&
      this.board[2][2] == player
    ) {
      console.log(`${player} wins`);
      return;
    }
    if (
      this.board[0][2] == player &&
      this.board[1][1] == player &&
      this.board[2][0] == player
    ) {
      console.log(`${player} wins`);
      return;
    }
    else console.log("")
  },
};

//   checkWin: function () {
//       if (
//           Gameboard.board[0][0] == "X" &&
//           Gameboard.board[0][1] == "X" &&
//           Gameboard.board[0][2] == "X"
//       ) {
//           console.log("X wins");
//       } else if (
//           Gameboard.board[1][0] == "X" &&
//           Gameboard.board[1][1] == "X" &&
//           Gameboard.board[1][2] == "X"
//       ) {
//           console.log("X wins");
//       } else if (
//           Gameboard.board[2][0] == "X" &&
//           Gameboard.board[2][1] == "X" &&
//           Gameboard.board[2][2] == "X"
//       ) {
//           console.log("X wins");
//       } else if (
//           Gameboard.board[0][0] == "X" &&
//           Gameboard.board[1][0] == "X" &&
//           Gameboard.board[2][0] == "X"
//       ) {
//           console.log("X wins");
//       } else if (
//           Gameboard.board[0][1] == "X" &&
//           Gameboard.board[1][1] == "X" &&
//           Gameboard.board[2][1] == "X"
//       ) {
//           console.log("X wins");
//       } else if (
//           Gameboard.board[0][2] == "X" &&
//           Gameboard.board[1][2] == "X" &&
//           Gameboard.board[2][2] == "X"
//       ) {
//           console.log("X wins");
//       }

//     } else console.log("no win")
//   },
