import { useQuery } from 'react-query'
import { BankseaApiPageResult } from '@/api/service'
import API from '@/api'
import { useOracle } from '@/hooks/programs/oracle'
import { PublicKey } from '@solana/web3.js'
import { FreeFeedsCollectionQuery } from '@/api/types'
import { useSolanaWalletBasedAuthentication } from '@/contexts/solana-wallet-based-authtication'

export interface FeedInfo {
  index: number
  id: string
  imageUrl: string
  nftName: string
  floorPrice: number
  aiFloorPrice?: number
  avgPrice?: number
  time: number
  collectionTask: string

  account?: any
}

export const useFreeFeedsQuery = (data?: FreeFeedsCollectionQuery, refetchInterval: false | number = false) => {
  const { program } = useOracle()
  const { accessToken } = useSolanaWalletBasedAuthentication()

  return useQuery<BankseaApiPageResult<FeedInfo> | undefined>(
    ['FREE_FEEDS', data, accessToken],
    async () => {
      console.log(accessToken)
      if (!accessToken) return undefined

      const { current = 1, size = 10, search, orders } = data || {}

      const r = (await API.v2.FreeFeeds.getFreeFeeds({ current, size, search, orders }) ) as unknown as BankseaApiPageResult<FeedInfo>

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
    { refetchOnWindowFocus: false, refetchInterval }
  )
}
