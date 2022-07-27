import React from 'react'
import { AppContainer } from '@/App.style'
import Navbar from '@/components/navbar'
import { Routes } from 'react-router-dom'

import ScrollToTopWrapper from '@/components/scroll-to-top-wrapper'
import { Route } from 'react-router'
import Footer from '@/components/footer'
import {
  AllFreeFeedsPage,
  AnalyticsPage,
  CollectionFreeFeedsPage,
  OracleHomePage,
  FreeFeedsPage,
  HomePage,
  RoadmapPage,
  ApiPage,
  Redirect
} from '@/pages'
import { FREE_FEEDS_PAGE_PATH } from '@/pages/oracle/free-feeds'

const App: React.FC = () => {
  return (
    <AppContainer>
      <ScrollToTopWrapper>
        <Navbar />
        <main>
          <Routes>
            <Route path={'/'} element={<HomePage />} />

            <Route path={'/oracle'} element={<OracleHomePage />} />
            <Route path={FREE_FEEDS_PAGE_PATH} element={<FreeFeedsPage />}>
              <Route index element={<AllFreeFeedsPage />} />
              <Route path={':collection'} element={<CollectionFreeFeedsPage />} />
            </Route>

            <Route path={'/roadmap'} element={<RoadmapPage />} />
            <Route path={'/analytics'} element={<AnalyticsPage />} />
            <Route path={'/api'} element={<ApiPage />} />
            <Route path={'*'} element={<Redirect to={''} />} />
          </Routes>
        </main>
        <Footer />
      </ScrollToTopWrapper>
    </AppContainer>
  )
}

export default App
