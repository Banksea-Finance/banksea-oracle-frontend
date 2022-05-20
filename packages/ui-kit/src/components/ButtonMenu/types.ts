import { BaseButtonProps, ButtonVariant } from '../Button/types'
import React, { HTMLAttributes } from 'react'
import { SpaceProps } from 'styled-system'
import { CSSProperties } from 'styled-components'
import { PickCSSProperties, PropsWithTheme, Scales } from '../../types'

export interface ButtonMenuItemProps extends BaseButtonProps {
  isActive?: boolean
  itemKey?: string
}

export interface ButtonMenuProps extends HTMLAttributes<HTMLDivElement>, SpaceProps {
  variant?:/* Extract<'primary' | 'secondary',*/ ButtonVariant/*>*/
  activeIndex?: number
  activeKey?: string
  onItemClick?: (args: { index: number; key?: string }) => void
  scale?: Scales
  children: React.ReactElement[]
}

export interface StyledButtonMenuProps extends PropsWithTheme, ButtonMenuProps {}

export interface ButtonMenuTheme {
  width: CSSProperties['width']
  borderColor: CSSProperties['color']
  activeBackground: CSSProperties['color']
  backgroundColor: CSSProperties['color']
  inactiveTextColor: CSSProperties['color']
}

export type ButtonMenuOverridableCSSProperties = PickCSSProperties<'backgroundColor' | 'border' | 'padding' | 'borderRadius'> | 'itemPadding'
