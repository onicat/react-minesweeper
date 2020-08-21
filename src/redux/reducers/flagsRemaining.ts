import produce from "immer";
import { initialSettings } from "logic/constants";
import actionTypes from "redux/actionTypes";

const initialState = initialSettings.MINES_NUMBER;

const flagsRemaining = produce((state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FLAG: {
      return state + ((action.value) ? -1 : 1);
    }

    case actionTypes.REMOVE_FLAGS: {
      return state + action.cells.size;
    }
  }
}, initialState);

export default flagsRemaining;