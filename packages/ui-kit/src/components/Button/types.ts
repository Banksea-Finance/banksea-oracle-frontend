import { ComponentProps, ElementType, ReactElement, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { LayoutProps, SpaceProps, TypographyProps } from 'styled-system'
import { PickCSSProperties, PropsWithTheme, Scales, variants } from '../../types'

export const buttonVariant = {
  ...variants,
  text: 'text',
  outlined: 'outlined'
} as const

export type ButtonVariant = keyof typeof buttonVariant

/**
 * @see https://www.benmvp.com/blog/polymorphic-react-components-typescript/
 */
export type AsProps<E extends ElementType = ElementType> = {
  as?: E
}

export type MergeProps<E extends ElementType> = AsProps<E> & Omit<ComponentProps<E>, keyof AsProps>

export type PolymorphicComponentProps<E extends ElementType, P> = P & MergeProps<E>

export type PolymorphicComponent<P, D extends ElementType = 'button'> = <E extends ElementType = D>(
  props: PolymorphicComponentProps<E, P>
) => ReactElement | null

export interface BaseButtonProps extends LayoutProps, SpaceProps, TypographyProps {
  as?: 'a' | 'button' | typeof Link
  external?: boolean
  isLoading?: boolean
  scale?: Scales
  variant?: ButtonVariant
  disabled?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  plain?: boolean
  circle?: boolean
}

export type ButtonProps<P extends ElementType = 'button'> = PolymorphicComponentProps<P, BaseButtonProps>

export interface StyledButtonProps extends BaseButtonProps, PropsWithTheme {
  $isLoading?: boolean
}

export type ButtonOverridableCSSProperties = PickCSSProperties<
  'boxShadow' | 'backgroundColor' | 'border' | 'opacity' | 'borderRadius' | 'fontWeight' | 'lineHeight' | 'outline'
>
