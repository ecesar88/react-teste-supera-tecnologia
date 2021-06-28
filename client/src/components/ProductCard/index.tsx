import React, { useContext, useMemo } from 'react'
import ProductCardContainer from './ProductCardContainer'
import Game from '../../contracts/Game'
import { Button } from '../Button'
import { AiOutlineShoppingCart } from 'react-icons/all'
import { AppContext } from '../../context/AppContext'

const ProductCard: React.FC<Game> = (props: Game): JSX.Element => {
  const { id, name, price, score, image } = props

  const basePath = 'assets/photos'

  const { appContextValue, setAppContextValue } = useContext(AppContext)

  const { cart } = appContextValue?.data

  const isOnCart = useMemo(
    //eslint-disable-next-line
    () => cart?.some((product: any) => product.id === id),
    [cart]
  )

  const handleButtonAddToCartOnClick = () => {
    setAppContextValue((prev: React.ComponentState) => ({
      data: {
        ...prev.data,
        cart: [
          ...prev.data.cart,
          {
            ...props,
          },
        ],
      },
    }))
  }

  const handleButtonRemoveFromCartOnClick = () => {
    setAppContextValue((prev: React.ComponentState) => ({
      data: {
        ...prev.data,

        //eslint-disable-next-line
        cart: prev?.data?.cart?.filter((product: any) => product?.id !== id),
      },
    }))
  }

  return (
    <>
      <ProductCardContainer>
        <div style={{ textAlign: 'center', marginBottom: '5px' }}>
          <h4>{name}</h4>
        </div>

        <hr style={{ color: 'rgba(0, 0, 0, 0.251)' }} />

        <div
          style={{
            marginBottom: '8px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <small>Id: {id}</small>
          </div>

          <div>
            <small>Score: {score}</small>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          <img
            src={
              image?.length ? `${basePath}/${image}` : '/assets/placeholder.png'
            }
            alt={`gameCover${id}`}
            width="150px"
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '10px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontWeight: 'bold',
              fontSize: '20px',
              padding: '3px 10px',
              color: '#ff0000',
            }}
          >
            <span>R$ {price}</span>
          </div>

          <div>
            {isOnCart ? (
              <Button
                backgroundColor="#ff0022"
                style={{
                  fontSize: '15px',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
                onClick={handleButtonRemoveFromCartOnClick}
              >
                <AiOutlineShoppingCart style={{ marginRight: '8px' }} />
                Remover do Carrinho
              </Button>
            ) : (
              <Button
                backgroundColor="#006eff"
                style={{
                  fontSize: '15px',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
                onClick={handleButtonAddToCartOnClick}
              >
                <AiOutlineShoppingCart style={{ marginRight: '8px' }} />
                Adicionar ao Carrinho
              </Button>
            )}
          </div>
        </div>
      </ProductCardContainer>
    </>
  )
}

export default ProductCard
