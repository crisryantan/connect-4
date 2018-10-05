import { dynamicBoard } from 'utils/helpers';
import { startGame, dropTile, dropTileSuccess, resetGame } from '../actions';
import homePageReducer, { initialState } from '../reducer';

describe('homePageReducer', () => {
  let state;

  beforeEach(() => {
    state = {
      ...initialState,
    };
  });

  it('returns the initial state', () => {
    expect(homePageReducer(undefined, {})).toEqual(state);
  });

  it('should handle the startGame action correctly', () => {
    const gameOption = 'ai';
    const expectedResult = {
      ...initialState,
      board: dynamicBoard,
      gameOption,
    };
    expect(homePageReducer(state, startGame(gameOption))).toEqual(
      expectedResult,
    );
  });

  it('should handle the dropTile action correctly', () => {
    const expectedResult = {
      ...initialState,
      board: dynamicBoard,
    };
    expect(homePageReducer(state, dropTile(1))).toEqual(expectedResult);
  });

  it('should handle the dropTileSuccess action correctly', () => {
    const board = dynamicBoard;
    const isGameOver = false;
    const current = 'yellow';
    board[0][0] = 'green';
    const expectedResult = {
      ...initialState,
      board,
      isGameOver,
      current,
    };
    expect(
      homePageReducer(state, dropTileSuccess(board, isGameOver, current)),
    ).toEqual(expectedResult);
  });

  it('should handle the resetGame action correctly', () => {
    const expectedResult = {
      ...initialState,
    };
    expect(homePageReducer(state, resetGame())).toEqual(expectedResult);
  });
});
