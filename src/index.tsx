import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RefreshControllerProvider } from './contexts'
import { GlobalStyles, ThemeWrapperProvider } from '@banksea-finance/ui-kit'

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
      <ThemeWrapperProvider
        componentsOverride={{
          Card: {

          }
        }}
        configOverride={{
          siteWidth: '1440px',
          shadows: {
            active: '0px 0px 4px 4px #7864e642'
          },
          colors: {
            primary: '#7864e6',
            background: '#050f1e',
            backgroundSecondary: '#0a143c',
            text: '#fff',
            disabled: '#999999',
            gradient: 'linear-gradient(90deg, #7864E6 0%, #D25AE6 55%)'
          },
          fontFamilies: {
            common: 'Rajdhani',
            important: 'G8321'
          }
        }}
      >
        <GlobalStyles />
        <App />
      </ThemeWrapperProvider>
    </RefreshControllerProvider>
  </QueryClientProvider>
  , document.getElementById('root')
)
