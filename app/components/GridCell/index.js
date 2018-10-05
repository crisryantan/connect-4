/**
 *
 * GridCell
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { message } from 'antd';
import { settings } from 'utils/helpers';

export const Cell = styled.button`
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 80px;
  margin: 10px;
  width: 80px;
  background-color: ${props =>
    props.cellColor ? `${props.cellColor} !important` : '#eeeeee'};

  :hover {
    background-color: #dddddd;
    cursor: ${props => props.disabled || (props.columnMaxed && `not-allowed`)};
  }

  :focus {
    outline: 0;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class GridCell extends React.PureComponent {
  tileDrop(columnMaxed) {
    const { sendTileDrop, col, gameOption } = this.props;
    if (columnMaxed) {
      message.error('Column has been maxed out');
      return;
    }
    sendTileDrop(col, gameOption);
  }

  getCellColor(cellColor) {
    if (cellColor === 'green') {
      return 'green';
    } else if (cellColor === 'yellow') {
      return 'yellow';
    }
    return '';
  }

  render() {
    const { board, col, row, isGameOver } = this.props;
    const cellColor = this.getCellColor(board[col][row]);
    const columnMaxed = board[col].length === settings.numRows;
    return (
      <Cell
        disabled={isGameOver}
        columnMaxed={columnMaxed}
        onClick={() => this.tileDrop(columnMaxed)}
        cellColor={cellColor}
      />
    );
  }
}

GridCell.propTypes = {
  col: PropTypes.number,
  row: PropTypes.number,
  sendTileDrop: PropTypes.func,
  board: PropTypes.array,
  isGameOver: PropTypes.bool,
  gameOption: PropTypes.string,
};

export default GridCell;
