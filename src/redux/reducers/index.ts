import { combineReducers } from 'redux'

import board from './board'
import settings from './settings'
import stage from './stage'
import flagsRemaining from './flagsRemaining'

export default combineReducers({ board, settings, stage, flagsRemaining });