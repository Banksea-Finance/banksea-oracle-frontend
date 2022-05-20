import get from 'lodash/get'
import { DefaultTheme } from 'styled-components'

export const getThemeValue = (path: string, fallback?: string | number) => {
  return (theme: DefaultTheme): string => get(theme, path, fallback)
}

