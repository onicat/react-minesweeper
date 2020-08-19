import { combineReducers } from 'redux'

import board from './board'
import settings from './settings'
import stage from './stage'

export default combineReducers({ board, settings, stage });