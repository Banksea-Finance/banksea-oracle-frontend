import { useQuery } from 'react-query'
import API from '@/api'
import { CollectionAggregateHistoriesQuery } from '@/api/types'
import { useSolanaWalletBasedAuthentication } from '@/contexts/solana-wallet-based-authtication'

export type CollectionAggregateHistory = {
  floorPrice: number
  aiFloorPrice?: number
  avgPrice?: number
  time: number
  signature: string
}

export const useCollectionAggregateHistoriesQuery = (data: CollectionAggregateHistoriesQuery) => {
  const { accessToken } = useSolanaWalletBasedAuthentication()

  return useQuery<CollectionAggregateHistory[]>(
    ['COLLECTION_AGGREGATE_HISTORIES', data, accessToken],
    () => {
      if (!data.symbol || !accessToken) return undefined

      return API.v2.FreeFeeds.getCollectionAggregateHistories(data) as any
    }
  )
}
