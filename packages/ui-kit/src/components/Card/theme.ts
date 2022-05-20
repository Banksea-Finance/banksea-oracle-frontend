import { shadows } from '../../configs/base'
import { CardTheme } from './types'
import { DefaultTheme } from 'styled-components'
import { darkColors, lightColors } from '../../configs'

const light: CardTheme = {
  background: lightColors.card,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: 'linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)',
  dropShadow: 'drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))',
}

const dark: CardTheme = {
  background: darkColors.backgroundSecondary,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: 'linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)',
  dropShadow: 'drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))',
}

export const getCardTheme = ({ theme }: { theme: DefaultTheme }) => {
  return theme.isDark ? dark : light
}
