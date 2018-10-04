import { select, put, takeEvery } from 'redux-saga/effects';
import { checkWin, settings } from 'utils/helpers';
import { DROP_TILE } from './constants';
import { dropTile, dropTileSuccess } from './actions';

function getAITile(board) {
  const col = Math.floor(Math.random() * (settings.numRows - 0 + 1)) + 0;
  // use recursion if column is at it's max length, choose another column
  if (board[col].length === settings.numRows) {
    return getAITile(board);
  }
  return col;
}

export function* dropTileSaga({ currentCol, gameOption }) {
  try {
    const { homePage } = yield select();
    const { current: tile, board } = homePage;
    const col = board[currentCol].concat(tile);
    const updatedBoard = board.slice();
    updatedBoard[currentCol] = col;

    const isGameOver = checkWin(updatedBoard);
    if (isGameOver) {
      yield put(dropTileSuccess(updatedBoard, isGameOver, tile));
      return;
    }
    const current = tile === 'green' ? 'yellow' : 'green';
    yield put(dropTileSuccess(updatedBoard, isGameOver, current));

    if (gameOption === 'ai') {
      const dropAITile = getAITile(updatedBoard);
      yield put(dropTile(dropAITile));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* defaultSaga() {
  yield takeEvery(DROP_TILE, dropTileSaga);
}
