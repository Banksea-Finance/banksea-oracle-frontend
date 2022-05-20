import styled from 'styled-components'
import { scales } from '../../types'
import { CheckboxProps, StyledCheckboxProps } from './types'
import get from 'lodash/get'

export const getScale = ({ scale = scales.M }: CheckboxProps) => {
  switch (scale) {
  case scales.S:
    return '14px'
  case scales.M:
    return '16px'
  case scales.L:
    return '24px'
  }
}

const getBorder = ({ variant = 'primary', theme }: StyledCheckboxProps) =>  {
  const color = get(theme.colors, variant)

  return `2px solid ${color}`
}

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })<CheckboxProps>`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${getScale};
  width: ${getScale};
  vertical-align: middle;
  transition: all 0.2s ease-in-out;
  border: ${getBorder};
  border-radius: 4px;
  background-color: transparent;

  &:after {
    content: '';
    position: absolute;
    border-bottom: 2px solid;
    border-left: 2px solid;
    border-color: transparent;
    top: 25%;
    left: 0;
    right: 0;
    width: 50%;
    height: 25%;
    margin: auto;
    transform: rotate(-50deg);
    transition: border-color 0.2s ease-in-out;
  }

  &:checked {
    border: none;
    background-color: ${({ theme, variant = 'primary' }) => theme.colors[variant]};

    &:after {
      border-color: white;
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

StyledCheckbox.defaultProps = {
  scale: scales.M,
}

export default StyledCheckbox
