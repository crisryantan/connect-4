import { dynamicBoard } from 'utils/helpers';
import { startGame, dropTile, dropTileSuccess, resetGame } from '../actions';

import {
  START_GAME,
  DROP_TILE,
  DROP_TILE_SUCCESS,
  RESET_GAME,
} from '../constants';

describe('HomePage actions', () => {
  describe('startGame', () => {
    it('has a type of START_GAME', () => {
      const option = 'ai';
      const expected = {
        type: START_GAME,
        option,
      };

      expect(startGame(option)).toEqual(expected);
    });
  });

  describe('resetGame', () => {
    it('has a type of START_GAME', () => {
      const expected = {
        type: RESET_GAME,
      };
      expect(resetGame()).toEqual(expected);
    });
  });

  describe('dropTile', () => {
    it('has a type of DROP_TILE', () => {
      const currentCol = 0;
      const expected = {
        type: DROP_TILE,
        currentCol,
      };
      expect(dropTile(currentCol)).toEqual(expected);
    });
  });

  describe('dropTileSuccess', () => {
    it('has a type of DROP_TILE_SUCCESS', () => {
      const board = dynamicBoard;
      const isGameOver = false;
      const current = 'yellow';
      board[0][0] = 'green';
      const expected = {
        type: DROP_TILE_SUCCESS,
        board,
        isGameOver,
        current,
      };
      expect(dropTileSuccess(board, isGameOver, current)).toEqual(expected);
    });
  });
});
