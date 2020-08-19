import Coordinates from "./Coordinates";

interface Cell {
  status: number;
  isOpen: boolean;
  coordinates: Coordinates;
}

export default Cell;