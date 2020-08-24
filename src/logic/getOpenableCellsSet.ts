import Cell from "models/Cell";
import Board from "models/Board";
import getArea from "./getArea";
import { cellStatuses } from "./constants";

const getOpenableCellsSet = (startsWith: Cell, board: Board): Set<Cell> => {
  const readyToBeChecked: Cell[] = [
    board[startsWith.rowIndex][startsWith.cellIndex]
  ];
  const openableCells: Set<Cell> = new Set(); 

  while (readyToBeChecked.length > 0) {
    const cell = readyToBeChecked.pop();

    if (cell === undefined) break;
    if (openableCells.has(cell)) continue;

    if (cell.status === cellStatuses.EMPTY) {          
      const cellArea = getArea(cell, board, false);

      readyToBeChecked.push(...cellArea);
    }

    openableCells.add(cell);
  }

  return openableCells;
};

export default getOpenableCellsSet;