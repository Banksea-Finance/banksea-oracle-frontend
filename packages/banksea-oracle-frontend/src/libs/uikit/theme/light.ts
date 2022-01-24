import { DefaultTheme } from 'styled-components'
import base from './base'
import { lightColors } from './colors'

const lightTheme: DefaultTheme = {
  ...base,
  name: 'light',
  isDark: false,
  colors: lightColors,
}

export default lightTheme
