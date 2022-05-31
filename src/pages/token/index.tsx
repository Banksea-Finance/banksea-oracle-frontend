import React from 'react'
import { TokenDetailContainer, TokenDetailWrapper, TokenImage } from '@/pages/token/index.style'
import { Flex, Text } from '@banksea-finance/ui-kit'
import useTokenDetailQuery from '@/hooks/queries/useTokenDetailQuery'

import {
  AssetAddress,
  LastUpdate,
  LatestValuation,
  OracleResponses,
  PriceHistory,
  Properties,
  TriggerParameters
} from './modules'

const OracleDataTable: React.FC = () => {
  // const { data } = useTokenFeedsQuery()

  return (
    <></>
  )
}

export const CollectionTokenDetailPage: React.FC = () => {
  const { data } = useTokenDetailQuery()

  return (
    <TokenDetailContainer id={'TokenDetailContainer'}>
      <TokenDetailWrapper>
        <Flex style={{ width: '100%' }}>
          <TokenImage src={data?.imageUrl} />
          <Properties />
          <Flex >
            <Text fontSize={'30px'} fontWeight={'bold'}>{data?.name}</Text>
          </Flex>

          <LatestValuation />
          <AssetAddress />
          <TriggerParameters />

          <Flex >
            <OracleResponses />
            <LastUpdate />
          </Flex>
        </Flex>
        <PriceHistory />
        <OracleDataTable />
      </TokenDetailWrapper>
    </TokenDetailContainer>
  )
}
