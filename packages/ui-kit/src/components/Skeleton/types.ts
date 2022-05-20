import { BorderProps, LayoutProps, SpaceProps } from 'styled-system'

export const animation = {
  WAVES: 'waves',
  PULSE: 'pulse'
} as const

export type Animation = typeof animation[keyof typeof animation];

export interface SkeletonProps extends SpaceProps, LayoutProps, BorderProps {
  animation?: Animation;
}
