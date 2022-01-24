import { LayoutProps, SpaceProps } from 'styled-system'

export interface ContainerProps {
  responsive?: boolean;
}

export interface ImageProps extends ContainerProps, SpaceProps, LayoutProps {
  src?: string;
  alt?: string;
  placeholder?: any
}
