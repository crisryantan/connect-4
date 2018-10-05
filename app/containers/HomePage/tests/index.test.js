import React from 'react';
import { shallow } from 'enzyme';
import { settings, dynamicBoard } from 'utils/helpers';
import { HomePage } from '../index';

describe('<HomePage />', () => {
  let subject = null;
  let board;
  let currentPlayer;
  let start;
  let isGameOver;
  let sendTileDrop;
  let gameOption;
  let restart;

  beforeEach(() => {
    board = dynamicBoard;
    currentPlayer = 'green';
    isGameOver = false;
    start = jest.fn();
    sendTileDrop = jest.fn();
    restart = jest.fn();
    gameOption = '';
  });

  const buildSubject = customProps => {
    const props = {
      board,
      currentPlayer,
      start,
      isGameOver,
      sendTileDrop,
      gameOption,
      restart,
    };
    return shallow(<HomePage {...Object.assign({}, props, customProps)} />);
  };

  it('renders a <HomePage> ', () => {
    subject = buildSubject();
    expect(subject.find(HomePage)).toBeDefined();
  });

  it('should successfully build connect4Board with correct row length', () => {
    subject = buildSubject();
    const connect4Board = subject.instance().renderBoard();
    expect(connect4Board.length).toEqual(settings.numRows);
  });
});
