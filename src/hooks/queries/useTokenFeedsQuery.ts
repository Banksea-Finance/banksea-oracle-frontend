import { useQuery, UseQueryResult } from 'react-query'
import API from '@/api'
import { useParams } from 'react-router-dom'

export interface TokenFeed {
  asset: string
  lastUpdate: number
  price: number
  risk: number
  time: number
  nodeName: string
  image: string
  webUrl: any
  status: string
}

export type TokenFeeds = {
  nodes: Array<TokenFeed>
  responseNodes: number
  totalNodes: number
}

const useTokenFeedsQuery = (): UseQueryResult<TokenFeeds> => {
  const { key } = useParams()

  return useQuery(
    ['TokenFeeds', key],
    () => {
      if (!key) {
        return undefined
      }

      return API.core.getTokenFeeds(key)
    }
  )
}

export default useTokenFeedsQuery
