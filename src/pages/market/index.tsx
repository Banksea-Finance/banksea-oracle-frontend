import React from 'react'
import { MarketPageContainer } from './index.style'
import { AINodesDistribution, BankseaDataFeed } from '@/pages/market/modules'
import styled from 'styled-components'
import CollectionsFeedsModule from '@/pages/market/components/collections-feeds-module'

const FeedsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  
  ${({ theme }) => theme.mediaQueries.xl} {
    flex-direction: column;
    align-items: center;
  }
`

const MarketPage: React.FC = () => {
  return (
    <MarketPageContainer id={'MarketPageContainer'}>
      <BankseaDataFeed />
      <AINodesDistribution />

      <FeedsContainer>
        <CollectionsFeedsModule type={'popular'} title={'Most Popular Feeds'} />
        <CollectionsFeedsModule type={'recent'} title={'Latest Feeds'} />
      </FeedsContainer>
    </MarketPageContainer>
  )
}

export default MarketPage
