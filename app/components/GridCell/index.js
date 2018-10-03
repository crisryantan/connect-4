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
  font-family: monospace;
  cursor: pointer;
`;

/* eslint-disable react/prefer-stateless-function */
class GridCell extends React.PureComponent {
  handleClick() {
    const { sendTileDrop, col } = this.props;
    console.log(`Clicked on column ${this.props.col}`);
    sendTileDrop(col);
  }

  render() {
    return (
      <Cell onClick={() => this.handleClick()}>
        <p>
          {this.props.col}, {this.props.row}
        </p>
      </Cell>
    );
  }
}

GridCell.propTypes = {
  col: PropTypes.number,
  row: PropTypes.number,
  sendTileDrop: PropTypes.func,
};

export default GridCell;
