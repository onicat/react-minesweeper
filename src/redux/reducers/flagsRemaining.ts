import produce from "immer";

import { initialSettings } from "logic/constants";
import actionTypes from "redux/actionTypes";

const initialState = initialSettings.MINES_NUMBER;

const flagsRemaining = produce((state, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_REMAINING_FLAGS_COUNTER: {
      return action.value;
    }
  }
}, initialState);

export default flagsRemaining;