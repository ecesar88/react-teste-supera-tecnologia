import styled from 'styled-components'
import LabelProps from '../../contracts/LabelProps'

const Label = styled.label`
  color: ${(props: LabelProps) => props.color ?? '#FFFFFF'};
  font-size: ${(props: LabelProps) => props.fontSize ?? 10 + 'px'};
`

export default Label
