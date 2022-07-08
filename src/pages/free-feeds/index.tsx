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

export { AllFreeFeedsPage } from './AllFreeFeedsPage'
export { CollectionFreeFeedsPages } from './CollectionFreeFeedsPages'
