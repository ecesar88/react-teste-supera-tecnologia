import Game from './Game'

interface AppContextType {
  data: {
    filteredGames?: Game[]
    games?: Game[]
    cart?: Game[] | undefined
  }
  state?: {
    filters?: boolean
    shipmentCost: number
  }
}

export default AppContextType
