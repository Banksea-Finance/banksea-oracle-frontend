import { useQuery, UseQueryResult } from 'react-query'
import API from '@/api'

export interface SummaryData {
  totalValuation: number
  support: number
  dataNum: number
  nodeCnt: number
}

const useSummaryQuery = (): UseQueryResult<SummaryData> => {
  return useQuery(
    ['Summary'],
    () => {
      return API.core.getSummaryData()
    },
    {
      refetchInterval: 1000
    }
  )
}

export default useSummaryQuery
