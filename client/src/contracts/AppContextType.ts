import Game from './Game'

/* eslint-disable  @typescript-eslint/no-explicit-any */
interface AppContextType {
  data?: {
    games?: Game[]
    [key: string]: any
  }
  [key: string]: any
}

export default AppContextType
