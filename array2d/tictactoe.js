function hasPlayerWon(mat, playerSymbol) {
  // row 0/1/2 has playerSymbol only
  for (let row = 0; row < mat.length; row++) {
    let playerWon = true;
    for (let col = 0; col < mat[0].length; col++) {
      if (mat[row][col] !== playerSymbol) {
        playerWon = false;
        break;
      }
    }
    if (playerWon === true) {
      return playerSymbol;
    }
  }

  // col 0/1/2 has playerSymbol only
  for (let col = 0; col < mat[0].length; col++) {
    let playerWon = true;
    for (let row = 0; row < mat.length; row++) {
      if (mat[row][col] !== playerSymbol) {
        playerWon = false;
        break;
      }
    }
    if (playerWon === true) {
      return playerSymbol;
    }
  }

  // diag 1 i.e. 0,0 1,1 2,2 has playerSymbol only
  let playerWon = true;
  for (let i = 0; i < 3; i++) {
    if (mat[i][i] !== playerSymbol) {
      playerWon = false;
      break;
    }
  }
  if (playerWon === true) {
    return playerSymbol;
  }

  // diag 2 i.e. 0,2 1,1 2,0 has playerSymbol only
  if (
    mat[0][2] === playerSymbol &&
    mat[1][1] === playerSymbol &&
    mat[2][0] === playerSymbol
  ) {
    return playerSymbol;
  }
}

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  // moves_done = 0;
  // For every move:
  //      If move index is even i.e. odd move:
  //          moves[rowi][coli] = 'A'
  //      else:
  //          moves[rowi][coli] = 'B'
  //      moves_done++
  //
  //      If A won:
  //          return 'A'
  //      If B won:
  //          return 'B'
  //      If moves_done === 9:
  //          return 'Draw'

  let movesDone = 0;
  const maxMoves = 9;
  const gameBoard = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  for (let i = 0; i < moves.length; i++) {
    const currMoveRow = moves[i][0];
    const currMoveCol = moves[i][1];

    if (i % 2 === 0) {
      gameBoard[currMoveRow][currMoveCol] = "X";
    } else {
      gameBoard[currMoveRow][currMoveCol] = "0";
    }
    movesDone++;

    if (hasPlayerWon(gameBoard, "X") === "X") {
      return "A";
    }
    if (hasPlayerWon(gameBoard, "0") === "0") {
      return "B";
    }
  }

  if (movesDone < maxMoves) {
    return "Pending";
  } else {
    return "Draw";
  }
};
