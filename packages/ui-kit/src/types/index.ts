import { Colors } from './colors'
import { MediaQueries } from './media-queries'
import { Shadows } from './shadows'
import { ZIndices } from './z-indices'
import { Radii } from './radii'
import { ComponentStylesOverride } from './override'

export type Breakpoints = string[]

export type Spacing = number[]

export type ThemeType = 'light' | 'dark'

export interface ThemeConfig {
  name: string
  siteWidth: string
  navbarHeight: string
  isDark: boolean
  colors: Colors
  breakpoints: Breakpoints
  mediaQueries: MediaQueries
  spacing: Spacing
  shadows: Shadows
  radii: Radii
  zIndices: ZIndices
  componentStylesOverride: ComponentStylesOverride
}

export { scales } from './scales'
export type { Scales } from './scales'

export { variants } from './variants'
export type { Variants } from './variants'

export type { Colors } from './colors'
export type { MediaQueries } from './media-queries'
export type { Shadows } from './shadows'
export type { ZIndices } from './z-indices'
export type { Radii } from './radii'
export * from './override'
