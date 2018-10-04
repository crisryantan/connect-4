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
import { dropTile, resetGame } from './actions';
import reducer from './reducer';

const Wrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const FooterWrapper = styled.div`
  text-align: center;
`;

const CurrentColor = styled.div`
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 40px;
  margin: 10px;
  width: 40px;
  background-color: ${props =>
    props.cellColor ? `${props.cellColor} !important` : '#eeeeee'};
`;

const RestartBtn = styled.button`
  border: 1px solid;
  cursor: pointer;
  border-radius: 2px;

  :focus {
    outline: 0;
  }
`;

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    const {
      sendTileDrop,
      board,
      currentPlayer,
      isGameOver,
      restart,
    } = this.props;
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
      <div>
        <Wrapper>{cells}</Wrapper>
        <hr />
        <FooterWrapper>
          <div>
            <div>{isGameOver ? 'Winner' : 'Current turn'}: </div>
            <CurrentColor cellColor={currentPlayer} />
          </div>
          <RestartBtn onClick={restart}>Restart</RestartBtn>
        </FooterWrapper>
      </div>
    );
  }
}

HomePage.propTypes = {
  sendTileDrop: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
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
    restart: () => dispatch(resetGame()),
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
