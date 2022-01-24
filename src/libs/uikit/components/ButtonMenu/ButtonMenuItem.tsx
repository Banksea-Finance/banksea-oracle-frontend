import React from 'react'
import styled from 'styled-components'
import { PolymorphicComponent, variants } from '@/libs/uikit/components/Button/types'
import { ButtonMenuItemProps } from './types'
import { getButtonMenuTheme } from './theme'
import { Button } from '@/libs/uikit/components'

const InactiveButton = styled(Button)`
  width: ${p => getButtonMenuTheme(p).width};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textDisabled};
  transition: background-color 0s;
  
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`

const ActiveButton = styled(Button)`
  width: ${p => getButtonMenuTheme(p).width};
  background-color: ${p => getButtonMenuTheme(p).activeBackground};
  color: ${({ theme }) => theme.colors.text};
`

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return (
      <InactiveButton
        forwardedAs={as}
        variant="tertiary"
        {...props}
      />
    )
  }

  return <ActiveButton forwardedAs={as} variant={variant} {...props} />
}

export default ButtonMenuItem
