import React, { CSSProperties, HTMLAttributes } from 'react'
import {
  DisplayProps,
  FlexboxProps,
  LayoutProps,
  OverflowProps,
  SpaceProps,
  TypographyProps
} from 'styled-system'
import { Colors, PickCSSProperties, PropsWithTheme, Variants } from '../../types'
import { TextProps } from '../Text'

export interface CardRibbonProps {
  variantColor?: keyof Colors
  text: string
  textStyle?: TextProps
}

export type CardTheme = {
  background: string
  boxShadowActive: string
  boxShadowSuccess: string
  boxShadowWarning: string
  cardHeaderBackground: string
  dropShadow: string
}

export interface CardProps
  extends DisplayProps,
    FlexboxProps,
    LayoutProps,
    SpaceProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    TypographyProps,
    OverflowProps {

  plain?: boolean
  ribbon?: React.ReactNode
  activeOnHover?: boolean

  variant?: Variants
  backgroundColor?: keyof Colors | CSSProperties['color']
  color?: keyof Colors | CSSProperties['color']
}

export interface StyledCardProps extends CardProps, PropsWithTheme {}

export type CardOverridableCSSProperties = PickCSSProperties<'boxShadow' | 'backgroundColor' | 'border' | 'borderRadius'>
