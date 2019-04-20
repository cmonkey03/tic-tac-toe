var x = 'x';
var o = 'o';
var boardRow = [
  //column1
  [null, x, o],
  //column2
  [x, x, x],
  //column3
  [o, o, null]
]

const boardDiag = [
  //column1
  [x, null, o],
  //column2
  [o, x, o],
  //column3
  [o, x, x]
]

function winner(board) {
  for (var i = 0; i <= 2; i++) {
      //column win solution
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return `The row winner is ${board[i][0]}`
      }
    }
  // diaganol1
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return `The diaganol winner is ${board[0][0]}`
  // diaganol2
  } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return `The diaganol winner is ${board[0][2]}`
  } else {
    return null
  }
}

// if row: board[0][0] board[1][0] board[2][0]
//increment: board[0][i]
//returns winner

    // board[0][i] board[0][i] board[0][i]
  //   board[1][0] board[2][0]
  // if column: board[0][0] board[0][1], board[0][2] are same
  // increment board[i][0]
  //return winner
console.log(winner(boardRow))

export default winner;
