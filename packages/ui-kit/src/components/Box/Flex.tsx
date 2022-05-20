import styled from 'styled-components'
import { flexbox } from 'styled-system'
import Box from './Box'
import { FlexProps } from './types'

const Flex = styled(Box)<FlexProps>`
  display: flex;

  ${flexbox};
  justify-content: ${props => props.justifyContent || props.jc};
  align-items: ${props => props.alignItems || props.ai};
`

export default Flex
