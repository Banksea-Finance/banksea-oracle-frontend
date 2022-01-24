import styled, { DefaultTheme } from 'styled-components'
import { space } from 'styled-system'
import { CardProps } from './types'
import { getCardTheme } from './theme'

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBoxShadow = ({ isActive, isSuccess, isWarning, theme }: StyledCardProps) => {
  const cardTheme = getCardTheme({ theme })

  if (isWarning) {
    return cardTheme.boxShadowWarning
  }

  if (isSuccess) {
    return cardTheme.boxShadowSuccess
  }

  if (isActive) {
    return cardTheme.boxShadowActive
  }

  return cardTheme.boxShadow
}

const StyledCard = styled.div<StyledCardProps>`
  background-color: ${p => getCardTheme(p).background};
  border: ${p => getCardTheme(p).boxShadow};
  border-radius: 32px;
  box-shadow: ${getBoxShadow};
  color: ${({ theme, isDisabled }) => theme.colors[isDisabled ? 'textDisabled' : 'text']};
  overflow: hidden;
  position: relative;

  ${space}
`

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
}

export default StyledCard
