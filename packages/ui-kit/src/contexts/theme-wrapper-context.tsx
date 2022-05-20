import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { themes } from '../configs'
import { ComponentStylesOverride, ThemeType } from '../types'
import { NotifyProvider } from './notify-context'

const THEME_STORAGE_KEY = 'theme'

const ThemeWrapperContext = React.createContext({
  themeType: 'light',
  themeInstance: themes.light,
  switchTheme: () => {}
})

const useLocalStorage = <T,>(key: string, defaultState?: T): [T | undefined, (arg?: T) => void] => {
  const [state, setState] = useState<T | undefined>(() => {
    // NOTE: Not sure if this is ok
    const storedState = localStorage.getItem(key)
    if (storedState) {
      return JSON.parse(storedState)
    }

    return defaultState
  })

  const setLocalStorageState = useCallback(
    (newState?: T) => {
      const changed = state !== newState
      if (!changed) {
        return
      }

      setState(newState)
      if (!newState) {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, JSON.stringify(newState))
      }
    },
    [state, key]
  )

  return [state, setLocalStorageState]
}

const ThemeWrapperProvider: React.FC<{ componentsOverride?: ComponentStylesOverride }> = ({ children, componentsOverride }) => {
  const [storedThemeType, setStoredTheme] = useLocalStorage<ThemeType>(THEME_STORAGE_KEY, 'dark')

  const [themeType, setThemeType] = useState<ThemeType>(storedThemeType as ThemeType)

  const switchTheme = useCallback(() => {
    if (themeType === 'light') {
      setThemeType('dark')
      setStoredTheme('dark')
    } else {
      setThemeType('light')
      setStoredTheme('light')
    }
  }, [themeType])

  const activeTheme: DefaultTheme = useMemo(() => ({
    ...themes[themeType as ThemeType],
    componentStylesOverride: componentsOverride || {}
  }), [themeType])

  useEffect(() => {
    console.log(activeTheme)
  }, [activeTheme])

  return (
    <ThemeWrapperContext.Provider
      value={{
        themeType,
        themeInstance: activeTheme,
        switchTheme
      }}
    >
      <ThemeProvider theme={activeTheme}>
        <NotifyProvider>
          {children}
        </NotifyProvider>
      </ThemeProvider>
    </ThemeWrapperContext.Provider>
  )
}

const useThemeWrapper = () => {
  const { themeType, themeInstance, switchTheme } = useContext(ThemeWrapperContext)

  return {
    themeType,
    themeInstance,
    switchTheme
  }
}

export { ThemeWrapperProvider, useThemeWrapper }
