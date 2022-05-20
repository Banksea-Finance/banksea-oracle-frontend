import styled from 'styled-components'
import { display, flexbox, layout, overflow, space, typography } from 'styled-system'
import { StyledCardProps } from './types'
import { getCardTheme } from './theme'
import { getOverridableStyle, getThemeValue } from '../../utils'

const getBoxShadow = getOverridableStyle('Card', 'boxShadow', ({ plain, theme, variant = 'primary' }) => {
  if (plain) {
    return ''
  }

  const color = `${theme.colors[variant]}`

  return `0px 4px 10px -1px ${color}`
})

const getBackgroundColor = getOverridableStyle('Card', 'backgroundColor', ({ backgroundColor, theme }) => {
  return getThemeValue(`colors.${backgroundColor}`, backgroundColor)(theme)
})

const getBorder = getOverridableStyle('Card', 'border', ({ variant = 'primary', theme }: StyledCardProps) => {
  const color = theme.colors[variant]

  return `1px solid ${color}`
})

const getBorderRadius = getOverridableStyle('Card', 'borderRadius', () => '32px')

const getColor = ({ theme, color }: StyledCardProps) => getThemeValue(`colors.${color}`, color)(theme)

const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  ${flexbox};

  overflow: hidden;
  position: relative;
  transition: all 0.28s;

  color: ${getColor};
  background-color: ${getBackgroundColor};
  border: ${getBorder};
  border-radius: ${getBorderRadius};
  box-shadow: ${getBoxShadow};

  ${props => props.activeOnHover && `
    &:hover {
      box-shadow: ${getCardTheme(props).boxShadowActive};
    }  
  `}

  ${space}
  ${layout}
  ${display}
  ${overflow}
  ${typography}
`

export default StyledCard
