import React from 'react'
import Button from '../components/Button'
import { AiOutlineShoppingCart, FiSearch, ImHome } from 'react-icons/all'
import NavBarContainer from './NavBarContainer'
import { CSSProperties } from 'styled-components'
import Input from './Input'
import NavBarProps from '../contracts/NavBarProps'
import { Link } from 'react-router-dom'

const NavBar: React.FC<NavBarProps> = (props): JSX.Element => {
  const { homeIcon } = props

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
  }

  return (
    <NavBarContainer style={styles.navBarContainer}>
      <div style={styles.searchBarContainer}>
        <div style={styles.searchBarContainer}>
          {homeIcon && (
            <div>
              <Link to="/">
                <Button style={styles.width100}>
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
            />
          </div>
        </div>

        <div>
          <Button style={styles.width100}>
            <FiSearch />
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
