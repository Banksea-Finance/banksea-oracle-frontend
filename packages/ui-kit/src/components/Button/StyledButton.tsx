import styled from 'styled-components'
import { layout, space, typography, variant } from 'styled-system'
import { getOverridableStyle, isTouchScreenDevice } from '../../utils'
import { scaleVariants, styleVariants } from './theme'
import { BaseButtonProps, StyledButtonProps } from './types'

const getDisabledStyles = ({ isLoading, theme }: StyledButtonProps) => {
  if (isLoading === true) {
    return `
      &:disabled,
      &.button--disabled {
        cursor: not-allowed;
      }
    `
  }

  return `
    &:disabled,
    &.button--disabled {
      background-color: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
  `
}

const getOpacity = getOverridableStyle('Button', 'opacity', ({ disabled, $isLoading }) => {
  if ($isLoading) return '1'

  return disabled ? '0.5' : '1'
})

const getBoxShadow = getOverridableStyle('Button', 'boxShadow', ({ plain, theme, variant = 'primary' }) => {
  if (plain || variant === 'outlined') return 'none'

  const color = variant ? theme.colors[variant] : theme.colors.primary

  return `0 13px 10px -7px ${color}99`
})

const getBackgroundColor = getOverridableStyle('Button', 'backgroundColor', ({ theme, variant = 'primary' }) => {
  if (variant === 'outlined') return 'transparent'

  return theme.colors[variant]
})

const getBorder = getOverridableStyle('Button', 'border', ({ variant, theme }) => {
  if (variant === 'outlined') return `1px solid ${theme.colors.primary}`

  return 'none'
})

const getBorderRadius = getOverridableStyle('Button', 'borderRadius', ({ circle, scale = 'M' }) => {
  return circle ? `calc(${scaleVariants[scale]?.height} / 2)` : '8px'
})

const getFontWeight = getOverridableStyle('Button', 'fontWeight', () => '600')

const getLineHeight = getOverridableStyle('Button', 'lineHeight', () => '1')

const getOutline = getOverridableStyle('Button', 'outline', () => '0')

const StyledButton = styled.button<BaseButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${getBackgroundColor};
  opacity: ${getOpacity};
  border: ${getBorder};
  border-radius: ${getBorderRadius};
  box-shadow: ${getBoxShadow};
  font-weight: ${getFontWeight};
  line-height: ${getLineHeight};
  outline: ${getOutline};
  
  cursor: ${isTouchScreenDevice() ? 'initial' : 'pointer'};
  user-select: none;
  font-family: inherit;

  transition: all 0.2s, transform 0s;

  &:hover:not(:disabled):not(:active) {
    filter: brightness(110%);
  }

  &:active:not(:disabled) {
    filter: brightness(110%);
    transform: scale(98%);
  }

  ${variant({
    prop: 'scale',
    variants: scaleVariants
  })}
  ${variant({
    variants: styleVariants
  })}
  
  ${getDisabledStyles}
  
  ${layout}
  ${space}
  ${typography}
`

export default StyledButton
