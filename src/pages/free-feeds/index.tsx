import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Outlet, useLocation } from 'react-router'
import { Box, Text } from '@banksea-finance/ui-kit'
import { PageWrapper } from '@/components/page-wrapper'
import { useFreeFeedsQuery } from '@/hooks/queries/free-feeds/useFreeFeedsQuery'

export const FreeFeedsPage = () => {
  const { collection } = useParams()
  const { pathname } = useLocation()
  const { data: feeds } = useFreeFeedsQuery({ current: 1, size: 999 })

  const collectionName = useMemo(() => {
    return feeds?.records?.find(o => o.id === collection)?.nftName
  }, [collection, feeds])

  const pageTitle = useMemo(() => {
    if (pathname === '/free-feeds') return 'Collection Feeds'

    if (collectionName) return `${collectionName} Feed`

    return undefined
  }, [pathname, collectionName])

  return (
    <PageWrapper p={'32px 0'}>
      <Box width={'100%'}>
        <Text gradient important bold fontSize={'min(48px, 7.5vw)'} mb={'24px'}>
          {pageTitle}
        </Text>

        <Outlet />
      </Box>
    </PageWrapper>
  )
}

export { AllFreeFeedsPage } from './AllFreeFeedsPage'
export { CollectionFreeFeedsPages } from './CollectionFreeFeedsPages'
