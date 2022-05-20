import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { getCardTheme } from './theme'

export type CardHeaderProps = SpaceProps

const CardHeader = styled.div<CardHeaderProps>`
  background: ${p => getCardTheme(p).cardHeaderBackground};

  ${space}
`

CardHeader.defaultProps = {
  p: '24px'
}

export default CardHeader
