import Cell from "models/Cell";

class CellCreator {
  create(): Cell {
    return {
      isOpen: false
    }
  }
}

export default CellCreator;