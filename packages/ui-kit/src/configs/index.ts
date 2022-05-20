import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { DefaultTheme } from 'styled-components'
import { ThemeType } from '../types'

export { lightColors } from './colors'
export { darkColors } from './colors'

export const themes: Record<ThemeType, DefaultTheme> = {
  light: lightTheme,
  dark: darkTheme
}
