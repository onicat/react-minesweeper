import Board from "models/Board";
import Cell from "models/Cell";
import CellCreator from "./CellCreator";
import Coordinates from "models/Coordinates";

const cellCreator = new CellCreator();

class BoardCreator {
  create(boardWidth: number, boardHeight: number): Board {
    const board: Cell[][] = [];
    
    for (let rowIndex = 0; rowIndex < boardHeight; rowIndex++) {
      const row: Cell[] = [];
      
      for (let cellIndex = 0; cellIndex < boardWidth; cellIndex++) {
        const coordinates: Coordinates = [rowIndex, cellIndex]; //need to remove
        const cell: Cell = cellCreator.create(rowIndex, cellIndex, coordinates);

        row.push(cell);
      }

      board.push(row);
    }

    return board;
  }
}

export default BoardCreator;