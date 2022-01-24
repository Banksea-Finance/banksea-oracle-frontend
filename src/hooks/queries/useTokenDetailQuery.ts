import { useQuery, UseQueryResult } from 'react-query'
import API from '@/api'
import { useParams } from 'react-router-dom'

export interface Attribute {
  trait_type: string
  value: string
  trait_count?: number
  rate?: number
}

export interface TokenDetail {
  name: any
  contractAddress: string
  asset: string
  chainSource: string
  answer: number
  imageUrl: any
  minRsp: number
  heartbeat: number
  latestUpdate: number
  attributes: Attribute[]
}

const useTokenDetailQuery = (): UseQueryResult<TokenDetail> => {
  const { key } = useParams()

  return useQuery(
    ['TokenDetail', key],
    () => {
      if (!key) return undefined

      return API.core.getTokenDetail(key)
    }
  )
}

export default useTokenDetailQuery
