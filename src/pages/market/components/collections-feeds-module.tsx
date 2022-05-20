import React from 'react'
import useCollectionFeedsQuery, { CollectionFeedFilterType } from '@/hooks/queries/useCollectionFeedsQuery'
import { HomeModuleTitle } from '@/pages/market/index.style'
import CollectionFeedRow from '@/pages/market/components/collection-feed-row'
import { Link } from 'react-router-dom'
import arrowRight from '@/images/icon/arrowRight.svg'
import { Flex, useResponsive } from '@banksea-finance/ui-kit'

const CollectionsFeedsModule: React.FC<{ type: CollectionFeedFilterType, title: string }> = ({ type, title }) => {
  const { data } = useCollectionFeedsQuery({ current: 1, size: 5 }, type)

  const { isMobile } = useResponsive()

  return (
    <Flex style={{ width: 'fit-content', marginBottom: isMobile ? '50px': '0' }}>
      <HomeModuleTitle>{title}</HomeModuleTitle>
      {
        data?.records.map(row => (<CollectionFeedRow {...row} key={row.nftName} />))
      }
      <Link to={'/collection'} style={{ color: '#333', fontSize: '14px' }}>
        <Flex>
          <div>View more</div>
          <img style={{ marginLeft: '10px' }} src={arrowRight} />
        </Flex>
      </Link>
    </Flex>
  )
}

export default CollectionsFeedsModule
