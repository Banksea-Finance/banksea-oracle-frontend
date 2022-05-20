import styled from 'styled-components'
import { space, typography, variant } from 'styled-system'
import { Colors } from '../../types/colors'
import { scaleVariants } from './theme'
import { StyledTagProps } from './types'
import { getOverridableStyle } from '../../utils'

const getColor = getOverridableStyle('Tag', 'color', ({ outline, theme, variant = 'primary' }) => {
  return outline ? theme.colors[theme.colors[variant] as keyof Colors] : '#fff'
})

const getBackgroundColor = getOverridableStyle('Tag', 'backgroundColor', ({ outline, theme, variant = 'primary' }) => {
  return outline ? theme.colors.background : theme.colors[variant]
})

const getBorder = getOverridableStyle('Tag', 'border', ({ outline, theme, variant = 'primary' }) => {
  return outline ? `2px solid ${theme.colors[theme.colors[variant] as keyof Colors]}` : ''
})

export const StyledTag = styled.div<StyledTagProps>`
  align-items: center;
  border-radius: 16px;
  display: inline-flex;
  font-weight: 500;
  white-space: nowrap;
  width: fit-content;

  color: ${getColor};
  background-color: ${getBackgroundColor};
  border: ${getBorder};
  
  & > svg {
    fill: currentColor;
  }

  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}

  ${variant({
    prop: 'scale',
    variants: scaleVariants,
  })}
  ${space}
  ${typography}
`
