import Coordinates from "./Coordinates";

interface Cell {
  status: number;
  isOpen: boolean;
  coordinates: Coordinates;
  rowIndex: number;
  cellIndex: number;
}

export default Cell;