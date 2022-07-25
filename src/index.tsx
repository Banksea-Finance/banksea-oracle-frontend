import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RefreshControllerProvider } from './contexts'
import { GlobalStyles, ThemeWrapperProvider, ModalProvider, NotifyProvider } from '@banksea-finance/ui-kit'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { SolanaWeb3Provider } from '@/contexts/solana-web3'
import { SolanaWalletBasedAuthenticationProvider } from '@/contexts/solana-wallet-based-authtication'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      retry: false
    }
  }
})

dayjs.extend(LocalizedFormat)

AOS.init()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <RefreshControllerProvider>
        <ThemeWrapperProvider
          componentsOverride={{
            Table: {
              rowHoverBackground: '#7864e699'
            },
            Input: {
              border: 'none'
            }
          }}
          configOverride={{
            siteWidth: '1440px',
            shadows: {
              active: '0px 0px 4px 4px #7864e642'
            },
            colors: {
              primary: '#7864e6',
              secondary: '#5A82D2',
              background: '#050f1e',
              backgroundDisabled: 'rgb(30, 30, 50)',
              backgroundSecondary: 'rgb(10, 20, 60)',
              text: '#fff',
              card: 'rgb(30, 40, 100)',
              disabled: '#c0c0c0',
              gradient: 'linear-gradient(90deg, #7864E6 0%, #D25AE6 55%)'
            },
            fontFamilies: {
              common: 'Rajdhani',
              important: 'G8321'
            }
          }}
        >
          <GlobalStyles />
          <ModalProvider>
            <NotifyProvider>
              <SolanaWeb3Provider>
                <SolanaWalletBasedAuthenticationProvider>
                  <App />
                </SolanaWalletBasedAuthenticationProvider>
              </SolanaWeb3Provider>
            </NotifyProvider>
          </ModalProvider>
        </ThemeWrapperProvider>
      </RefreshControllerProvider>
    </BrowserRouter>
  </QueryClientProvider>
  , document.getElementById('root')
)
