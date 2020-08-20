import produce from "immer";

import { stages } from "logic/constants";
import actionTypes from "redux/actionTypes";

const initialState = stages.BEFORE_START;

const stage = produce((state, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_STAGE: {
      
      switch (action.stage) {
        case stages.BEFORE_START: return stages.BEFORE_START;
        case stages.IN_GAME: return stages.IN_GAME;
        case stages.LOSING: return stages.LOSING;
      }

      break;
    }
  }
}, initialState);

export default stage;