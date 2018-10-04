/*
 *
 * HomePage actions
 *
 */

import {
  START_GAME,
  DROP_TILE,
  DROP_TILE_SUCCESS,
  RESET_GAME,
} from './constants';

export function startGame(option) {
  return {
    type: START_GAME,
    option,
  };
}

export function dropTile(currentCol, gameOption) {
  return {
    type: DROP_TILE,
    currentCol,
    gameOption,
  };
}

export function dropTileSuccess(board, isGameOver, current) {
  return {
    type: DROP_TILE_SUCCESS,
    board,
    isGameOver,
    current,
  };
}

export function resetGame() {
  return {
    type: RESET_GAME,
  };
}
