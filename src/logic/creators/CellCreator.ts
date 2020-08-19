import Cell from "models/Cell";
import Coordinates from "models/Coordinates";

// Cell status:
// 0 - empty
// 1-9 - with number
// -1 - mine

class CellCreator {
  create(coordinates: Coordinates): Cell {
    return {
      status: 0,
      isOpen: false,
      coordinates
    }
  }
}

export default CellCreator;