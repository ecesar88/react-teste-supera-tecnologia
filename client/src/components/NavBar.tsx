import React, { useContext, useState } from 'react'
import Button from '../components/Button'
import {
  AiOutlineShoppingCart,
  FiSearch,
  ImHome,
  AiOutlineClear,
} from 'react-icons/all'
import NavBarContainer from './NavBarContainer'
import { CSSProperties } from 'styled-components'
import Input from './Input'
import NavBarProps from '../contracts/NavBarProps'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Game from '../contracts/Game'

const NavBar: React.FC<NavBarProps> = (props): JSX.Element => {
  const { homeIcon } = props

  const { appContextValue, setAppContextValue } = useContext(AppContext)

  const [search, setSearch] = useState('')
  const [games] = useState(appContextValue.data.games)
  const [searchedAtLeastOnce, setSearchedAtLeastOnce] = useState(false)

  const handleButtonSearchOnClick = () => {
    if (!search) {
      alert('Digite um termo de busca!')
      return
    }

    if (searchedAtLeastOnce) {
      setAppContextValue({
        data: {
          games: games,
        },
      })
    }

    const searchResults = games.filter((game: Game) => {
      const gameName = game.name.toUpperCase()
      const searchString = search.toUpperCase()

      return gameName.includes(searchString)
    })

    setAppContextValue({
      data: {
        games: searchResults,
      },
    })

    setSearchedAtLeastOnce(true)
  }

  const handleButtonClearSearchOnClick = () => {
    setSearch('')

    setSearchedAtLeastOnce(false)
    setAppContextValue({
      data: {
        games: games,
      },
    })
  }

  const styles: { [key: string]: CSSProperties } = {
    navBarContainer: {
      display: 'flex',
      justifyContent: 'space-between',
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
    },
  }

  return (
    <NavBarContainer style={styles.navBarContainer}>
      <div style={styles.searchBarContainer}>
        <div style={styles.searchBarContainer}>
          {homeIcon && (
            <div>
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
        </div>

        <div style={styles.searchButtonGroup}>
          <Button
            style={styles.width100}
            title="Buscar"
            onClick={handleButtonSearchOnClick}
          >
            <FiSearch />
          </Button>

          <Button
            style={styles.width100}
            title="Limpar Busca"
            onClick={handleButtonClearSearchOnClick}
          >
            <AiOutlineClear />
          </Button>
        </div>
      </div>

      <div>
        <Button style={styles.width100}>
          <AiOutlineShoppingCart />
        </Button>
      </div>
    </NavBarContainer>
  )
}

export default NavBar
