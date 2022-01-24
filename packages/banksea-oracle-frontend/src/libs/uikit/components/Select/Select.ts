import styled from 'styled-components'
import { Select } from 'antd'
import { Scales, scales } from '@/libs/uikit/components/Input/types'
import { LayoutProps, width } from 'styled-system'

export interface SelectProps extends LayoutProps {
  scale?: Scales;
}

const getHeight = ({ scale = scales.MD }: SelectProps) => {
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

const StyledSelect = styled(Select)<SelectProps>`
  background-color: ${({ theme }) => theme.colors.input};
  border: 0;
  border-radius: 16px;
  box-shadow: ${props => props.theme.shadows.inset};
  color: ${({ theme }) => theme.colors.primary};
  display: block;
  font-size: 16px;
  height: ${getHeight};
  outline: 0;
  padding: 0 16px;

  .ant-select-selector {
    background: transparent !important;
    border: none !important;
    display: flex;
    align-items: center;
    height: 100% !important;
  }
  
  ${width}
`

export default StyledSelect
