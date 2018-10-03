/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import injectReducer from 'utils/injectReducer';

import GridCell from 'components/GridCell';

import { makeSelectCurrent, makeSelectBoard } from './selectors';
import { dropTile } from './actions';
import reducer from './reducer';

const Wrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  winVertical(grid) {
    const hasWon = grid.reduce((accu, column) => {
      const pattern = column.reduce((accu2, cell, index) => {
        if (!accu.length) {
          accu2.push(cell);
          return accu2;
        }
        // if last index of "pattern" does not match cell, reset "pattern" to empty array
        if (accu2[index - 1] !== cell) {
          return [];
        }

        accu2.push(cell);
        return accu2;
      }, []);
      if (accu || pattern.length === 4) {
        return true;
      }
      return false;
    }, false);
    return hasWon;
  }

  render() {
    const { sendTileDrop, board } = this.props;
    const win = this.winVertical(board);
    console.log(win);

    const cells = [];

    // Enclose all of each line into a container
    for (let row = 5; row >= 0; row -= 1) {
      const currentLine = [];
      for (let col = 0; col < 7; col += 1) {
        currentLine.push(
          <GridCell
            sendTileDrop={sendTileDrop}
            board={board}
            key={`${col}-${row}`}
            col={col}
            row={row}
          />,
        );
      }

      cells.push(
        <div key={row} className="row">
          {currentLine}
        </div>,
      );
    }

    return <Wrapper>{cells}</Wrapper>;
  }
}

HomePage.propTypes = {
  sendTileDrop: PropTypes.func.isRequired,
  board: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  current: makeSelectCurrent(),
  board: makeSelectBoard(),
});

function mapDispatchToProps(dispatch) {
  return {
    sendTileDrop: col => dispatch(dropTile(col)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);
