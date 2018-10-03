/*
 *
 * HomePage actions
 *
 */

import { DROP_TILE } from './constants';

export function dropTile(col) {
  return {
    type: DROP_TILE,
    col,
  };
}
