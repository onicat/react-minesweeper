import Cell from "models/Cell";

const getCellsWithFlags = (cells: Set<Cell>) => {
  const cellsWithFlags: Set<Cell> = new Set();
  
  for (let cell of cells.values()) {
    if (cell.isFlagged) {
      cellsWithFlags.add(cell);
    }
  }

  return cellsWithFlags;
};

export default getCellsWithFlags;