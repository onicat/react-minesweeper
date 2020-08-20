import Board from "models/Board";
import Cell from "models/Cell";

const getRandomCell = (board: Board, excludedArea: Set<Cell>) => {
  while (true) {
    const randomRowIndex = Math.floor(Math.random() * board.length);
    const randomCellIndex = Math.floor(Math.random() * board[0].length);
    const randomCell = board[randomRowIndex][randomCellIndex];

    if (!excludedArea.has(randomCell)) {
      return randomCell; 
    }
  }
};

export default getRandomCell;