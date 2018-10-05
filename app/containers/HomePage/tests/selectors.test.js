import { dynamicBoard } from 'utils/helpers';
import {
  selectHomePageDomain,
  makeSelectGameOption,
  makeSelectCurrent,
  makeSelectBoard,
  makeSelectIsGameOver,
} from '../selectors';
import { initialState } from '../reducer';

describe('selectHomepage', () => {
  it('should select the homePage state', () => {
    const homePageState = { ...initialState };
    const mockedState = {
      homePage: homePageState,
    };
    expect(selectHomePageDomain(mockedState)).toEqual(homePageState);
  });
});

describe('makeSelectGameOption', () => {
  const selector = makeSelectGameOption();
  it('should select the fetching state', () => {
    const gameOption = 'two';
    const mockedState = {
      homePage: {
        gameOption,
      },
    };
    expect(selector(mockedState)).toEqual(gameOption);
  });
});

describe('makeSelectIsGameOver', () => {
  const selector = makeSelectIsGameOver();
  it('should select the fetching state', () => {
    const isGameOver = true;
    const mockedState = {
      homePage: {
        isGameOver,
      },
    };
    expect(selector(mockedState)).toEqual(isGameOver);
  });
});

describe('makeSelectCurrent', () => {
  const selector = makeSelectCurrent();
  it('should select the fetching state', () => {
    const current = 'green';
    const mockedState = {
      homePage: {
        current,
      },
    };
    expect(selector(mockedState)).toEqual(current);
  });
});

describe('makeSelectBoard', () => {
  const selector = makeSelectBoard();
  it('should select the fetching state', () => {
    const board = dynamicBoard;
    const mockedState = {
      homePage: {
        board,
      },
    };
    expect(selector(mockedState)).toEqual(board);
  });
});
