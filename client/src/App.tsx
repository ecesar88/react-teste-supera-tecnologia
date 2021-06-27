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

const App: React.FC = (): JSX.Element => {
  const initialAppContextValue = {
    a: 'blabalbalbababba'
  }

  const [appContextValue, setAppContextValue] = useState(initialAppContextValue)

  return (
    <>
      <AppContext.Provider
        value={{ appContextValue, setAppContextValue } as any}
      >
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
