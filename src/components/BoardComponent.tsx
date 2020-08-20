import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getBoard } from 'redux/selectors';
import Store from 'models/Store';
import Board from 'models/Board';
import RowComponent from './RowComponent';
import { blowUpCell, showMines, installMines, changeStage, openCells } from 'redux/actions';
import getArea from 'logic/getArea';
import Settings from 'models/Settings';
import { stages } from 'logic/constants';
import Cell from 'models/Cell';

interface BoardComponentProps {
  board: Board;
  settings: Settings;
  stage: string;
  installMines: Function;
  changeStage: Function;
  openCells: Function;
  showMines: Function;
  blowUpCell: Function;
}

const StyledBoardComponent = styled.table`
  text-align: center;
  font-weight: 800;
  border-spacing: 0;
`;

const BoardComponent = ({
  board,
  settings,
  stage,
  installMines,
  changeStage,
  openCells,
  showMines,
  blowUpCell
}: BoardComponentProps) => {
  const getCellClickHandler = (cell: Cell) => {
    if (stage === stages.BEFORE_START) {      
      return () => {
        // Works with bag, because board there is object, but
        // board in reducer is Proxy thanks to Immer.js.
        // Need fix
        const excludedArea = getArea(cell, board);
        
        installMines(settings.minesNumber, excludedArea);
        changeStage(stages.IN_GAME);
        openCells(cell);
      }
    }

    if (stage === stages.IN_GAME) {
      return () => {        
        if (cell.isOpen) return;
        if (cell.status === -1) {
          blowUpCell(cell);
          openCells(cell);
          showMines();
          changeStage(stages.LOSING);
        } else {
          openCells(cell);
        }
      }
    }

    return null;
  };

  const rows = [];
  
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    rows.push(
      <RowComponent 
        row={board[rowIndex]}
        getCellClickHandler={getCellClickHandler}
      />
    );
  }

  return (
    <StyledBoardComponent>
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
  mapStateToProps,
  {blowUpCell, showMines, installMines, changeStage, openCells}
)(BoardComponent);