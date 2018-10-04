/*
 *
 * HomePage reducer
 *
 */
import { checkWin, settings } from 'utils/helpers';
import { DROP_TILE, RESET_GAME } from './constants';

const dynamicBoard = [
  ...Array(settings.numCols)
    .fill(0)
    .map(() => []),
];

export const initialState = {
  current: 'green',
  board: dynamicBoard,
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

    case RESET_GAME:
      return initialState;

    default:
      return state;
  }
}

export default homePageReducer;
