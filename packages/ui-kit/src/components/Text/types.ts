import { LayoutProps, SpaceProps, TypographyProps } from 'styled-system'
import { CSSProperties, HTMLAttributes } from 'react'
import { DefaultTheme } from 'styled-components'
import { Colors, PickCSSProperties } from '../../types'

export interface TextProps extends SpaceProps, LayoutProps, TypographyProps, HTMLAttributes<HTMLSpanElement | HTMLDivElement> {
  as?: 'div' | 'span'

  color?: keyof Colors | CSSProperties['color']
  fontSize?: string
  bold?: boolean
  small?: boolean
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize'
  important?: boolean
}

export interface StyledTextProps extends TextProps {
  theme: DefaultTheme
}

export type TextOverridableCSSProperties = PickCSSProperties<'color' | 'fontSize' | 'fontFamily' | 'fontWeight' | 'lineHeight'>
