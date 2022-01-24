import { ButtonMenuTheme } from './types'
import { DefaultTheme } from 'styled-components'

const base = {
  width: '197px'
}

const dark: ButtonMenuTheme = {
  ...base,
  borderColor: 'transparent',
  backgroundColor: 'rgb(7,32,54)',
  activeBackground: 'rgb(28,182,235)'
}

const light: ButtonMenuTheme = {
  ...base,
  borderColor: '#70C0FE',
  backgroundColor: 'rgb(255,245,255)',
  activeBackground: 'rgb(28,182,235)'
}

export const getButtonMenuTheme = ({ theme }: { theme: DefaultTheme }) => {
  return theme.isDark ? dark : light
}
