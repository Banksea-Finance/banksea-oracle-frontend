import { LayoutProps, SpaceProps } from 'styled-system'

export const scales = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const

export type Scales = typeof scales[keyof typeof scales];

export interface InputProps extends SpaceProps, LayoutProps {
  scale?: Scales;
  isSuccess?: boolean;
  isWarning?: boolean;
}
