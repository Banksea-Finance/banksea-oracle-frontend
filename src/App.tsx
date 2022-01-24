import React from 'react'
import { AppContainer, BackTopButton } from '@/App.style'
import Navbar from '@/components/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '@/components/footer'
import Redirect from '@/pages/redirect'
import { ArrowUpOutlined } from '@ant-design/icons'
import { BackTop } from 'antd'
import HomePage from '@/pages/home'
import MarketPage from '@/pages/market'
import CollectionDetailPage from '@/pages/collection'
import CollectionTokenDetailPage from '@/pages/token'
import CollectionsListPage from './pages/collections'
import * as echarts from 'echarts'

import world from '@/assets/world.json'
import ScrollToTopWrapper from '@/components/scroll-to-top-wrapper'

echarts.registerMap('world', world as any)

const App: React.FC = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <ScrollToTopWrapper>
          <Navbar />
          <main>
            <Routes>
              <Route path={'/'} element={<HomePage />} />
              <Route path={'/market'} element={<MarketPage />} />
              <Route path={'/collection'} element={<CollectionsListPage />} />
              <Route path={'/collection/:slug'} element={<CollectionDetailPage />} />
              <Route path={'/token/:key'} element={<CollectionTokenDetailPage />} />
              <Route path={'*'} element={<Redirect to={''} />} />
            </Routes>
          </main>
          <BackTop style={{ paddingBottom: '100px' }}>
            <BackTopButton>
              <ArrowUpOutlined />
            </BackTopButton>
          </BackTop>
          <Footer />
        </ScrollToTopWrapper>
      </BrowserRouter>
    </AppContainer>
  )
}

export default App
