import { produce } from 'immer'

import BoardCreator from 'logic/creators/BoardCreator'
import Board from 'models/Board';
import { initialSettings } from 'logic/constants';

const boardCreator = new BoardCreator();
const initialState: Board = boardCreator.create(
  initialSettings.BOARD_WIDTH,
  initialSettings.BOARD_HEIGHT
);


const board = produce((state, action) => {

}, initialState);

export default board;