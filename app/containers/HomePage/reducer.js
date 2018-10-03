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
    case DROP_TILE:
      return state;
    default:
      return state;
  }
}

export default homePageReducer;
