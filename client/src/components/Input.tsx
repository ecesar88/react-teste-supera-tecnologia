import React from 'react'
import { CSSProperties } from 'styled-components'

const Input: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = (props): JSX.Element => {
  const styles: { [key: string]: CSSProperties } = {
    input: {
      width: '100%',
      height: '100%',
    },
  }

  return <input style={styles.input} type={props.type} {...props} />
}

export default Input
