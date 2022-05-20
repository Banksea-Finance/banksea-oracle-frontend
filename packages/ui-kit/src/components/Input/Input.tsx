import styled from 'styled-components'
import { InputProps } from './types'
import { layout, space } from 'styled-system'
import { scales } from '../../types'
import { getOverridableStyle } from '../../utils'
import { InputUnstyled, inputUnstyledClasses } from '@mui/base'

const getBoxShadow = getOverridableStyle('Input', 'boxShadow', () => 'none')

const getHeight = getOverridableStyle(
  'Input',
  'height', ({ scale = scales.M }) => (
    {
      [scales.S]: '32px',
      [scales.M]: '40px',
      [scales.L]: '48px',
    }[scale]
  )
)

const getBorderRadius = getOverridableStyle(
  'Input',
  'borderRadius',
  ({ scale = scales.M }) => (
    {
      [scales.S]: '8px',
      [scales.M]: '8px',
      [scales.L]: '8px',
    }[scale]
  )
)

const getBackground = getOverridableStyle('Input', 'background', ({ theme }) => theme.colors.backgroundSecondary)

const getFontWeight = getOverridableStyle('Input', 'fontWeight', () => '600')

const getFontSize = getOverridableStyle(
  'Input',
  'fontSize',
  ({ scale = scales.M }) => (
    {
      [scales.S]: '14px',
      [scales.M]: '16px',
      [scales.L]: '16px',
    }[scale]
  )
)

const getOutline = getOverridableStyle('Input', 'outline', () => '0')

const getPadding = getOverridableStyle('Input', 'padding', () => '0 8px')

const getBorder = getOverridableStyle(
  'Input',
  'border',
  ({ theme, variant = 'primary', disabled }) => !disabled ? `2px solid ${theme.colors[variant]}` : 'none'
)

const getColors = getOverridableStyle('Input', 'color', ({ theme }) => theme.colors.text)

const getPlaceholderColor = getOverridableStyle('Input', 'placeholderColor', ({ theme }) => theme.colors.textDisabled)

const getFocusBoxShadow = getOverridableStyle('Input', 'focusBoxShadow', ({ theme, variant = 'primary' }) => `0px 0px 10px 1px ${theme.colors[variant]}`)

const getFocusBorder = getOverridableStyle('Input', 'focusBorder', ({ theme, variant = 'primary' }) => `2px solid ${theme.colors[variant]}cc`)

const StyledInput = styled(InputUnstyled)<InputProps>`
  display: flex;
  align-items: center;

  background: ${getBackground};
  border-radius: ${getBorderRadius};
  box-shadow: ${getBoxShadow};
  border: ${getBorder};
  color: ${getColors};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  font-family: inherit;
  height: ${getHeight};
  outline: ${getOutline};
  padding: ${getPadding};
  padding-right: ${({ suffixGap }) => suffixGap};

  &::placeholder {
    color: ${getPlaceholderColor};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundDisabled};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    border: ${getFocusBorder};
    box-shadow: ${getFocusBoxShadow};
  }

  &.${inputUnstyledClasses.focused} {
    border: ${getFocusBorder};
    box-shadow: ${getFocusBoxShadow};
  }

  input {
    background: transparent;
    border: ${getBorder};
    border: none;
    flex-grow: 1;
    font-weight: ${getFontWeight};
    color: ${getColors};
    font-family: inherit;
    font-size: ${getFontSize};

    &:focus-visible {
      outline: none;
    }

  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */

  input[type=number] {
    -moz-appearance: textfield;
  }

  ${layout}
  ${space}
`

export default StyledInput
