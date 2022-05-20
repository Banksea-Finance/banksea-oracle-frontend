import React from 'react'
import { TokenDetailContainer, TokenDetailWrapper, TokenImage } from '@/pages/token/index.style'
import { Text, Flex } from '@banksea-finance/ui-kit'
import useTokenDetailQuery from '@/hooks/queries/useTokenDetailQuery'
import useTokenFeedsQuery from '@/hooks/queries/useTokenFeedsQuery'

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
  const { data } = useTokenFeedsQuery()

  return (
    <></>
  )
}

const CollectionTokenDetailPage: React.FC = () => {
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

export default CollectionTokenDetailPage
