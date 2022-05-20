import { LayoutProps, SpaceProps } from 'styled-system'
import { PickCSSProperties, Scales, Variants } from '../../types'
import { CSSProperties, DefaultTheme } from 'styled-components'
import { InputUnstyledProps } from '@mui/base'

export interface InputProps extends InputUnstyledProps, SpaceProps, LayoutProps {
  scale?: Scales
  variant?: Variants
  suffixGap?: CSSProperties['width']
}

export interface StyledInputProps extends InputProps {
  theme: DefaultTheme
}

export type InputOverridableCSSProperties = PickCSSProperties<
  'background' | 'boxShadow' | 'height' | 'border' | 'color' | 'fontSize' | 'outline' | 'padding' | 'borderRadius' | 'fontWeight'
> | 'placeholderColor' | 'focusBoxShadow' | 'focusBorder'
