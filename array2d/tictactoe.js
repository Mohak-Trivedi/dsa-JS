// Problem: 

// Algo:
// 1. Define 3 X 3 empty board, and set count of total moves = 0
// 2. turn = 0. 0 -> Player A's turn, 1 -> Player B's turn
// 3. Determine Player from turn. 0 -> 'A', 1 -> 'B'
// 4. Determine Symbol from player. 'A' -> 'X', 'B' -> '0'
// 5. Make the current move mentioned in moves[][].
// 6. count++
// 6. Check if the current player won after making this make. If yes, return player.
// 7. Check if count===9, return 'Draw'
// 8. Toggle the turn: turn = (turn + 1) % 2;
// 9 . Repeat steps 2 to 8 for each move mentioned in the moves array.


// takes in current player's symbol ('X' or '0') and returns
// true -> player won
// false -> player not won yet
function winCheck(board, currSymbol) {
    // rows
    // row 0
    if(board[0][0]==currSymbol && board[0][1]==currSymbol && board[0][2]==currSymbol) {
        return true;
    }
    // row 1
    if(board[1][0]==currSymbol && board[1][1]==currSymbol && board[1][2]==currSymbol) {
        return true;
    }
    // row 2
    if(board[2][0]==currSymbol && board[2][1]==currSymbol && board[2][2]==currSymbol) {
        return true;
    }

    // cols
    // col 0
    if(board[0][0]==currSymbol && board[1][0]==currSymbol && board[2][0]==currSymbol) {
        return true;
    }
    // col 1
    if(board[0][1]==currSymbol && board[1][1]==currSymbol && board[2][1]==currSymbol) {
        return true;
    }
    // col 2
    if(board[0][2]==currSymbol && board[1][2]==currSymbol && board[2][2]==currSymbol) {
        return true;
    }

    // diags
    // diag 0
    if(board[0][0]==currSymbol && board[1][1]==currSymbol && board[2][2]==currSymbol) {
        return true;
    }
    // diag 1
    if(board[0][2]==currSymbol && board[1][1]==currSymbol && board[2][0]==currSymbol) {
        return true;
    }

    return false;
}

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    let board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

    let turn = 0; // 0 -> A, 1 -> B

    let count = 0; // count of total moves made // 9 -> Draw

    for(let i = 0;i < moves.length;i++) {
        let player = (turn == 0) ? 'A' : 'B';
        let currSymbol = (player == 'A') ? 'X' : '0'; // A -> X, B -> 0

        let currMove = moves[i];
        let row = currMove[0];
        let col = currMove[1];

        board[row][col] = currSymbol;
        
        count++;

        if(winCheck(board, currSymbol)) {
            return player;
        }
        if(count === 9) {
            return 'Draw';
        }

        turn = (turn + 1) % 2; // flip the turn
    }
};