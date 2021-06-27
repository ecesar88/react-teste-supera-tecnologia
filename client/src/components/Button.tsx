import styled from 'styled-components'

interface ButtonProps {
  backgroundColor?: string
}

const Button = styled.button`
  display: inline-block;
  background-color: ${(props: ButtonProps) =>
    props.backgroundColor ? props.backgroundColor : '#7b38d8'};
  border-radius: 5px;
  border: 4px #cccccc;
  color: #eeeeee;
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
    background-color: black;
  }

  &:active {
    background-color: #ff0000;
  }
`

export default Button
