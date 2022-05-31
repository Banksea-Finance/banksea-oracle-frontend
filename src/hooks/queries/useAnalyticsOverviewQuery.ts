import { useQuery } from 'react-query'

export type AnalyticsOverviewKeys =
  | 'popularity'
  | 'valuation'
  | 'collections'
  | 'marketCap'
  | 'volume'
  | 'holders'

export type AnalyticsOverview = Record<AnalyticsOverviewKeys, { value: number, float: number }>

export const useAnalyticsOverviewQuery = () => {
  return useQuery<AnalyticsOverview>(
    ['ANALYTICS_OVERVIEW'],
    () => {
      return {
        popularity: {
          value: Math.random() * 1e7,
          float: Math.random() * 2 - 1
        },
        valuation: {
          value: Math.random() * 1e7,
          float: Math.random() * 2 - 1
        },
        collections: {
          value: Math.random() * 1e7,
          float: Math.random() * 2 - 1
        },
        marketCap: {
          value: Math.random() * 1e7,
          float: Math.random() * 2 - 1
        },
        volume: {
          value: Math.random() * 1e7,
          float: Math.random() * 2 - 1
        },
        holders: {
          value: Math.random() * 1e7,
          float: Math.random() * 2 - 1
        },
      }
    }
  )
}
