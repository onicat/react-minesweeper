import actionTypes from "./actionTypes";
import Cell from "models/Cell";
import { stages } from "logic/constants";
import getArea from "logic/getArea";
import getRandomCells from "logic/getRandomCells";
import getOpenableCellsSet from "logic/getOpenableCellsSet";

export const installMines = (cells: Set<Cell>) => ({
  type: actionTypes.INSTALL_MINES,
  cells
});

export const openCells = (cells: Set<Cell>) => ({
  type: actionTypes.OPEN_CELLS,
  cells
});

export const changeStage = (stage: string) => ({
  type: actionTypes.CHANGE_STAGE,
  stage
});

export const showMines = () => ({
  type: actionTypes.SHOW_MINES
});

export const blowUpCell = (cell: Cell) => ({
  type: actionTypes.BLOW_UP_CELL,
  cell
});

export const handleCellClick = (cell: Cell) => (
  dispatch: Function,
  getState: Function
) => {
  const {stage, settings} = getState();

  if (stage === stages.BEFORE_START) {
    const excludedArea = getArea(cell, getState().board);
    const minesCells = getRandomCells(
      settings.minesNumber, getState().board, excludedArea
    );

    dispatch(installMines(minesCells));

    const openableCells = getOpenableCellsSet(cell, getState().board);
    
    dispatch(openCells(openableCells));
    dispatch(changeStage(stages.IN_GAME));
  } else if (stage === stages.IN_GAME) {
    if (cell.isOpen) return;
    if (cell.status === -1) {
      dispatch(blowUpCell(cell));
      
      const openableCells = getOpenableCellsSet(cell, getState().board);
      
      dispatch(openCells(openableCells));
      dispatch(showMines());
      dispatch(changeStage(stages.LOSING));
    } else {
      const openableCells = getOpenableCellsSet(cell, getState().board);

      dispatch(openCells(openableCells));
    }
  }
};

export const toggleFlag = (cell: Cell, value: boolean) => ({
  type: actionTypes.TOGGLE_FLAG,
  cell,
  value
});