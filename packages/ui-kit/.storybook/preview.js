import React from 'react'
import { ThemeWrapperProvider, GlobalStyles } from '../src'

const globalDecorator = (StoryFn) => {
  return (
    <ThemeWrapperProvider>
      <GlobalStyles/>
      <StoryFn/>
    </ThemeWrapperProvider>
  )
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
}

export const decorators = [globalDecorator]
