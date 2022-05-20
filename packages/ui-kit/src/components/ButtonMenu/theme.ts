import { ButtonMenuTheme } from './types'
import { DefaultTheme } from 'styled-components'
import { themes } from '../../configs'

const base = {
  width: '197px'
}

const dark: ButtonMenuTheme = {
  ...base,
  borderColor: 'transparent',
  backgroundColor: themes.dark.colors.primaryContrary,
  activeBackground: 'rgb(28,182,235)',
  inactiveTextColor: 'white',
}

const light: ButtonMenuTheme = {
  ...base,
  borderColor: '#70C0FE',
  backgroundColor: 'rgb(230,241,243)',
  activeBackground: 'rgb(28,182,235)',
  inactiveTextColor: 'rgb(28,182,235)'
}

export const getButtonMenuTheme = ({ theme }: { theme: DefaultTheme}) => {
  return theme.isDark ? dark : light
}
