import React from 'react'
import { Outlet } from 'react-router'
import { Box } from '@banksea-finance/ui-kit'
import { PageWrapper } from '@/components/page-wrapper'

export const FreeFeedsPage = () => {
  return (
    <PageWrapper p={'32px 0'}>
      <Box width={'100%'}>
        <Outlet />
      </Box>
    </PageWrapper>
  )
}

export const FREE_FEEDS_PAGE_PATH = '/oracle/free-feeds'

export { AllFreeFeedsPage } from './AllFreeFeedsPage'
export { CollectionFreeFeedsPage } from './collection-free-feeds'
