import actionTypes from "./actionTypes";
import Cell from "models/Cell";

export const installMines = (cells: Set<Cell>) => ({
  type: actionTypes.INSTALL_MINES,
  cells
});

export const openCells = (cell: Cell) => ({
  type: actionTypes.OPEN_CELLS,
  cell
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