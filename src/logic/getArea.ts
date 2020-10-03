import Board from "models/Board";
import Cell from "models/Cell";

const getArea = (
  cell: Cell,
  board: Board,
  includeCenter = true
): Set<Cell> => {
  const area: Set<Cell> = new Set();
  
  for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
    const rowIndex = cell.rowIndex + rowOffset;
    
    if (rowIndex < 0 || rowIndex >= board.length) continue; 

    for (let cellOffset = -1; cellOffset <= 1; cellOffset++) {
      const cellIndex = cell.cellIndex + cellOffset;

      if (cellIndex < 0 || cellIndex >= board[0].length) continue;
      if (rowOffset === 0 && cellOffset === 0 && !includeCenter) continue; 

      area.add(board[rowIndex][cellIndex]);
    }
  }

  return area;
};

export default getArea;