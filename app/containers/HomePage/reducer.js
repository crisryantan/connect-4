/*
 *
 * HomePage reducer
 *
 */
import { settings } from 'utils/helpers';
import { START_GAME, DROP_TILE_SUCCESS, RESET_GAME } from './constants';

const dynamicBoard = [
  ...Array(settings.numCols)
    .fill(0)
    .map(() => []),
];

export const initialState = {
  current: 'green',
  board: dynamicBoard,
  isGameOver: false,
  gameOption: '',
};

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME: {
      return {
        ...state,
        gameOption: action.option,
      };
    }

    case DROP_TILE_SUCCESS: {
      const { board, isGameOver, current } = action;
      return {
        ...state,
        current,
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
