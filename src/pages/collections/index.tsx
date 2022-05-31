import React, { useState } from 'react'
import { CollectionsListContainer, Description, Line, Title } from './index.style'
import { CollectionFeedFilterType } from '@/hooks/queries/useCollectionFeedsQuery'
import { useLocationQuery } from '@/hooks/useLocationQuery'

export const CollectionsListPage: React.FC = () => {
  const typeFromQuery = useLocationQuery('type')
  const [type,] = useState<CollectionFeedFilterType>((typeFromQuery as CollectionFeedFilterType) || 'popular')

  // const { current, size/*, handleChange*/ } = usePageQuery({ size: 5 })
  // const { data, isLoading } = useCollectionFeedsQuery({ current, size }, type)

  return (
    <CollectionsListContainer>
      <Title>
        Most { type }
        feeds
      </Title>
      <Line />
      <Description>Explore the most { type } feeds on Banksea Data Feeds</Description>
    </CollectionsListContainer>
  )
}
