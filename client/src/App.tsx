import './App.css'
import NavBar from './components/NavBar'
import PicturesBar from './components/PicturesBar'
import Container from './components/Container'
import ProductsList from './screens/ProductsList'
import Teapot from './screens/Teapot'
import NotFound from './screens/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import { AppContext } from './context/AppContext'
import AppContextType from './contracts/AppContextType'
import Cart from './screens/Cart'

const App: React.FC = (): JSX.Element => {
  const initialAppContextValue: AppContextType = {
    data: {
      filteredGames: [
        {
          id: 312,
          name: 'Super Mario Odyssey',
          price: 197.88,
          score: 100,
          image: 'super-mario-odyssey.png',
        },
        {
          id: 201,
          name: 'Call Of Duty Infinite Warfare',
          price: 49.99,
          score: 80,
          image: 'call-of-duty-infinite-warfare.png',
        },
        {
          id: 102,
          name: 'The Witcher III Wild Hunt',
          price: 119.5,
          score: 250,
          image: 'the-witcher-iii-wild-hunt.png',
        },
        {
          id: 99,
          name: 'Call Of Duty WWII',
          price: 249.99,
          score: 205,
          image: 'call-of-duty-wwii.png',
        },
        {
          id: 12,
          name: 'Mortal Kombat XL',
          price: 69.99,
          score: 150,
          image: 'mortal-kombat-xl.png',
        },
        {
          id: 74,
          name: 'Shards of Darkness',
          price: 71.94,
          score: 400,
          image: 'shards-of-darkness.png',
        },
        {
          id: 31,
          name: 'Terra Média: Sombras de Mordor',
          price: 79.99,
          score: 50,
          image: 'terra-media-sombras-de-mordor.png',
        },
        {
          id: 420,
          name: 'FIFA 18',
          price: 195.39,
          score: 325,
          image: 'fifa-18.png',
        },
        {
          id: 501,
          name: 'Horizon Zero Dawn',
          price: 115.8,
          score: 290,
          image: 'horizon-zero-dawn.png',
        },
      ],
      games: [
        {
          id: 312,
          name: 'Super Mario Odyssey',
          price: 197.88,
          score: 100,
          image: 'super-mario-odyssey.png',
        },
        {
          id: 201,
          name: 'Call Of Duty Infinite Warfare',
          price: 49.99,
          score: 80,
          image: 'call-of-duty-infinite-warfare.png',
        },
        {
          id: 102,
          name: 'The Witcher III Wild Hunt',
          price: 119.5,
          score: 250,
          image: 'the-witcher-iii-wild-hunt.png',
        },
        {
          id: 99,
          name: 'Call Of Duty WWII',
          price: 249.99,
          score: 205,
          image: 'call-of-duty-wwii.png',
        },
        {
          id: 12,
          name: 'Mortal Kombat XL',
          price: 69.99,
          score: 150,
          image: 'mortal-kombat-xl.png',
        },
        {
          id: 74,
          name: 'Shards of Darkness',
          price: 71.94,
          score: 400,
          image: 'shards-of-darkness.png',
        },
        {
          id: 31,
          name: 'Terra Média: Sombras de Mordor',
          price: 79.99,
          score: 50,
          image: 'terra-media-sombras-de-mordor.png',
        },
        {
          id: 420,
          name: 'FIFA 18',
          price: 195.39,
          score: 325,
          image: 'fifa-18.png',
        },
        {
          id: 501,
          name: 'Horizon Zero Dawn',
          price: 115.8,
          score: 290,
          image: 'horizon-zero-dawn.png',
        },
      ],
      cart: [],
    },
    state: {
      filters: false,
      shipmentCost: 0,
    },
  }

  const [appContextValue, setAppContextValue] = useState<AppContextType>(
    initialAppContextValue
  )

  return (
    <>
      <AppContext.Provider value={{ appContextValue, setAppContextValue }}>
        <Router>
          <PicturesBar>
            <div style={{ width: '100%' }}>
              <h1>GAMES ECOMMERCE</h1>
            </div>
          </PicturesBar>

          <Container>
            <NavBar homeIcon />

            <Container>
              <Switch>
                <Route path="/" component={ProductsList} exact />
                <Route path="/teapot" component={Teapot} exact />
                <Route path="/cart" component={Cart} exact />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </Container>
        </Router>
      </AppContext.Provider>
    </>
  )
}

export default App
