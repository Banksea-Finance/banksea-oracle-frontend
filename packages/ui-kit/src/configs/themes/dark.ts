import { DefaultTheme } from 'styled-components'
import base from '../base'
import { darkColors } from '../colors'

const darkTheme: DefaultTheme = {
  ...base,
  name: 'dark',
  isDark: true,
  colors: darkColors,
  componentStylesOverride: {}
}

export default darkTheme
