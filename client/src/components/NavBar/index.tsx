import React, { useContext, useState } from 'react'
import Button from '../Button'
import {
  AiOutlineShoppingCart,
  FiSearch,
  ImHome,
  AiOutlineClear,
  HiFilter,
  BiFilterAlt,
} from 'react-icons/all'
import NavBarContainer from './NavBarContainer'
import { CSSProperties } from 'styled-components'
import Input from '../Input'
import NavBarProps from '../../contracts/NavBarProps'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Game from '../../contracts/Game'
import AppContextType from '../../contracts/AppContextType'

const NavBar: React.FC<NavBarProps> = (props): JSX.Element => {
  const { homeIcon } = props

  const { appContextValue, setAppContextValue } =
    useContext<AppContextType>(AppContext)

  const [search, setSearch] = useState('')
  const [games] = useState(appContextValue)
  const [searchedAtLeastOnce, setSearchedAtLeastOnce] = useState(false)

  const handleButtonSearchOnClick = () => {
    if (!search) {
      alert('Digite um termo de busca!')
      return
    }

    if (searchedAtLeastOnce) {
      setAppContextValue?.((prev: React.ComponentState) => ({
        ...prev,
        data: {
          games: games,
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
        games: searchResults,
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
        games: games,
      },
    }))
  }

  const handleButtonToggleFiltersOnClick = () => {
    setAppContextValue?.((prev: React.ComponentState) => ({
      ...prev,
      state: {
        filters: !prev,
      },
    }))
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

          <Button
            style={styles.width100}
            title="Filtros"
            onClick={handleButtonToggleFiltersOnClick}
          >
            {appContextValue?.state?.filters ? <HiFilter /> : <BiFilterAlt />}
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
