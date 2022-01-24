import { SpaceProps, TypographyProps } from 'styled-system'
import { Colors } from '@/libs/uikit/theme/types'
import { CSSProperties } from 'styled-components'

export interface TextProps extends SpaceProps, TypographyProps {
  color?: keyof Colors | CSSProperties['color'];
  fontSize?: string;
  bold?: boolean;
  small?: boolean;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}
