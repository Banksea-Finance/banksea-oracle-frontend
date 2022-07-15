import React from 'react'
import { AppContainer } from '@/App.style'
import Navbar from '@/components/navbar'
import { Routes } from 'react-router-dom'

import ScrollToTopWrapper from '@/components/scroll-to-top-wrapper'
import { Route } from 'react-router'
import Redirect from '@/pages/redirect'
import Footer from '@/components/footer'
import {
  AllFreeFeedsPage,
  AnalyticsPage,
  CollectionFreeFeedsPages,
  CollectionsListPage,
  DevelopPage,
  FreeFeedsPage,
  HomePage
} from '@/pages'
import { ProductPage } from '@/pages/product'
import { RoadmapPage } from '@/pages/roadmap'

const App: React.FC = () => {
  return (
    <AppContainer>
      <ScrollToTopWrapper>
        <Navbar />
        <main>
          <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/develop'} element={<DevelopPage />} />
            <Route path={'/free-feeds'} element={<FreeFeedsPage />}>
              <Route index element={<AllFreeFeedsPage />} />
              <Route path={':collection'} element={<CollectionFreeFeedsPages />} />
            </Route>

            <Route path={'/roadmap'} element={<RoadmapPage />} />
            <Route path={'/analytics'} element={<AnalyticsPage />} />
            <Route path={'/collection'} element={<CollectionsListPage />} />
            <Route path={'/product'} element={<ProductPage />} />
            <Route path={'*'} element={<Redirect to={''} />} />
          </Routes>
        </main>
        <Footer />
      </ScrollToTopWrapper>
    </AppContainer>
  )
}

export default App
