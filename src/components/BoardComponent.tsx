import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getBoard } from 'redux/selectors';
import Store from 'models/Store';
import Board from 'models/Board';
import RowComponent from './RowComponent';

interface BoardComponentProps {
  board: Board;
}

const StyledBoardComponent = styled.table`
  text-align: center;
  font-weight: 800;
  border-spacing: 0;
`;

const BoardComponent = ({board}: BoardComponentProps) => {
  const rows = [];
  
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    rows.push(<RowComponent row={board[rowIndex]}/>);
  }

  return (
    <StyledBoardComponent onContextMenu={(event) => event.preventDefault()}>
      <tbody>
        {rows}
      </tbody>
    </StyledBoardComponent>
  )
};

const mapStateToProps = (state: Store) => ({
  board: getBoard(state)
});

export default connect(
  mapStateToProps
)(BoardComponent);