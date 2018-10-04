/*
 *
 * HomePage actions
 *
 */

import { DROP_TILE, RESET_GAME } from './constants';

export function dropTile(col) {
  return {
    type: DROP_TILE,
    col,
  };
}

export function resetGame() {
  return {
    type: RESET_GAME,
  };
}
