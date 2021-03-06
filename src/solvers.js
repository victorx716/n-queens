/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function (n) {
  var solution;
  var board = new Board({ n: n })
  var rooksRemaining = board.get('n');

  var rooks = function (board, r, c) {
    if (rooksRemaining === 0) {
      return board;
    }
    board.togglePiece(r, c);
    rooksRemaining--;
    rooks(board, r + 1, c + 1);
  };

  rooks(board, 0, 0);

  solution = board.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  /*
  declare a found solution count. initialize to 0;
  have a count for remaining rooks
  check if there are any row or col conflicts

  toggle piece
  skip to next row
  find col that !rowconflicts/!colconflicts
  toggle piece
  skip to next row
  have a rookremaining checker
  rookremaining = 0
  +1 to solution count
  call recursive fn on prev parent board
  */

  var board = new Board({ n: 3 });
  var solutionCount = 0;
  var traverseRooks = function (board, rowIndex, colIndex, rr) {
    //base case
    //another base case: rowIndex === n, then return;
    if (rooksRemaining === 0) {
      solutionCount++;
      //go back up to parent board
      //how will the interpreter know to return when
    }

    //recursive case
    var rooksRemaining = 3;
    board.togglePiece(rowIndex, colIndex);
    if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
      return;
    } else {
      rowIndex++;
      traverseRooks(board, rI, cI, n - 1)
    }

  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
