import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.homePage;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(selectHomePageDomain, substate => substate);

const makeSelectCurrent = () =>
  createSelector(selectHomePageDomain, substate => substate.current);

const makeSelectBoard = () =>
  createSelector(selectHomePageDomain, substate => substate.board);

const makeSelectIsGameOver = () =>
  createSelector(selectHomePageDomain, substate => substate.isGameOver);

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectCurrent,
  makeSelectBoard,
  makeSelectIsGameOver,
};
