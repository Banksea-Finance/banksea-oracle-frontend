import { Breakpoints, MediaQueries, Shadows, Spacing } from '../types'

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080
}

const breakpoints: Breakpoints = Object.values(breakpointMap).map(breakpoint => `${breakpoint}px`)

const mediaQueries: MediaQueries = {
  xs: `@media screen and (max-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (max-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (max-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (max-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (max-width: ${breakpointMap.xl}px)`,
}

export const shadows: Shadows = {
  level1: '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
  active: '0px 0px 4px 4px #19d69742',
  success: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
  warning: '0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
  focus: '0px 0px 0px 1px #605bffcc, 0px 0px 0px 4px #605bff55;',
  inset: 'rgb(44 44 44 / 40%) -1px -2px 0px 0px inset',
}

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64]

const radii = {
  small: '4px',
  default: '16px',
  card: '32px',
  circle: '50%',
}

const zIndices = {
  dropdown: 10,
  modal: 100,
}

export default {
  siteWidth: '1278px',
  navbarHeight: '170px',
  mobileNavbarHeight: '80px',
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices,
}
