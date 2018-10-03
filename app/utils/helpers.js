export const winningString = arrStr =>
  arrStr.includes('greengreengreengreen') ||
  arrStr.includes('yellowyellowyellowyellow');

export const winVertical = grid => {
  for (let row = 5; row >= 0; row -= 1) {
    let rowStr = '';
    for (let col = 0; col < 7; col += 1) {
      rowStr += grid[row][col];
    }
    if (winningString(rowStr)) {
      return true;
    }
  }
  return false;
};

export const winHorizontal = grid => {
  for (let row = 5; row >= 0; row -= 1) {
    let rowStr = '';
    for (let col = 0; col < 7; col += 1) {
      rowStr += grid[col][row];
    }
    if (winningString(rowStr)) {
      return true;
    }
  }
  return false;
};
