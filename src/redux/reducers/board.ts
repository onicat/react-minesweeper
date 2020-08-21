import { produce } from 'immer'

import BoardCreator from 'logic/creators/BoardCreator'
import Board from 'models/Board';
import { initialSettings } from 'logic/constants';
import actionTypes from 'redux/actionTypes';
import getArea from 'logic/getArea';

const boardCreator = new BoardCreator();
const initialState: Board = boardCreator.create(
  initialSettings.BOARD_WIDTH,
  initialSettings.BOARD_HEIGHT
);

const board = produce((state, action) => {
  switch (action.type) {
    case actionTypes.INSTALL_MINES: {
      const minesCells = action.cells;

      for (let mineCell of minesCells.values()) {
        state[mineCell.rowIndex][mineCell.cellIndex].status = -1;

        const mineArea = getArea(mineCell, state, false);

        for (let areaCell of mineArea.values()) {
          if (areaCell.status !== -1) {
            areaCell.status++;
          }
        }
      }

      break;
    }

    case actionTypes.OPEN_CELLS: {
      const cells = action.cells;
      
      for (let cell of cells.values()) {
        state[cell.rowIndex][cell.cellIndex].isOpen = true;
      }

      break;
    }

    case actionTypes.SHOW_MINES: {
      for (let rowIndex = 0; rowIndex < state.length; rowIndex++) {
        for (let cellIndex = 0; cellIndex < state[rowIndex].length; cellIndex++) {
          const cell = state[rowIndex][cellIndex];

          if (cell.status === -1) {
            cell.isOpen = true;
          }
        }
      }
 
      break;
    }

    case actionTypes.BLOW_UP_CELL: {
      let cell = state[action.cell.rowIndex][action.cell.cellIndex];
      
      cell.status = -2;
      
      break;
    }

    case actionTypes.TOGGLE_FLAG: {
      const cell = state[action.cell.rowIndex][action.cell.cellIndex];

      cell.isFlagged = action.value;

      break;
    }

    case actionTypes.REMOVE_FLAGS: {
      for (let cell of action.cells) {
        state[cell.rowIndex][cell.cellIndex].isFlagged = false;
      }

      break;
    }

    case actionTypes.RECREATE_BOARD: {
      return boardCreator.create(action.width, action.height);
    }
  }
}, initialState);

export default board;