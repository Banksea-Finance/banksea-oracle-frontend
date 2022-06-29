import { useQuery } from 'react-query'
import API from '@/api'
import { CollectionAggregateHistoriesQuery } from '@/api/types'

export type CollectionFeedActivity = {
  floorPrice: number
  avgPrice?: number
  time: number
  signature: string
}

export const useCollectionFeedActivitiesQuery = (data: CollectionAggregateHistoriesQuery) => {
  return useQuery<CollectionFeedActivity[]>(
    ['COLLECTION_FEED_ACTIVITIES', data],
    () => {
      return API.v2.FreeFeeds.getCollectionFeedActivities(data) as any
    }
  )
}
