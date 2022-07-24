import React from 'react'
import { ModuleTitle } from '@/components/module-title'
import { FakeFreeFeedsData, FreeFeedsTable } from '@/components/free-feeds-table'
import { useFreeFeedsQuery } from '@/hooks/queries/free-feeds/useFreeFeedsQuery'
import { Box, Flex, Text } from '@banksea-finance/ui-kit'
import { WhitelistRequiredContentWrapper } from '@/components/whitelist-required-content-wrapper'
import { Link } from 'react-router-dom'

export const RecentFeedsSection: React.FC = () => {
  const { data: feeds } = useFreeFeedsQuery({
    size: 5,
    orders: [{ field: 'time', order: 'descend' }]
  }, 5000)

  return (
    <Box width={'100%'}>
      <ModuleTitle>
        Recent Feeds
      </ModuleTitle>

      <WhitelistRequiredContentWrapper
        suspendHeight={'445px'}
        content={
          <Flex ai={'flex-end'} flexDirection={'column'}>
            <FreeFeedsTable
              pageSize={5}
              loading={!feeds?.records.length}
              data={feeds?.records}
            />
            <Link to={'/free-feeds'}>
              <Text color={'primary'} fontSize={'16px'}>
                View more
              </Text>
            </Link>
          </Flex>
        }
        suspense={
          <FreeFeedsTable data={FakeFreeFeedsData.slice(0, 5)} />
        }
      />
    </Box>
  )
}
