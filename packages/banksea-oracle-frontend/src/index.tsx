import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ModalProvider, RefreshControllerProvider, ThemeWrapperProvider } from '@/contexts'
import { QueryClient, QueryClientProvider } from 'react-query'
import { message } from 'antd'

import { ResetCSS } from '@/libs/uikit'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      retry: false
    }
  }
})

message.config({
  duration: 5
})

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeWrapperProvider>
      <ResetCSS />
      <ModalProvider>
        <RefreshControllerProvider>
          <App />
        </RefreshControllerProvider>
      </ModalProvider>
    </ThemeWrapperProvider>
  </QueryClientProvider>
  , document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
