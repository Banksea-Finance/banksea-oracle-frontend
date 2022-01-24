import styled from 'styled-components'
import { height, space, width } from 'styled-system'
import { ContainerProps } from './types'

const Wrapper = styled.div<ContainerProps>`
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  ${space}
  ${height}
  ${width}
`

export default Wrapper
