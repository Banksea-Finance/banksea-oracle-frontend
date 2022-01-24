import { useQuery, UseQueryResult } from 'react-query'
import API from '@/api'

export interface NodeInfo {
  nodeName: string
  nodeImageUrl: string
  nftCollectionCount: number
  nftCollectionImageUrl: string[]
}

export interface FeedNode {
  mapX: number
  mapY: number
  nodeCount: number,
  nodeInfoList?: NodeInfo[]
}

const useFeedNodesQuery = (): UseQueryResult<Array<FeedNode>> => {
  return useQuery(
    ['FeedNodes'],
    () => {
      return API.core.getFeedNodes()
    }
  )
}

export default useFeedNodesQuery
