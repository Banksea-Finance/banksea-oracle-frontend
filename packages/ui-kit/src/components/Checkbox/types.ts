import { CSSProperties, InputHTMLAttributes } from 'react'

import { TextProps } from '../Text'
import { Colors, PropsWithTheme, Scales, Variants } from '../../types'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelTextStyles?: TextProps
  scale?: Scales
  type?: 'checkbox'
  variant?: Variants
}

export interface StyledCheckboxProps extends CheckboxProps, PropsWithTheme {}
