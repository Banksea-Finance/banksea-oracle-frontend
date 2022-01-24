import { useQuery, UseQueryResult } from 'react-query'
import API from '@/api'
import { FeedNode } from '@/hooks/queries/useFeedNodesQuery'

const useExecutingNodeQuery = (): UseQueryResult<FeedNode> => {
  return useQuery(
    ['ExecutingNodes'],
    () => {
      return API.core.getExecutingNodes()
    },
    {
      refetchInterval: 1500
    }
  )
}

export default useExecutingNodeQuery
