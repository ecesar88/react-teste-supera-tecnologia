import styled from 'styled-components'

interface ContainerProps {
  backgroundColor?: string
}

const Container = styled.div`
  background-color: ${(props: ContainerProps) =>
    props.backgroundColor ?? '#FFFFFF'};
  margin-right: auto;
  margin-left: auto;

  max-width: 960px;

  padding: 15px;
`

export default Container
