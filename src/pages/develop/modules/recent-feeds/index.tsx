import React from 'react'
import { ModuleTitle } from '@/components/module-title'
import { FakeFreeFeedsData, FreeFeedsTable } from '@/components/free-feeds-table'
import { useFreeFeedsQuery } from '@/hooks/queries/free-feeds/useFreeFeedsQuery'
import { Box } from '@banksea-finance/ui-kit'
import { WhitelistRequiredContentWrapper } from '@/components/whitelist-required-content-wrapper'

export const RecentFeedsSection: React.FC = () => {
  const { data: feeds, isLoading } = useFreeFeedsQuery({
    size: 5,
    orders: [{ field: 'time', order: 'descend' }]
  }, 5000)

  return (
    <Box width={'100%'}>
      <ModuleTitle>
        Recent Feeds
      </ModuleTitle>

      <WhitelistRequiredContentWrapper
        suspendHeight={'890px'}
        content={
          <FreeFeedsTable
            pageSize={5}
            loading={isLoading}
            data={feeds?.records}
          />
        }
        suspense={
          <FreeFeedsTable data={FakeFreeFeedsData} />
        }
      />
    </Box>
  )
}
