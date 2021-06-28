import styled from 'styled-components'

const ProductCardContainer = styled.div`
  background-color: #f0f0f0;
  width: 200px;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0px 0px 5px #00000060;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s;

  &:hover {
    transform: scale(97%);
    transition: 0.3s;
  }
`

export default ProductCardContainer
