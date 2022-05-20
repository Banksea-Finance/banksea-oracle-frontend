import React from 'react'
import { AppContainer } from '@/App.style'
import Navbar from '@/components/navbar'
import { BrowserRouter } from 'react-router-dom'
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
          {/*<main>*/}
          {/*  <Routes>*/}
          {/*    <Route path={'/'} element={<HomePage />} />*/}
          {/*    <Route path={'/market'} element={<MarketPage />} />*/}
          {/*    <Route path={'/collection'} element={<CollectionsListPage />} />*/}
          {/*    <Route path={'*'} element={<Redirect to={''} />} />*/}
          {/*  </Routes>*/}
          {/*</main>*/}
          {/*<Footer />*/}
        </ScrollToTopWrapper>
      </BrowserRouter>
    </AppContainer>
  )
}

export default App
