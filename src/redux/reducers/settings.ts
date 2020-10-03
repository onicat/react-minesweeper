import produce from "immer";

import Settings from "models/Settings";
import { initialSettings } from "logic/constants";
import actionTypes from "redux/actionTypes";

const initialState: Settings = {
  boardWidth: initialSettings.BOARD_WIDTH,
  boardHeight: initialSettings.BOARD_HEIGHT,
  minesNumber: initialSettings.MINES_NUMBER
};

const settings = produce((state, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_SETTINGS: {
      state.boardWidth = action.width;
      state.boardHeight = action.height;
      state.minesNumber = action.minesNumber;
    }
  }
}, initialState);

export default settings;