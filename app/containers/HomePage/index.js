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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import GridCell from 'components/GridCell';
import { settings } from 'utils/helpers';

import saga from './saga';
import { startGame, dropTile, resetGame } from './actions';
import reducer from './reducer';
import {
  Wrapper,
  ProjectTitle,
  FooterWrapper,
  CurrentColor,
  Button,
} from './css';
import {
  makeSelectGameOption,
  makeSelectCurrent,
  makeSelectBoard,
  makeSelectIsGameOver,
} from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  renderBoard = () => {
    const { sendTileDrop, board, isGameOver, gameOption } = this.props;
    const cells = [];

    for (let row = settings.numRows - 1; row >= 0; row -= 1) {
      const currentRow = [];
      for (let col = 0; col < settings.numCols; col += 1) {
        currentRow.push(
          <GridCell
            isGameOver={isGameOver}
            sendTileDrop={sendTileDrop}
            board={board}
            gameOption={gameOption}
            key={`${col}-${row}`}
            col={col}
            row={row}
          />,
        );
      }

      cells.push(<div key={row}>{currentRow}</div>);
    }
    return cells;
  };

  render() {
    const {
      gameOption,
      currentPlayer,
      isGameOver,
      start,
      restart,
    } = this.props;
    const connect4Board = this.renderBoard();

    if (!gameOption) {
      return (
        <Wrapper>
          <ProjectTitle>Connect - 4 : Choose Option</ProjectTitle>
          <Button onClick={() => start('two')}>Two players</Button>
          <Button onClick={() => start('ai')}>AI</Button>
        </Wrapper>
      );
    }

    return (
      <div>
        {!isGameOver && <Wrapper>{connect4Board}</Wrapper>}
        <FooterWrapper>
          <div>
            <div>{isGameOver ? 'Winner' : 'Current turn'}: </div>
            <CurrentColor cellColor={currentPlayer} />
          </div>
          <Button onClick={restart}>Restart</Button>
        </FooterWrapper>
      </div>
    );
  }
}

HomePage.propTypes = {
  gameOption: PropTypes.string.isRequired,
  sendTileDrop: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
  board: PropTypes.array.isRequired,
  currentPlayer: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  gameOption: makeSelectGameOption(),
  currentPlayer: makeSelectCurrent(),
  board: makeSelectBoard(),
  isGameOver: makeSelectIsGameOver(),
});

function mapDispatchToProps(dispatch) {
  return {
    start: option => dispatch(startGame(option)),
    sendTileDrop: (col, gameOption) => dispatch(dropTile(col, gameOption)),
    restart: () => dispatch(resetGame()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
