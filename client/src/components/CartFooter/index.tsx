import React, { useContext, useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { CSSProperties } from 'styled-components'
import { lsPath } from '../../constants/LocalStoragePath'
import { AppContext } from '../../context/AppContext'
import Game from '../../contracts/Game'
import { Button } from '../Button'
import CartFooterContainer from './CartFooterContainer'

const CartFooter: React.FC = (): JSX.Element => {
  const { appContextValue, setAppContextValue } = useContext(AppContext)

  const [shipmentCost, setShipmentCost] = useState(0)
  const [total, setTotal] = useState(0)

  const games = appContextValue?.data?.cart

  const calculateShipmentCost = () => {
    const total = 10 * games?.length
    setShipmentCost(total)
  }

  const finishOrder = () => {
    setAppContextValue((prev: React.ComponentState) => ({
      ...prev,
      data: {
        ...prev.data,
        cart: [],
      },
    }))

    alert('Compra finalizada com sucesso!')
    localStorage.setItem(`${lsPath}/cart`, JSON.stringify([]))
  }

  const calculateTotal = () => {
    if (!games?.length) {
      return
    }

    const result = games.reduce((total: number, currentItem: Game) => {
      return total + currentItem.price
    }, 0)

    setTotal(result)
  }

  useEffect(() => {
    calculateShipmentCost()
    calculateTotal()
  }, [games])

  const styles: { [key: string]: CSSProperties } = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 10px',
      width: '100%',
      gap: '10px',
    },
    checkout: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    checkoutContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
    },
    total: {
      display: 'flex',
      flexDirection: 'column',
    },
    shipment: {
      color: total >= 250 ? 'red' : 'black',
      fontWeight: total >= 250 ? 'bold' : 'normal',
    },
  }

  return (
    <CartFooterContainer>
      <div style={styles.container}>
        <div style={styles.checkoutContainer}>
          <FaShoppingCart size={'2.5rem'} color={'red'} />

          <div style={styles.checkout}>
            <h3>Checkout</h3>
            <h4>{games?.length} itens no carrinho</h4>
          </div>
        </div>

        <div style={styles.total}>
          {total >= 250 ? (
            <>
              <h3 style={styles.shipment}>FRETE GRÁTIS</h3>
            </>
          ) : (
            <>
              <h4 style={styles.shipment}>
                Frete R$: `${String(shipmentCost) + ',00'}`
              </h4>
            </>
          )}
        </div>

        <div style={styles.total}>
          <h4>
            Total R$: <b>{total.toFixed(2)}</b>
          </h4>
        </div>
      </div>

      <div>
        <Button onClick={finishOrder}>Finalizar Compra</Button>
      </div>
    </CartFooterContainer>
  )
}

export default CartFooter
