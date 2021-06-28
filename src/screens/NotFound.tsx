import React from 'react'
import Container from '../components/Container'

const NotFound: React.FC = (): JSX.Element => {
  return (
    <>
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
              <h1 style={{ fontWeight: 'bold', fontSize: '10rem' }}>404</h1>
            </div>

            <div>
              <h1 style={{ fontWeight: 'bold' }}>Not Found</h1>
            </div>
          </div>

          <div style={{ fontSize: '1rem' }}>
            <h3>
              It seems that the resource that you're trying to access doesn't
              exist
            </h3>
          </div>
        </div>
      </Container>
    </>
  )
}

export default NotFound
