import React from 'react'
import { CSSProperties } from 'styled-components'
import PromoBannerContainer from './PromoBannerContainer'

const PromoBanner = (): JSX.Element => {
  const styles: { [key: string]: CSSProperties } = {
    enjoy: {
      color: 'yellow',
      fontWeight: 'bolder',
    },
  }

  return (
    <>
      <PromoBannerContainer>
        <div>
          <h2>Frete GRÁTIS para compras acima de R$ 250,00</h2>
        </div>

        <div style={styles.enjoy}>
          <h1>APROVEITE!</h1>
        </div>
      </PromoBannerContainer>
    </>
  )
}

export default PromoBanner
