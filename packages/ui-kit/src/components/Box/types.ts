import { HTMLAttributes, ReactNode } from 'react'
import {
  AlignItemsProps,
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  GridProps as _GridProps,
  JustifyContentProps,
  LayoutProps,
  PositionProps,
  SpaceProps
} from 'styled-system'

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children?: ReactNode | ReactNode[]
}

export interface FlexProps extends BoxProps, FlexboxProps {
  ai?: AlignItemsProps['alignItems']
  jc?: JustifyContentProps['justifyContent']
}

export interface GridProps extends FlexProps, _GridProps {
}
