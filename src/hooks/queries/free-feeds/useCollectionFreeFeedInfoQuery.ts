import { useQuery } from 'react-query'
import API from '@/api'

export interface CollectionFreeFeedInfo {
  id: string
  collectionTask: string
  imageUrl: string
  nftName: string
  floorPrice: number
  avgPrice: any
  time: number
}

export const useCollectionFreeFeedInfoQuery = (symbol?: string) => {
  return useQuery<CollectionFreeFeedInfo | undefined>(
    ['COLLECTION_FREE_FEED_INFO', symbol],
    () => {
      if (!symbol) return undefined

      return API.v2.FreeFeeds.getCollectionFreeFeedInfo(symbol) as any
    }
  )
}
