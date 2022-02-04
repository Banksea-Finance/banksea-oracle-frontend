import { useQuery, UseQueryResult } from 'react-query'
import API from '@/api'
import { BankseaApiPageQuery, BankseaApiPageResult } from '@/api/service'
import { useParams } from 'react-router-dom'

export interface CollectionTokensQuery extends BankseaApiPageQuery {
  slug?: string
  search?: string
  order?: string
}

export interface TokenOverview {
  assetPublicKey: string
  nftTokenName: string
  imageUrl: string
  price: number
  view: number
}

const useCollectionTokensQuery = (query: CollectionTokensQuery): UseQueryResult<BankseaApiPageResult<TokenOverview>> => {
  const { slug } = useParams()

  return useQuery(
    ['CollectionTokens', query, slug],
    () => {
      if (!slug) return undefined

      return API.core.getTokens({ ...query, slug }).then(r => r.data.data)
    },
    {
      refetchOnWindowFocus: false
    }
  )
}

export default useCollectionTokensQuery
