export const settings = {
  baseWin: 4,
  numCols: 7,
  numRows: 6,
};

export const dynamicBoard = [
  ...Array(settings.numCols)
    .fill(0)
    .map(() => []),
];

export const checkWin = board =>
  winVertical(board) || winHorizontal(board) || winDiagonal(board);

export const winningString = arrStr =>
  arrStr.includes('greengreengreengreen') ||
  arrStr.includes('yellowyellowyellowyellow');

export const winVertical = board => {
  for (let row = settings.numRows - 1; row >= 0; row -= 1) {
    let rowStr = '';
    for (let col = 0; col < settings.numCols; col += 1) {
      rowStr += board[row][col];
    }
    if (winningString(rowStr)) {
      return true;
    }
  }
  return false;
};

export const winHorizontal = board => {
  for (let row = settings.numRows - 1; row >= 0; row -= 1) {
    let rowStr = '';
    for (let col = 0; col < settings.numCols; col += 1) {
      rowStr += board[col][row];
    }
    if (winningString(rowStr)) {
      return true;
    }
  }
  return false;
};

export const winDiagonal = board => {
  const baseEqual = settings.baseWin - settings.numRows;
  for (
    let base = baseEqual;
    base < settings.numCols - (settings.baseWin - 1);
    base += 1
  ) {
    const col = base - 1;
    const topLeftString = isTopLeft(board, col);
    const topRightString = isTopRight(board, col);

    if (winningString(topLeftString) || winningString(topRightString)) {
      return true;
    }
  }
  return false;
};

function isTopLeft(board, col) {
  let rowStr = '';
  let currCol = col;
  for (let row = 0; row < settings.numRows; row += 1) {
    currCol += 1;

    if (currCol >= 0 && currCol < settings.numCols && row < settings.numRows) {
      rowStr += board[currCol][row];
    }
  }
  return rowStr;
}

function isTopRight(board, col) {
  let rowStr = '';
  let currCol = col;
  for (let row = settings.numRows - 1; row >= 0; row -= 1) {
    currCol += 1;
    if (currCol >= 0 && currCol < settings.numCols && row < settings.numRows) {
      rowStr += board[currCol][row];
    }
  }
  return rowStr;
}
