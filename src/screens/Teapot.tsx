import React from 'react'
import Container from '../components/Container'

const Teapot: React.FC = (): JSX.Element => {
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
          }}
        >
          <div>
            <h1 style={{ fontWeight: 'bold', fontSize: '10rem' }}>418</h1>
          </div>

          <div>
            <h1 style={{ fontWeight: 'bold' }}>I'm a Teapot</h1>
          </div>
        </div>

        <div style={{ fontSize: '1rem' }}>
          <h3>
            This error response code indicates that the server refuses to brew
            coffee because it is, permanently, a teapot. For reference, a
            combined coffee/tea pot that is temporarily out of coffee should
            instead return 503.
          </h3>
        </div>
      </div>
    </Container>
  )
}

export default Teapot
