import React, { useContext, useEffect } from 'react'
import NoProductFound from '../components/NoProductFound'
import ProductCard from '../components/ProductCard'
import PromoBanner from '../components/PromoBanner'
import { lsPath } from '../constants/LocalStoragePath'
import { AppContext } from '../context/AppContext'

const ProductsList: React.FC = (): JSX.Element => {
  const { appContextValue, setAppContextValue } = useContext(AppContext)

  const games = appContextValue?.data?.filteredGames

  useEffect(() => {
    const data = localStorage.getItem(`${lsPath}/cart`)
    const parsedData = JSON.parse(data as string)

    if (data) {
      setAppContextValue((prev: React.ComponentState) => ({
        ...prev,
        data: {
          ...prev.data,
          cart: [...parsedData],
        },
      }))
    }
  }, [])

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '25px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <PromoBanner />

        {games?.length ? (
          games.map((game) => {
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
