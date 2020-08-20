import { produce } from 'immer'

import BoardCreator from 'logic/creators/BoardCreator'
import Board from 'models/Board';
import { initialSettings } from 'logic/constants';
import actionTypes from 'redux/actionTypes';
import getArea from 'logic/getArea';
import getRandomCell from 'logic/getRandomCell';
import Cell from 'models/Cell';

const boardCreator = new BoardCreator();
const initialState: Board = boardCreator.create(
  initialSettings.BOARD_WIDTH,
  initialSettings.BOARD_HEIGHT
);

const board = produce((state, action) => {
  switch (action.type) {
    case actionTypes.INSTALL_MINES: {
      const minesCells: Set<Cell> = new Set();

      while (minesCells.size < action.minesNumber) {
        const randomCell = getRandomCell(state, action.excludedArea);

        if (randomCell.status !== -1) {
          randomCell.status = -1;
          minesCells.add(randomCell);
        }
      }

      for (let mineCell of minesCells.values()) {
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
      const readyToBeOpen = [
        state[action.cell.rowIndex][action.cell.cellIndex]
      ];

      while (readyToBeOpen.length > 0) {
        const cell = readyToBeOpen.pop();
        
        if (cell.isOpen) continue;

        if (cell.status === 0) {          
          const cellArea = getArea(cell, state, false);

          readyToBeOpen.push(...cellArea);
        }

        cell.isOpen = true;
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
  }
}, initialState);

export default board;