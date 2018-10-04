/**
 *
 * GridCell
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cell = styled.button`
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
  }

  :focus {
    outline: 0;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class GridCell extends React.PureComponent {
  handleClick() {
    const { sendTileDrop, col } = this.props;
    sendTileDrop(col);
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
    return (
      <Cell
        disabled={isGameOver}
        onClick={() => this.handleClick()}
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
};

export default GridCell;
