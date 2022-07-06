import { useQuery } from 'react-query'
import { BankseaApiPageQuery, BankseaApiPageResult } from '@/api/service'
import API from '@/api'

export interface FeedInfo {
  index: number
  id: string
  imageUrl: string
  nftName: string
  floorPrice: number
  avgPrice: any
  time: number
}


export const useFreeFeedsQuery = (data: BankseaApiPageQuery) => {
  return useQuery<BankseaApiPageResult<FeedInfo>>(
    ['FREE_FEEDS', data],
    () => {
      const { current = 1, size = 10 } = data
      return API.v2.FreeFeeds
        .getFreeFeeds({ current, size })
        .then((r: any) => ({
          ...r,
          records: r.records.map((row: any, index: number) => ({
            ...row,
            index: index + (current - 1) * size + 1
          }))
        }))

    }
  )
}
