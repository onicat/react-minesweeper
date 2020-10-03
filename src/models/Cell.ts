interface Cell {
  status: number;
  isOpen: boolean;
  isFlagged: boolean;
  rowIndex: number;
  cellIndex: number;
}

export default Cell;