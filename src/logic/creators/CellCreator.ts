import Cell from "models/Cell";
import Coordinates from "models/Coordinates";

// Cell status:
// 0 - empty
// 1-9 - with number
// -1 - mine
// -2 - explosion

class CellCreator {
  create(rowIndex: number, cellIndex: number, coordinates: Coordinates): Cell {
    return {
      status: 0,
      isOpen: false,
      coordinates,
      rowIndex,
      cellIndex
    }
  }
}

export default CellCreator;