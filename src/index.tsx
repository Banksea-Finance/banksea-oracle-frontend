import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RefreshControllerProvider } from './contexts'
import { ThemeWrapperProvider, GlobalStyles } from '@banksea-finance/ui-kit'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      retry: false
    }
  }
})

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <RefreshControllerProvider>
      <ThemeWrapperProvider>
        <GlobalStyles />
        <App />
      </ThemeWrapperProvider>
    </RefreshControllerProvider>
  </QueryClientProvider>
  , document.getElementById('root')
)
