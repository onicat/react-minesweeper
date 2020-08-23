import Board from "models/Board";

const areAllCommonCellsOpen = (board: Board): boolean => {
  for (let row of board) {
    for (let cell of row) {
      if (cell.isOpen === false && cell.status !== -1) {
        return false;
      }
    }
  }

  return true;
}

export default areAllCommonCellsOpen;