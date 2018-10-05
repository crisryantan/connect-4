import React from 'react';
import { shallow } from 'enzyme';
import { dynamicBoard } from 'utils/helpers';
import GridCell from '../index';

describe('<GridCell />', () => {
  let subject = null;
  let board;
  let col;
  let row;
  let isGameOver;
  let sendTileDrop;
  let gameOption;

  beforeEach(() => {
    board = dynamicBoard;
    col = 0;
    row = 0;
    isGameOver = false;
    sendTileDrop = jest.fn();
    gameOption = 'ai';
  });

  const buildSubject = customProps => {
    const props = {
      board,
      col,
      row,
      isGameOver,
      sendTileDrop,
      gameOption,
    };
    return shallow(<GridCell {...Object.assign({}, props, customProps)} />);
  };

  it('renders a <GridCell>', () => {
    subject = buildSubject();
    expect(subject.find(GridCell)).toBeDefined();
  });

  describe('tileDrop', () => {
    it('should successfully call sendTileDrop', () => {
      subject = buildSubject();
      subject.instance().tileDrop();
      expect(sendTileDrop).toBeCalled();
    });

    it('should successfully call alert', () => {
      subject = buildSubject();
      subject.instance().tileDrop(true);
      expect(sendTileDrop).not.toBeCalled();
    });
  });

  describe('getCellColor', () => {
    it('should return green', () => {
      const cellColor = subject.instance().getCellColor('green');
      expect(cellColor).toEqual('green');
    });

    it('should return yellow', () => {
      const cellColor = subject.instance().getCellColor('yellow');
      expect(cellColor).toEqual('yellow');
    });

    it('should return empty string', () => {
      const cellColor = subject.instance().getCellColor('');
      expect(cellColor).toEqual('');
    });
  });

  describe('<GridCell /> with "columnMaxed"', () => {
    beforeEach(() => {
      const maxedColumnBoard = dynamicBoard;
      maxedColumnBoard[0] = [
        'green',
        'yellow',
        'green',
        'yellow',
        'green',
        'yellow',
      ];
      subject = buildSubject({
        board: maxedColumnBoard,
      });
    });

    it('should return "columnMaxed" true', () => {
      expect(subject.props().columnMaxed).toEqual(true);
    });
  });

  describe('<GridCell /> with "disabled" true', () => {
    beforeEach(() => {
      subject = buildSubject({
        isGameOver: true,
      });
    });

    it('should return props "disabled" true', () => {
      expect(subject.props().disabled).toEqual(true);
    });
  });
});
