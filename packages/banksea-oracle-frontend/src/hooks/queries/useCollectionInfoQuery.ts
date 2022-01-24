import { useQuery, UseQueryResult } from 'react-query'
import API from '@/api'
import { useParams } from 'react-router'

export interface CollectionInformation {
  bannerImageUrl: string
  description: string
  slugSymbol: string
  nftName: string
  announceNumber: number
  valuation?: number

  chainSource: string
  totalSupply: number
}

const useCollectionInfoQuery = (): UseQueryResult<CollectionInformation | null> => {
  const { slug } = useParams()

  return useQuery(
    ['CollectionDetail', slug],
    () => {
      if (!slug) {
        return null
      }

      return API.core.getCollectionInfo(slug)
    }
  )
}

export default useCollectionInfoQuery
