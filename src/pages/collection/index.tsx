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
import useCollectionInfoQuery from '@/hooks/queries/useCollectionInfoQuery'
import Redirect from '@/pages/redirect'
import useCollectionTokensQuery from '@/hooks/queries/useCollectionTokensQuery'
import usePageQuery from '@/hooks/usePageQuery'
import { Flex, Input, Text } from '@banksea-finance/ui-kit'
import { Statistic, TokenCard } from './components'
import { SkeletalTokenCard } from '@/pages/collection/components/token-card'
import { getCurrencyIcon } from '@/utils'

const CollectionTokens: React.FC = () => {
  const { data: collection } = useCollectionInfoQuery()
  const { current, size, /*handleChange*/ } = usePageQuery({ size: 15 })

  const [search, setSearch] = useState('')
  const [order, /*setOrder*/] = useState('')
  const { data, isFetching } = useCollectionTokensQuery({ current, size, search, order })

  return (
    <CollectionTokenContainer>
      <Flex jc={'space-between'} ai={'center'}>
        <Flex ai={'center'}>
          <Input
            width={'250px'}
            onKeyPress={v => {
              if (v.code === 'Enter') {
                setSearch((v.target as any).value)
              }
            }}
          />

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
    </CollectionTokenContainer>
  )
}

export const CollectionDetailPage: React.FC = () => {
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
        <Flex flexDirection={'column'}>
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
