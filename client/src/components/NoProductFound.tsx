import React from 'react'
import Container from './Container'

const NoProductFound: React.FC = (): JSX.Element => {
  return (
    <Container>
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            paddingBottom: '0.8rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            fontSize: '3rem',
            textAlign: 'center',
          }}
        >
          <div>
            <h2 style={{ fontWeight: 'bold', color: '#00000095' }}>
              Nenhum resultado encontrado
            </h2>
          </div>
        </div>

        <div
          style={{ fontSize: '1rem', color: '#00000095', textAlign: 'center' }}
        >
          <h3>Tente novamente com outro termo de busca</h3>
        </div>
      </div>
    </Container>
  )
}

export default NoProductFound
