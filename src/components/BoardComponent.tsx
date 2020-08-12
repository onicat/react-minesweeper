import React from 'react'
import { connect } from 'react-redux';

import { getBoard } from 'redux/selectors';
import Store from 'models/Store';
import Board from 'models/Board';
import RowComponent from './RowComponent';

interface BoardComponentProps {
  board: Board
}

const BoardComponent = ({board}: BoardComponentProps) => {
  const rows = [];
  
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    rows.push(<RowComponent row={board[rowIndex]}/>);
  }

  return (
    <table>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
};

const mapStateToProps = (state: Store) => ({
  board: getBoard(state)
});

export default connect(
  mapStateToProps
)(BoardComponent);