import React, { cloneElement, ElementType, isValidElement } from 'react'
import getExternalLinkProps from '../../utils/getExternalLinkProps'
import StyledButton from './StyledButton'
import { ButtonProps, buttonVariant } from './types'
import { Flex } from '../Box'
import { scales } from '../../types'
import { DotLoader } from 'react-spinners'

const Button = <E extends ElementType = 'button'>(props: ButtonProps<E>): JSX.Element => {
  const { startIcon, endIcon, external, className, isLoading, disabled, children, ...rest } = props
  const internalProps = external ? getExternalLinkProps() : {}
  const isDisabled = isLoading || disabled
  const classNames = className ? [className] : []
  const scale = props.scale

  return (
    <StyledButton
      $isLoading={isLoading}
      className={classNames.join(' ')}
      disabled={isDisabled}
      scale={scale}
      {...internalProps}
      {...rest}
    >
      <Flex alignItems={'center'}>
        {
          isValidElement(startIcon) ? cloneElement(startIcon, {
            style: { marginRight: '4px' },
            className: '__prefix'
          }) : <></>
        }
        {children}
        {isLoading ? <DotLoader css={'margin-left: 8px'} size={'16px'} color={'#ccc'} /> : <></>}
        {isValidElement(endIcon) && <span style={{ marginLeft: '4px' }}>{endIcon}</span>}
      </Flex>
    </StyledButton>
  )
}

Button.defaultProps = {
  isLoading: false,
  external: false,
  variant: buttonVariant.primary,
  letterSpacing: '1px',
  disabled: false,
  scale: scales.M
}

export default Button
