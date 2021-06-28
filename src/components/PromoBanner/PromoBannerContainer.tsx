import styled, { keyframes } from 'styled-components'

const animation = keyframes`
0% {
    background-position: 0%
}

50% {
    background-position: 100%
}

100% {
    background-position: 0%
}
    
`

const animationScale = keyframes`
0% {
  transform: scale(98%)
}

50% {
  transform: scale(100%)
}

100% {
  transform: scale(98%)
}
    
`

const PromoBannerContainer = styled.div`
  background-color: #ff1d1d;
  color: white;
  width: 97%;
  border-radius: 8px;
  padding: 10px;
  margin-top: 0px;
  box-shadow: 0px 0px 5px #00000060;
  background-image: url('/assets/promobg.gif');
  background-repeat: repeat;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${animation} 20s infinite;
  animation: ${animationScale} 0.9s infinite;
`

export default PromoBannerContainer
