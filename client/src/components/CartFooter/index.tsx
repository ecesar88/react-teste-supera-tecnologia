import React from 'react'
import { CSSProperties } from 'styled-components'
import CartFooterContainer from './CartFooterContainer'

const CartFooter: React.FC = (): JSX.Element => {
  const styles: { [key: string]: CSSProperties } = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px',
      width: '100%',
      gap: '10px',
    },
  }

  return (
    <div style={styles.container}>
      <CartFooterContainer>
        <div>
          <h3>Checkout</h3>
        </div>
      </CartFooterContainer>
    </div>
  )
}

export default CartFooter
