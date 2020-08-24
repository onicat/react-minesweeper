export enum initialSettings {
  BOARD_WIDTH = 8,
  BOARD_HEIGHT = 8,
  MINES_NUMBER = 9
}

export enum stages {
  BEFORE_START = 'BEFORE_START',
  IN_GAME = 'IN_GAME',
  LOSING = 'LOSING',
  WINNING = 'WINNING'
}

export enum cellStatuses {
  MINE = -1,
  EXPLOSION = -2,
  EMPTY = 0
}