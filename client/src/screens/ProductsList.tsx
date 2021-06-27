import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { AppContext } from '../context/AppContext'
import Game from '../contracts/Game'

const ProductsList: React.FC = (): JSX.Element => {
  const { appContextValue } = useContext(AppContext)

  const games = appContextValue.data.games

  const gamesWithImage = games.map((item: Game) => {
    return {
      ...item,
      image: `${process.env.PUBLIC_URL}/${item.image}`,
    }
  })

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '25px',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {games?.length &&
          gamesWithImage.map((game: Game) => {
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
          })}
      </div>
    </>
  )
}

export default ProductsList
