import Cell from './Cell';

interface Board extends Array<any> {
  [index: number]: Cell[]
}

export default Board;