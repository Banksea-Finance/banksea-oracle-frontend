import React, { useState } from 'react'
import {
  CollectionDetailContainer,
  CollectionDetailWrapper,
  CollectionImage,
  CollectionName,
  CollectionTokenContainer,
  Description,
  GridContainer,
  StatisticsContainer
} from './index.style'
import { Flex } from '@react-css/flex'
import useCollectionInfoQuery from '@/hooks/queries/useCollectionInfoQuery'
import Redirect from '@/pages/redirect'
import useCollectionTokensQuery from '@/hooks/queries/useCollectionTokensQuery'
import usePageQuery from '@/hooks/usePageQuery'
import { Input, Pagination, Select, Text } from '@/libs/uikit/components'
import { Statistic, TokenCard } from './components'
import { SkeletalTokenCard } from '@/pages/collection/components/token-card'
import { getCurrencyIcon } from '@/utils'
import { SearchOutlined } from '@ant-design/icons'

const CollectionTokens: React.FC = () => {
  const { data: collection } = useCollectionInfoQuery()
  const { current, size, handleChange } = usePageQuery({ size: 15 })

  const [search, setSearch] = useState('')
  const [order, setOrder] = useState('')
  const { data, isFetching } = useCollectionTokensQuery({ current, size, search, order })

  return (
    <CollectionTokenContainer>
      <Flex justifySpaceBetween alignItemsCenter>
        <Flex alignItemsCenter>
          <Input
            width={'250px'}
            prefix={<SearchOutlined />}
            allowClear
            onKeyPress={v => {
              if (v.code === 'Enter') {
                setSearch((v.target as any).value)
              }
            }}
          />

          <Select
            style={{ marginLeft: '10px' }}
            width={'200px'}
            value={order}
            onChange={v => setOrder(v as string)}
          >
            <Select.Option value={'{ "field": "price", "order": "ascend" }'}>
              Price Ascend
            </Select.Option>
            <Select.Option value={'{ "field": "price", "order": "descend" }'}>
              Price Descend
            </Select.Option>
          </Select>
        </Flex>

        <Text color={'primary'}>{collection?.totalSupply} Total {collection?.nftName}</Text>
      </Flex>
      <GridContainer>
        {
          data && !isFetching ? (
            data.records.map((o, i) => (
              <TokenCard {...o} priceIcon={getCurrencyIcon(collection?.chainSource)} key={i} />))
          ) : (
            [...new Array(size)].map((_, index) => <SkeletalTokenCard key={index} />)
          )
        }
      </GridContainer>
      <Pagination
        style={{ textAlign: 'center', marginTop: '10px' }}
        showQuickJumper
        showSizeChanger={false}
        className={'pager'}
        pageSizeOptions={['15', '20', '25', '30']}
        pageSize={size}
        total={data?.total}
        current={current}
        onChange={handleChange}
      />
    </CollectionTokenContainer>
  )
}

const CollectionDetailPage: React.FC = () => {
  const { data, isLoading } = useCollectionInfoQuery()

  if (isLoading) {
    return <></>
  }

  if (!data) {
    return <Redirect to={'/collection'} />
  }

  const { nftName, description, valuation, bannerImageUrl, totalSupply } = data

  return (
    <CollectionDetailContainer>
      <CollectionDetailWrapper>
        <CollectionImage src={bannerImageUrl} alt="" />
        <Flex column>
          <CollectionName>
            {nftName}
          </CollectionName>
          <Text fontSize={'24px'} fontWeight={'bold'} mb={'20px'}>Description</Text>
          <Description>
            {description}
          </Description>
          <StatisticsContainer>
            <Statistic title="Total Supply" value={totalSupply?.toString()} />
            <Statistic title="Total Valuation" value={valuation?.toString()} />
          </StatisticsContainer>
        </Flex>
        <CollectionTokens />
      </CollectionDetailWrapper>
    </CollectionDetailContainer>
  )
}

export default CollectionDetailPage
