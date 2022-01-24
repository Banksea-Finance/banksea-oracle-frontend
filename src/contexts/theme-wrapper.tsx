import React, { useCallback, useContext, useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme, themes } from '@/libs/uikit'
import useLocalStorage from '@/hooks/useLocalStorage'

export const THEME_STORAGE_KEY = 'theme'

const ThemeWrapperContext = React.createContext({
  theme: 'light',
  themeInstance: themes.light,
  switchTheme: () => {
  }
})

const ThemeWrapperProvider: React.FC = ({ children }) => {
  const [storedTheme, setStoredTheme] = useLocalStorage<Theme>(THEME_STORAGE_KEY, 'light')

  const [theme, setTheme] = useState<Theme>(storedTheme as Theme)

  const switchTheme = useCallback(() => {
    if (theme === 'light') {
      setTheme('dark')
      setStoredTheme('dark')
    } else {
      setTheme('light')
      setStoredTheme('light')
    }
  }, [theme])

  const activeTheme = useMemo(() => themes[theme as Theme], [theme])

  return (
    <ThemeWrapperContext.Provider
      value={{
        theme,
        themeInstance: themes[theme],
        switchTheme
      }}
    >
      <ThemeProvider theme={activeTheme}>
        {children}
      </ThemeProvider>
    </ThemeWrapperContext.Provider>
  )
}


const useThemeWrapper = () => {
  const { theme, themeInstance, switchTheme } = useContext(ThemeWrapperContext)
  return {
    theme,
    themeInstance,
    switchTheme
  }
}

export {
  ThemeWrapperProvider,
  useThemeWrapper
}

