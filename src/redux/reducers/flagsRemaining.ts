import produce from "immer";
import { initialSettings } from "logic/constants";

const initialState = initialSettings.MINES_NUMBER;

const flagsRemaining = produce((state, action) => {

}, initialState);

export default flagsRemaining;