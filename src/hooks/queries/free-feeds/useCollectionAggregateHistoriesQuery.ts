import { useQuery } from 'react-query'
import API from '@/api'
import { CollectionAggregateHistoriesQuery } from '@/api/types'

export type CollectionAggregateHistory = {
  floorPrice: number
  aiFloorPrice?: number
  avgPrice?: number
  time: number
  signature: string
}

export const useCollectionAggregateHistoriesQuery = (data: CollectionAggregateHistoriesQuery) => {
  return useQuery<CollectionAggregateHistory[]>(
    ['COLLECTION_AGGREGATE_HISTORIES', data],
    () => {
      if (!data.symbol) return undefined

      return API.v2.FreeFeeds.getCollectionAggregateHistories(data) as any
    }
  )
}
