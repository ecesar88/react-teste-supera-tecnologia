import styled from 'styled-components'
import ButtonProps from '../../contracts/ButtonProps'

const Button = styled.button`
  display: inline-block;
  background-color: ${(props: ButtonProps) =>
    props.backgroundColor ? props.backgroundColor : '#d41f1f'};
  border-radius: 5px;
  border: 4px #cccccc;
  color: ${(props: ButtonProps) => props.color ?? '#eeeeee'};
  text-align: center;
  font-size: 16px;
  padding: 5px;
  width: 90px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  cursor: pointer;
  margin: 3px;

  &:hover {
    background-color: #9c0b0b;
  }

  &:active {
    background-color: #690808;
  }
`

const CartButton = styled.button<ButtonProps & { cart: number }>`
  position: relative;

  display: inline-block;
  background-color: ${(props: ButtonProps) =>
    props.backgroundColor ? props.backgroundColor : '#d41f1f'};
  border-radius: 5px;
  border: 4px #cccccc;
  color: ${(props: ButtonProps) => props.color ?? '#eeeeee'};
  text-align: center;
  font-size: 16px;
  padding: 5px;
  width: 90px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  cursor: pointer;
  margin: 3px;

  &:hover {
    background-color: #9c0b0b;
  }

  &:active {
    background-color: #690808;
  }

  ${(props) =>
    props.cart &&
    `
  ::after {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: yellow;
    color: black;
    border-radius: 100%;
    font-size: 10px;
    width: 18px;
    height: 18px;
    top: -8px;
    right: -8px;
    content: '${props.cart}';
  }
  `}
`

export { Button, CartButton }
