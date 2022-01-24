import { useQuery, UseQueryResult } from 'react-query'
import API from '@/api'
import { BankseaApiPageQuery, BankseaApiPageResult } from '@/api/service'

export type CollectionFeedFilterType = 'recent' | 'popular'

export interface CollectionFeed {
  slug: string
  nftName: string
  image: string
  announceNumber: number
  chainSource: string
  valuation: number
  lastUpdate: number
  addTime: number
}


const useCollectionFeedsQuery = (query: BankseaApiPageQuery, type: CollectionFeedFilterType): UseQueryResult<BankseaApiPageResult<CollectionFeed>> => {
  return useQuery(
    ['RecentCollectionFeeds', query, type],
    () => {
      return API.core.getCollectionFeeds(query, type)
    },
    {
      keepPreviousData: false
    }
  )
}

export default useCollectionFeedsQuery
