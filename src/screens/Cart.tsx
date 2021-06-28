import React, { useContext } from 'react'
import { CSSProperties } from 'styled-components'
import CartFooter from '../components/CartFooter'
import ProductCard from '../components/ProductCard'
import { AppContext } from '../context/AppContext'
import Game from '../contracts/Game'

const Cart: React.FC = (): JSX.Element => {
  const { appContextValue } = useContext(AppContext)

  const games = appContextValue?.data?.cart

  const styles: { [key: string]: CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    products: {
      display: 'flex',
      gap: '25px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    cartFooter: {
      width: '100%',
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.products}>
        {games?.length ? (
          games.map((game: Game) => {
            return (
              <ProductCard
                key={game.id}
                id={game.id}
                name={game.name}
                price={game.price}
                score={game.score}
                image={game.image}
              />
            )
          })
        ) : (
          <>
            <h1>O seu carrinho está vazio</h1>
          </>
        )}
      </div>

      {!!games?.length && (
        <div style={styles.cartFooter}>
          <CartFooter />
        </div>
      )}
    </div>
  )
}

export default Cart
