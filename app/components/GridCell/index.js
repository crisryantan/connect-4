/**
 *
 * GridCell
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cell = styled.div`
  border: 1px solid black;
  display: inline-block;
  padding: 20px;
  cursor: pointer;
  background-color: ${props => props.cellColor};
`;

/* eslint-disable react/prefer-stateless-function */
class GridCell extends React.PureComponent {
  handleClick() {
    const { sendTileDrop, col } = this.props;
    console.log(`Clicked on column ${this.props.col}`);
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
    const { board, col, row } = this.props;
    const cellColor = this.getCellColor(board[col][row]);

    return (
      <Cell onClick={() => this.handleClick()} cellColor={cellColor}>
        <p>
          {col}, {row}
        </p>
      </Cell>
    );
  }
}

GridCell.propTypes = {
  col: PropTypes.number,
  row: PropTypes.number,
  sendTileDrop: PropTypes.func,
  board: PropTypes.array,
};

export default GridCell;
