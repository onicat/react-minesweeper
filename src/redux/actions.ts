import actionTypes from "./actionTypes";
import Coordinates from "models/Coordinates";

export const installMines = (
  minesNumber: number,
  excludedArea: Coordinates[]
) => ({
  type: actionTypes.INSTALL_MINES,
  minesNumber,
  excludedArea
});

export const openCells = (startCoordinates: Coordinates) => ({
  type: actionTypes.OPEN_CELLS,
  startCoordinates
});

export const changeStage = (stage: string) => ({
  type: actionTypes.CHANGE_STAGE,
  stage
});

export const showBombs = () => ({
  type: actionTypes.SHOW_BOMBS
});