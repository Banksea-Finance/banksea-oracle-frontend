import { useQuery } from 'react-query'
import API from '@/api'
import { useSolanaWalletBasedAuthentication } from '@/contexts/solana-wallet-based-authtication'

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
  const { accessToken } = useSolanaWalletBasedAuthentication()

  return useQuery<CollectionFreeFeedInfo | undefined>(
    ['COLLECTION_FREE_FEED_INFO', symbol, accessToken],
    () => {
      if (!symbol || !accessToken) return undefined

      return API.v2.FreeFeeds.getCollectionFreeFeedInfo(symbol) as any
    }
  )
}
