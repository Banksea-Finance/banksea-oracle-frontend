import { useQuery } from 'react-query'
import { BankseaApiPageResult } from '@/api/service'
import API from '@/api'
import { useOracle } from '@/hooks/programs/oracle'
import { PublicKey } from '@solana/web3.js'
import { FreeFeedsCollectionQuery } from '@/api/types'

export interface FeedInfo {
  index: number
  id: string
  imageUrl: string
  nftName: string
  floorPrice: number
  avgPrice: any
  time: number
  collectionTask: string

  account?: any
}

export const useFreeFeedsQuery = (data?: FreeFeedsCollectionQuery) => {
  const { program } = useOracle()

  return useQuery<BankseaApiPageResult<FeedInfo>>(
    ['FREE_FEEDS', data],
    async () => {
      const { current = 1, size = 10, search } = data || {}

      const r = (await API.v2.FreeFeeds.getFreeFeeds({ current, size, search }) ) as unknown as BankseaApiPageResult<FeedInfo>

      const tasks = r.records.map(o => new PublicKey(o.collectionTask))

      const accounts = await program.account.collectionTask.fetchMultiple(tasks).catch(e => {
        console.error(e)
        return undefined
      })

      return {
        ...r,
        records: r.records.map((row: any, index: number) => ({
          ...row,
          index: index + (current - 1) * size + 1,
          account: accounts?.[index]
        }))
      }
    },
    { refetchOnWindowFocus: false, refetchInterval: false }
  )
}
