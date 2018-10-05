import { dynamicBoard, checkWin, winDiagonal, winningString } from '../helpers';

describe('reusable methods in helpers', () => {
  describe('checkWin', () => {
    it('should return false', () => {
      expect(checkWin(dynamicBoard)).toEqual(false);
    });

    it('should checkWin for winVertical', () => {
      const board = dynamicBoard;
      board[0][0] = 'green';
      board[0][1] = 'green';
      board[0][2] = 'green';
      board[0][3] = 'green';
      expect(checkWin(board)).toEqual(true);
    });

    it('should checkWin for winHorizontal', () => {
      const board = dynamicBoard;
      board[0][0] = 'green';
      board[1][0] = 'green';
      board[2][0] = 'green';
      board[3][0] = 'green';
      expect(checkWin(board)).toEqual(true);
    });

    it('should checkWin for winDiagonal - isTopLeft', () => {
      const board = dynamicBoard;
      board[0][0] = 'green';
      board[1][1] = 'green';
      board[2][2] = 'green';
      board[3][3] = 'green';
      expect(winDiagonal(board)).toEqual(true);
    });

    it('should checkWin for winDiagonal - isTopRight', () => {
      const board = dynamicBoard;
      board[0][6] = 'green';
      board[1][5] = 'green';
      board[2][4] = 'green';
      board[3][3] = 'green';
      expect(winDiagonal(board)).toEqual(true);
    });
  });

  describe('winningString', () => {
    it('should return false', () => {
      expect(winningString('')).toEqual(false);
    });

    it('should return true', () => {
      expect(winningString('greengreengreengreen')).toEqual(true);
      expect(winningString('yellowyellowyellowyellow')).toEqual(true);
    });
  });
});
