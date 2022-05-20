import React, { HTMLAttributes } from 'react'
import styled, { CSSProperties } from 'styled-components'
import { Text, TextProps } from '../Text'
import { flexbox, FlexboxProps, layout, LayoutProps, space, SpaceProps } from 'styled-system'

export type FormItemLabelPosition = 'left' | 'top' | 'right'

type StyledFormItemProps = LayoutProps & SpaceProps & FlexboxProps

export interface FormItemProps extends StyledFormItemProps, HTMLAttributes<HTMLDivElement> {
  label: string
  labelWidth?: CSSProperties['width']
  labelPosition?: FormItemLabelPosition
  labelStyle?: TextProps
}

const StyledFormItem = styled.div<StyledFormItemProps>`
  display: flex;
  
  ${flexbox}
  ${space}
  ${layout}
`

const FormItem: React.FC<FormItemProps> = ({
  label,
  labelPosition = 'left',
  labelWidth,
  minHeight = '48px',
  children,
  labelStyle,
  ...rest
}) => {
  return (
    <StyledFormItem
      alignItems={labelPosition === 'top' ? 'start' : 'center'}
      flexDirection={labelPosition === 'top' ? 'column' : 'row'}
      minHeight={minHeight}
      {...rest}
    >
      <Text
        textAlign={labelPosition === 'right' ? 'end' : 'start'}
        mb={labelPosition === 'top' ? '4px' : '0'}
        width={labelWidth}
        mr={'8px'}
        {...labelStyle}
      >
        {label}
      </Text>

      {children}
    </StyledFormItem>
  )
}

export { FormItem }
