import { HTMLAttributes, ReactNode } from 'react'
import { SpaceProps, TypographyProps } from 'styled-system'
import { PickCSSProperties, PropsWithTheme, Scales, Variants } from '../../types'

export interface TagProps extends SpaceProps, TypographyProps, HTMLAttributes<HTMLDivElement> {
  variant?: Variants;
  scale?: Scales;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  outline?: boolean;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}

export interface StyledTagProps extends TagProps, PropsWithTheme{}

export type TagOverridableCSSProperties = PickCSSProperties<'color' | 'backgroundColor' | 'border'>
