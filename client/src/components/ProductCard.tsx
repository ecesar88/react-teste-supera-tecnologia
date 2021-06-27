import ProductCardContainer from './ProductCardContainer'
import ProductCardProps from '../contracts/ProductCardProps'
import Button from './Button'
import { AiOutlineShoppingCart } from 'react-icons/all'
import placeholderImage from '../assets/placeholder.png'

const ProductCard: React.FC<ProductCardProps> = (
  props: ProductCardProps
): JSX.Element => {
  const { id, name, price, score, image } = props

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
          <img src={image ?? placeholderImage} alt="gameCover" width="150px" />
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
            >
              <AiOutlineShoppingCart style={{ marginRight: '8px' }} />
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </ProductCardContainer>
    </>
  )
}

export default ProductCard
