import { useQuery } from 'react-query'
import API from '@/api'
import { CollectionAggregateHistoriesQuery } from '@/api/types'
import { useSolanaWalletBasedAuthentication } from '@/contexts/solana-wallet-based-authtication'

export type CollectionFeedActivity = {
  floorPrice: number
  avgPrice?: number
  aiFloorPrice?: number
  time: number
  signature: string
}

export const useCollectionFeedActivitiesQuery = (data: CollectionAggregateHistoriesQuery) => {
  const { accessToken } = useSolanaWalletBasedAuthentication()

  return useQuery<CollectionFeedActivity[]>(
    ['COLLECTION_FEED_ACTIVITIES', data, accessToken],
    () => {
      if (!accessToken) return undefined

      return API.v2.FreeFeeds.getCollectionFeedActivities(data) as any
    },
    { refetchInterval: false, refetchOnWindowFocus: false }
  )
}
