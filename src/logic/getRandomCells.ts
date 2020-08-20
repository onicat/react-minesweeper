import Board from "models/Board";
import Cell from "models/Cell";
import getRandomCell from "./getRandomCell";

const getRandomCells = (
  cellsNumber: number,
  board: Board,
  excludedArea: Set<Cell>
): Set<Cell> => {
  const cells: Set<Cell> = new Set();

  while (cells.size < cellsNumber) {
    const randomCell = getRandomCell(board, excludedArea);

    if (!cells.has(randomCell)) {
      cells.add(randomCell);
    }
  }

  return cells;
};

export default getRandomCells;