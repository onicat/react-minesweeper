import Board from './Board'
import Settings from './Settings'

interface Store {
  board: Board,
  settings: Settings,
  stage: string,
  flagsRemaining: number
}

export default Store;