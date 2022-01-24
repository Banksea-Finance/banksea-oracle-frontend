import { darkColors, lightColors } from '@/libs/uikit'
import { shadows } from '../../theme/base'
import { CardTheme } from './types'
import { DefaultTheme } from 'styled-components'

const light: CardTheme = {
  background: lightColors.card,
  boxShadow: '0px 2px 12px -1px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: 'linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)',
  dropShadow: 'drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))',
}

const dark: CardTheme = {
  background: darkColors.card,
  boxShadow: '0px 2px 12px -1px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: 'linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)',
  dropShadow: 'drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))',
}

export const getCardTheme = ({ theme }: { theme: DefaultTheme }) => {
  return theme.isDark ? dark : light
}
