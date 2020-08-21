import Cell from "models/Cell";

// Cell status:
// 0 - empty
// 1-9 - with number
// -1 - mine
// -2 - explosion

class CellCreator {
  create(rowIndex: number, cellIndex: number): Cell {
    return {
      status: 0,
      isOpen: false,
      isFlagged: false,
      rowIndex,
      cellIndex
    }
  }
}

export default CellCreator;