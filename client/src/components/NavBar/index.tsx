import React, { useContext, useState } from 'react'
import { Button, CartButton } from '../Button'
import {
  AiOutlineShoppingCart,
  FiSearch,
  ImHome,
  AiOutlineClear,
} from 'react-icons/all'
import NavBarContainer from './NavBarContainer'
import { CSSProperties } from 'styled-components'
import Input from '../Input'
import NavBarProps from '../../contracts/NavBarProps'
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Game from '../../contracts/Game'

const NavBar: React.FC<NavBarProps> = (props): JSX.Element => {
  const { homeIcon } = props

  const location = useLocation()

  const { appContextValue, setAppContextValue } = useContext(AppContext)

  const [search, setSearch] = useState('')
  const [searchedAtLeastOnce, setSearchedAtLeastOnce] = useState(false)
  const [filter, setFilter] = useState({
    price: 'ascending',
    score: 'ascending',
  })

  const games = appContextValue?.data?.filteredGames
  const cart = appContextValue?.data?.cart

  const handleButtonSearchOnClick = () => {
    if (!search) {
      alert('Digite um termo de busca!')
      return
    }

    if (searchedAtLeastOnce) {
      setAppContextValue?.((prev: React.ComponentState) => ({
        ...prev,
        data: {
          ...prev.data,
          filteredGames: games,
        },
      }))
    }

    const searchResults = games?.filter((game: Game) => {
      const gameName = game.name.toUpperCase()
      const searchString = search.toUpperCase()

      return gameName.includes(searchString)
    })

    setAppContextValue?.((prev: React.ComponentState) => ({
      ...prev,
      data: {
        ...prev.data,
        filteredGames: searchResults,
      },
    }))

    setSearchedAtLeastOnce(true)
  }

  const handleButtonClearSearchOnClick = () => {
    setSearch('')

    setSearchedAtLeastOnce(false)
    setAppContextValue?.((prev: React.ComponentState) => ({
      ...prev,
      data: {
        ...prev.data,
        filteredGames: prev.data.games,
      },
    }))
  }

  const priceFilter = () => {
    // eslint-disable-next-line
    let sorted: { [key: string]: any }

    if (filter.price === 'ascending') {
      sorted = games.sort((a: Game, b: Game) => a.price - b.price)
    } else {
      sorted = games.sort((a: Game, b: Game) => b.price - a.price)
    }

    setFilter((prev: React.ComponentState) => ({
      ...prev,
      price: prev.price === 'ascending' ? 'descending' : 'ascending',
    }))

    setAppContextValue?.((prev: React.ComponentState) => ({
      ...prev,
      data: {
        ...prev.data,
        filteredGames: sorted,
      },
    }))
  }

  const alphabeticFilter = () => {
    // eslint-disable-next-line
    let sorted: { [key: string]: any }

    if (filter.score === 'ascending') {
      sorted = games.sort((a: Game, b: Game) => {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      })
    } else {
      sorted = games.sort((a: Game, b: Game) => {
        if (a.name < b.name) {
          return 1
        }
        if (a.name > b.name) {
          return -1
        }
        return 0
      })
    }

    setFilter((prev: React.ComponentState) => ({
      ...prev,
      score: prev.score === 'ascending' ? 'descending' : 'ascending',
    }))

    setAppContextValue?.((prev: React.ComponentState) => ({
      ...prev,
      data: {
        ...prev.data,
        filteredGames: sorted,
      },
    }))
  }

  const scoreFilter = () => {
    // eslint-disable-next-line
    let sorted: { [key: string]: any }

    if (filter.score === 'ascending') {
      sorted = games.sort((a: Game, b: Game) => a.score - b.score)
    } else {
      sorted = games.sort((a: Game, b: Game) => b.score - a.score)
    }

    setFilter((prev: React.ComponentState) => ({
      ...prev,
      score: prev.score === 'ascending' ? 'descending' : 'ascending',
    }))

    setAppContextValue?.((prev: React.ComponentState) => ({
      ...prev,
      data: {
        ...prev.data,
        filteredGames: sorted,
      },
    }))
  }

  const styles: { [key: string]: CSSProperties } = {
    navBarContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    inputBar: {
      padding: '5px 0',
    },
    input: {
      width: '250px',
      height: '100%',
    },
    searchBarContainer: {
      display: 'flex',
      gap: '10px',
    },
    width100: {
      width: '100%',
    },
    searchButtonGroup: {
      display: 'flex',
      gap: '5px',
      alignItems: 'center',
    },
    filterButton: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
  }

  return (
    <NavBarContainer style={styles.navBarContainer}>
      <div style={styles.searchBarContainer}>
        <div style={styles.searchBarContainer}>
          {homeIcon && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/">
                <Button
                  style={styles.width100}
                  onClick={handleButtonClearSearchOnClick}
                >
                  <ImHome />
                </Button>
              </Link>
            </div>
          )}

          {location.pathname !== '/cart' && (
            <div style={styles.inputBar}>
              <Input
                style={styles.input}
                placeholder=" Buscar"
                type="text"
                maxLength={30}
                value={search}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                  evt.persist()
                  setSearch(evt.target.value)
                }}
                onKeyPress={(evt: React.KeyboardEvent) => {
                  if (evt.key !== 'Enter') {
                    return
                  }

                  handleButtonSearchOnClick()
                }}
              />
            </div>
          )}
        </div>

        {location.pathname !== '/cart' && (
          <div style={styles.searchButtonGroup}>
            <div>
              <Button
                style={styles.width100}
                title="Buscar"
                onClick={handleButtonSearchOnClick}
              >
                <FiSearch />
              </Button>
            </div>

            <div>
              <Button
                style={styles.width100}
                title="Limpar Busca"
                onClick={handleButtonClearSearchOnClick}
              >
                <AiOutlineClear />
              </Button>
            </div>

            <div>
              <Button
                id="filterButton"
                style={styles.filterButton}
                title="Filtros"
                onClick={() => priceFilter()}
              >
                <span style={{ fontSize: '12px' }}>Ordenar por Preço</span>
              </Button>
            </div>

            <div>
              <Button
                id="filterButton"
                style={styles.filterButton}
                title="Filtros"
                onClick={() => alphabeticFilter()}
              >
                <span style={{ fontSize: '12px' }}>Ordem Alfabética</span>
              </Button>
            </div>

            <div>
              <Button
                id="filterButton"
                style={styles.filterButton}
                title="Filtros"
                onClick={() => scoreFilter()}
              >
                <span style={{ fontSize: '12px' }}>Ordenar por Score</span>
              </Button>
            </div>
          </div>
        )}
      </div>

      {location.pathname !== '/cart' && (
        <div>
          <Link to="/cart">
            <CartButton style={styles.width100} cart={cart?.length}>
              <AiOutlineShoppingCart />
            </CartButton>
          </Link>
        </div>
      )}
    </NavBarContainer>
  )
}

export default NavBar
