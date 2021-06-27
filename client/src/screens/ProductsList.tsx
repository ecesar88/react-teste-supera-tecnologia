import React from 'react'
import ProductCard from '../components/ProductCard'
import ProductCardProps from '../contracts/ProductCardProps'

const ProductsList: React.FC = (): JSX.Element => {

  const games = [
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
  ]
  
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
        {games.map((game: ProductCardProps) => {
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
