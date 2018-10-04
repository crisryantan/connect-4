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
import { settings } from 'utils/helpers';

import {
  makeSelectCurrent,
  makeSelectBoard,
  makeSelectIsGameOver,
} from './selectors';
import { dropTile } from './actions';
import reducer from './reducer';

const Wrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    const { sendTileDrop, board, currentPlayer, isGameOver } = this.props;
    const cells = [];

    for (let row = settings.numRows - 1; row >= 0; row -= 1) {
      const currentRow = [];
      for (let col = 0; col < settings.numCols; col += 1) {
        currentRow.push(
          <GridCell
            isGameOver={isGameOver}
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
          {currentRow}
        </div>,
      );
    }

    return (
      <Wrapper>
        {cells}
        <hr />
        <p>
          {isGameOver ? 'Winner' : 'Current turn'}: {currentPlayer}
        </p>
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  sendTileDrop: PropTypes.func.isRequired,
  board: PropTypes.array.isRequired,
  currentPlayer: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentPlayer: makeSelectCurrent(),
  board: makeSelectBoard(),
  isGameOver: makeSelectIsGameOver(),
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
