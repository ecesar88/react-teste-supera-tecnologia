import React, { useContext } from 'react'
import NoProductFound from '../components/NoProductFound'
import ProductCard from '../components/ProductCard'
import { AppContext } from '../context/AppContext'
import Game from '../contracts/Game'

const ProductsList: React.FC = (): JSX.Element => {
  const { appContextValue } = useContext(AppContext)

  const games = appContextValue.data.games

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '25px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
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
          <NoProductFound />
        )}
      </div>
    </>
  )
}

export default ProductsList
