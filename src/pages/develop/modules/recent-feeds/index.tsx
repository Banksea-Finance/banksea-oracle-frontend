import React from 'react'
import { ModuleTitle } from '@/components/module-title'
import { FreeFeedsTable } from '@/components/free-feeds-table'
import { useFreeFeedsQuery } from '@/hooks/queries/free-feeds/useFreeFeedsQuery'
import { Box } from '@banksea-finance/ui-kit'

export const RecentFeedsSection: React.FC = () => {
  const { data: feeds, isFetching } = useFreeFeedsQuery({ size: 5 })

  return (
    <Box width={'100%'}>
      <ModuleTitle>
        Recent Feeds
      </ModuleTitle>

      <FreeFeedsTable
        pageSize={5}
        loading={isFetching}
        data={feeds?.records}
      />
    </Box>
  )
}
