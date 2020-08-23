import actionTypes from "./actionTypes";
import Cell from "models/Cell";
import { stages } from "logic/constants";
import getArea from "logic/getArea";
import getRandomCells from "logic/getRandomCells";
import getOpenableCellsSet from "logic/getOpenableCellsSet";
import getCellsWithFlags from "logic/getCellsWithFlags";
import areAllCommonCellsOpen from "logic/areAllCommonCellsOpen";

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
    if (cell.isFlagged) return;
    
    const excludedArea = getArea(cell, getState().board);
    const minesCells = getRandomCells(
      settings.minesNumber, getState().board, excludedArea
    );

    dispatch(installMines(minesCells));

    const openableCells = getOpenableCellsSet(cell, getState().board);
    const cellsWithFlags = getCellsWithFlags(openableCells);
    
    dispatch(openCells(openableCells));
    dispatch(removeFlags(cellsWithFlags));
    
    if (areAllCommonCellsOpen(getState().board)) {
      dispatch(changeStage(stages.WINNING));
    } else {
      dispatch(changeStage(stages.IN_GAME));
    }
  } else if (stage === stages.IN_GAME) {
    if (cell.isFlagged || cell.isOpen) return;
    if (cell.status === -1) {
      dispatch(blowUpCell(cell));
      
      const openableCells = getOpenableCellsSet(cell, getState().board);
      const cellsWithFlags = getCellsWithFlags(openableCells);
      
      dispatch(openCells(openableCells));
      dispatch(removeFlags(cellsWithFlags));
      dispatch(showMines());
      dispatch(changeStage(stages.LOSING));
    } else {
      const openableCells = getOpenableCellsSet(cell, getState().board);
      const cellsWithFlags = getCellsWithFlags(openableCells);

      dispatch(removeFlags(cellsWithFlags));
      dispatch(openCells(openableCells));

      if (areAllCommonCellsOpen(getState().board)) {
        dispatch(changeStage(stages.WINNING));
      }
    }
  }
};

export const toggleFlag = (cell: Cell, value: boolean) => ({
  type: actionTypes.TOGGLE_FLAG,
  cell,
  value
});

export const handleFlagPlacing = (cell: Cell) => (
  dispatch: Function,
  getState: Function
) => {
  if (cell.isOpen) return;

  const newFlagValue = (cell.isFlagged) ? false : true;

  dispatch(toggleFlag(cell, newFlagValue));
};

export const removeFlags = (cells: Set<Cell>) => ({
  type: actionTypes.REMOVE_FLAGS,
  cells
});

export const setFlagsRemaining = (value: number) => ({
  type: actionTypes.SET_FLAGS_REMAINIG,
  value
});

export const recreateBoard = (width: number, height: number) => ({
  type: actionTypes.RECREATE_BOARD,
  width,
  height
});

export const restart = () => (dispatch: Function, getState: Function) => {
  const {settings} = getState();

  dispatch(recreateBoard(settings.boardWidth, settings.boardHeight));
  dispatch(changeStage(stages.BEFORE_START));
  dispatch(setFlagsRemaining(settings.minesNumber));
};