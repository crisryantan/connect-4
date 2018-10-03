/*
 *
 * HomePage reducer
 *
 */

import { DROP_TILE } from './constants';

export const initialState = {
  current: 'green',
  board: [
    [], // col 0
    [], // col 1
    [], // col 2
    [], // col 3
    [], // col 4
    [], // col 5
    [], // col 6
  ],
};

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case DROP_TILE: {
      const { col: currentCol } = action;
      // if (state.board[currentCol].length > 6) {
      //   return state;
      // }
      const tile = state.current;
      const col = state.board[currentCol].concat(tile);

      const board = state.board.slice();
      board[currentCol] = col;
      return {
        current: state.current === 'green' ? 'yellow' : 'green',
        board,
      };
    }

    default:
      return state;
  }
}

export default homePageReducer;
