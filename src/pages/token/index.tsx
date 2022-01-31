import React from 'react'
import { TokenDetailContainer, TokenDetailWrapper, TokenImage } from '@/pages/token/index.style'
import { Flex } from '@react-css/flex'
import { CollapsibleBox, Table, Text } from '@/libs/uikit/components'
import oraclesData from '@/images/icon/tokenDetail/oraclesData.svg'
import useTokenDetailQuery from '@/hooks/queries/useTokenDetailQuery'
import moment from 'moment'
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
import { DefaultTimeFormat } from '@/utils/constant'

const OracleDataTable: React.FC = () => {
  const { data } = useTokenFeedsQuery()

  const { Column } = Table

  return (
    <CollapsibleBox
      title="AI Nodes"
      collapsible={true}
      titleIcon={<img src={oraclesData} alt="detail" />}
      style={{ marginTop: '30px' }}
    >
      <Table dataSource={data?.nodes} rowKey={'nodeName'}>
        <Column title={'Nodes'} dataIndex={'nodeName'} />
        <Column title={'Latest value'} dataIndex={'price'} />
        <Column title={'Update time'}
          render={(_, record: any) => (
            <Text>{moment(record.time).format(DefaultTimeFormat)}</Text>
          )}
        />
      </Table>
    </CollapsibleBox>
  )
}

const CollectionTokenDetailPage: React.FC = () => {
  const { data } = useTokenDetailQuery()

  return (
    <TokenDetailContainer id={'TokenDetailContainer'}>
      <TokenDetailWrapper>
        <Flex justifySpaceBetween style={{ width: '100%' }}>
          <Flex.Item flex={10}>
            <TokenImage src={data?.imageUrl} />
            <Properties />
          </Flex.Item>
          <Flex.Item flex={1} />
          <Flex.Item flex={17}>
            <Flex justifySpaceBetween alignItemsCenter>
              <Text fontSize={'30px'} fontWeight={'bold'}>{data?.name}</Text>
            </Flex>

            <LatestValuation />
            <AssetAddress />
            <TriggerParameters />

            <Flex justifySpaceBetween>
              <Flex.Item flex={10}>
                <OracleResponses />
              </Flex.Item>
              <Flex.Item flex={1} />
              <Flex.Item flex={10}>
                <LastUpdate />
              </Flex.Item>
            </Flex>
          </Flex.Item>
        </Flex>
        <PriceHistory />
        <OracleDataTable />
      </TokenDetailWrapper>
    </TokenDetailContainer>
  )
}

export default CollectionTokenDetailPage
