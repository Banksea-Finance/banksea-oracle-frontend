import { AutoComplete } from 'antd'
import styled, { DefaultTheme } from 'styled-components'
import { AutoCompleteProps, scales } from './types'
import { layout } from 'styled-system'

interface StyledInputProps extends AutoCompleteProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success
 */
const getBoxShadow = ({ isSuccess = false, isWarning = false, theme }: StyledInputProps) => {
  if (isWarning) {
    return theme.shadows.warning
  }

  if (isSuccess) {
    return theme.shadows.success
  }

  return theme.shadows.inset
}

const getHeight = ({ scale = scales.MD }: StyledInputProps) => {
  switch (scale) {
  case scales.SM:
    return '32px'
  case scales.LG:
    return '48px'
  case scales.MD:
  default:
    return '40px'
  }
}

const StyledAutoComplete = styled(AutoComplete)<AutoCompleteProps>`
  background-color: ${({ theme }) => theme.colors.input};
  border: 0;
  border-radius: 16px;
  box-shadow: ${getBoxShadow};
  color: ${({ theme }) => theme.colors.primary};
  display: block;
  font-size: 16px;
  height: ${getHeight};
  outline: 0;
  padding: 0 16px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundDisabled};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
  
  &.ant-select {
    display: flex;
    align-items: center;
  }

  .ant-select-selector {
    background: transparent !important;
    border: none !important;
  }
  
  ${layout}
`

export default StyledAutoComplete
