import Cell from "models/Cell";
import { cellStatuses } from "logic/constants";

class CellCreator {
  create(rowIndex: number, cellIndex: number): Cell {
    return {
      status: cellStatuses.EMPTY,
      isOpen: false,
      isFlagged: false,
      rowIndex,
      cellIndex
    }
  }
}

export default CellCreator;