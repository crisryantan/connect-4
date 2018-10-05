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
  // can add difficulty parameter level here, so saga can choose between functions
  // on AI logic.
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
