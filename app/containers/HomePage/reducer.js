/*
 *
 * HomePage reducer
 *
 */
import { checkWin } from 'utils/helpers';
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
  isGameOver: false,
};

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case DROP_TILE: {
      const { col: currentCol } = action;
      // catch for columns exceeding it's height
      if (state.board[currentCol].length > 5) {
        return state;
      }
      const tile = state.current;
      const col = state.board[currentCol].concat(tile);

      const board = state.board.slice();
      board[currentCol] = col;
      const isGameOver = checkWin(board);
      const nextColor = state.current === 'green' ? 'yellow' : 'green';

      return {
        current: isGameOver ? state.current : nextColor,
        board,
        isGameOver,
      };
    }

    default:
      return state;
  }
}

export default homePageReducer;
