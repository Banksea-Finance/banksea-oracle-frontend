import { BaseButtonProps, Scale, variants } from '../Button/types'
import { HTMLAttributes } from 'react'

export interface ButtonMenuItemProps extends BaseButtonProps {
  isActive?: boolean;
}

export interface ButtonMenuProps extends HTMLAttributes<HTMLDivElement> {
  variant?: typeof variants.PRIMARY | typeof variants.SUBTLE;
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  scale?: Scale;
  children: React.ReactElement[];
}

export interface ButtonMenuTheme {
  width: string
  borderColor: string
  activeBackground: string
  backgroundColor: string
}
