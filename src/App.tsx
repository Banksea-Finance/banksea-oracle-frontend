import React from 'react'
import { AppContainer } from '@/App.style'
import Navbar from '@/components/navbar'
import { BrowserRouter, Routes } from 'react-router-dom'

import ScrollToTopWrapper from '@/components/scroll-to-top-wrapper'
import { Route } from 'react-router'
import Redirect from '@/pages/redirect'
import Footer from '@/components/footer'
import { AnalyticsPage, CollectionsListPage, DevelopPage, HomePage } from '@/pages'

const App: React.FC = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <ScrollToTopWrapper>
          <Navbar />
          <main>
            <Routes>
              <Route path={'/'} element={<HomePage />} />
              <Route path={'/develop'} element={<DevelopPage />} />
              <Route path={'/analytics'} element={<AnalyticsPage />} />
              <Route path={'/collection'} element={<CollectionsListPage />} />
              <Route path={'*'} element={<Redirect to={''} />} />
            </Routes>
          </main>
          <Footer />
        </ScrollToTopWrapper>
      </BrowserRouter>
    </AppContainer>
  )
}

export default App
