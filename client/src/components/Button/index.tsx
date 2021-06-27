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

export default Button
