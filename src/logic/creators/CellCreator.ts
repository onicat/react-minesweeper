import Cell from "models/Cell";

// Cell status:
// 0 - empty
// 1-9 - with number
// -1 - mine

class CellCreator {
  create(): Cell {
    return {
      status: 0,
      isOpen: false
    }
  }
}

export default CellCreator;