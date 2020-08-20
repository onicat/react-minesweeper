import { produce } from 'immer'

import BoardCreator from 'logic/creators/BoardCreator'
import Board from 'models/Board';
import { initialSettings } from 'logic/constants';
import actionTypes from 'redux/actionTypes';
import generateRandomCoordinates from 'logic/generateRandomCoordinates';
import getArea from 'logic/getArea';

const boardCreator = new BoardCreator();
const initialState: Board = boardCreator.create(
  initialSettings.BOARD_WIDTH,
  initialSettings.BOARD_HEIGHT
);

const board = produce((state, action) => {
  switch (action.type) {
    case actionTypes.INSTALL_MINES: {
      const minesCoordinates = [];

      while (minesCoordinates.length < action.minesNumber) {
        const randomCoordinates = generateRandomCoordinates(
          state.length,
          state[0].length,
          action.excludedArea
        );

        const randomCell = state[randomCoordinates[0]][randomCoordinates[1]];

        if (randomCell.status !== -1) {
          randomCell.status = -1;
          minesCoordinates.push(randomCoordinates);
        }
      }

      for (let mineCoordinates of minesCoordinates) {
        const mineArea = getArea(
          mineCoordinates,
          {height: state.length, width: state[0].length},
          false
        );

        for (let areaCellCoordinates of mineArea) {
          const cell = state[areaCellCoordinates[0]][areaCellCoordinates[1]];

          if (cell.status !== -1) {
            cell.status++;
          }
        }
      }

      break;
    }

    case actionTypes.OPEN_CELLS: {
      const readyToBeOpen = [action.startCoordinates];

      while (readyToBeOpen.length > 0) {
        const cellCoordinates = readyToBeOpen.pop();
        const cell = state[cellCoordinates[0]][cellCoordinates[1]];
        
        if (cell.isOpen) continue;

        if (cell.status === 0) {          
          const cellArea = getArea(
            cellCoordinates,
            {height: state.length, width: state[0].length},
            false
          );

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
  }
}, initialState);

export default board;