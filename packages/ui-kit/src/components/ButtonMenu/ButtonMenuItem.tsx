import React from 'react'
import styled from 'styled-components'
import { PolymorphicComponent } from '../Button/types'
import { ButtonMenuItemProps } from './types'
import { getButtonMenuTheme } from './theme'
import { Button } from '../Button'
import { layout, space } from 'styled-system'
import { getOverridableStyle } from '../../utils'
import { scales } from '../../types'

const getPadding = getOverridableStyle('ButtonMenu', 'itemPadding', ({ scale = 'M' }) => ({
  [scales.S]: '4px 20px',
  [scales.M]: '6px 30px',
  [scales.L]: '8px 40px',
}[scale]))

const MenuItemButton = styled(Button)`
  width: fit-content;
  padding: ${getPadding};
  height: 100%;
  box-shadow: none;
  color: ${({ theme }) => theme.colors.textContrary};

  ${({ theme }) => theme.mediaQueries.xl} {
    padding: 8px 20px;
  }

  &.active {
    transition: all ease-out 0.38s;
  }

  &.inactive {
    background-color: transparent;
    color: ${p => getButtonMenuTheme(p).inactiveTextColor};
    transition: all 0s;
    box-shadow: none;

    &:hover:not(:disabled):not(:active) {
      background-color: transparent;
    }
  }

  ${layout}
  ${space}
`

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps> = ({
  isActive = false,
  variant = 'primary',
  as,
  ...props
}: ButtonMenuItemProps) => {
  return (
    <MenuItemButton
      className={isActive ? 'active' : 'inactive'}
      forwardedAs={as}
      variant={variant}
      {...props}
    />
  )
}

export default ButtonMenuItem
