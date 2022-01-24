import { useQuery, UseQueryResult } from 'react-query'
import API from '@/api'
import { BankseaApiPageQuery, BankseaApiPageResult } from '@/api/service'

export interface TokensOfCollectionQuery extends BankseaApiPageQuery {
  slug?: string
}

const useTokensOfCollectionQuery = (query?: TokensOfCollectionQuery): UseQueryResult<BankseaApiPageResult<any>> => {
  return useQuery(
    ['TokensOfCollection', query],
    () => {
      if (!query?.slug) {
        return undefined
      }

      return API.core.getTokensOfCollection(query)
    }
  )
}

export default useTokensOfCollectionQuery
