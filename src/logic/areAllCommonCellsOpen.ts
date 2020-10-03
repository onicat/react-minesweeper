import Board from "models/Board";
import { cellStatuses } from "./constants";

const areAllCommonCellsOpen = (board: Board): boolean => {
  for (let row of board) {
    for (let cell of row) {
      if (cell.isOpen === false && cell.status !== cellStatuses.MINE) {
        return false;
      }
    }
  }

  return true;
}

export default areAllCommonCellsOpen;