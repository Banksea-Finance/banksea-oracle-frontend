import { BaseService, ServiceV2 } from '@/api/service'
import { AuthenticateRequest, CollectionAggregateHistoriesQuery, FreeFeedsCollectionQuery } from './types'

const API = {
  core: {
    getFeedNodes() {
      return BaseService.get('/collection/map/count')
    },
    getExecutingNodes() {
      return BaseService.get('/collection/map/flicker')
    },
  },
  v2: {
    FreeFeeds: {
      getFreeFeeds: (data?: FreeFeedsCollectionQuery) => {
        return ServiceV2.post('/collection/page', data)
      },
      getCollectionFreeFeedInfo: (symbol: string) => {
        return ServiceV2.post('/collection/info', { symbol })
      },
      getCollectionAggregateHistories({
        symbol,
        startTime = '0',
        endTime = (Date.now() / 1000).toFixed(0)
      }: CollectionAggregateHistoriesQuery) {
        return ServiceV2.post('/collection/aggregate', { symbol, startTime, endTime })
      },
      getCollectionFeedActivities({
        symbol,
        startTime = '0',
        endTime = (Date.now() / 1000).toFixed(0)
      }: CollectionAggregateHistoriesQuery) {
        return ServiceV2.post('/node/history ', { symbol, startTime, endTime })
      }
    },
    authentication: {
      tryAuthenticate: (data: AuthenticateRequest) => {
        return BaseService.post('/banksea/web/v1/activity/whitelist', data)
      }
    }

  }
}

export default API
