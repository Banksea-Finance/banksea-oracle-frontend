import { API_HOST, BankseaApiPageQuery, Service, ServiceV2 } from '@/api/service'
import { TokensOfCollectionQuery } from '@/hooks/queries/useTokensOfCollectionQuery'
import { CollectionFeedFilterType } from '@/hooks/queries/useCollectionFeedsQuery'
import { CollectionTokensQuery } from '@/hooks/queries/useCollectionTokensQuery'
import axios from 'axios'
import { CollectionAggregateHistoriesQuery, FreeFeedsCollectionQuery } from './types'

const API = {
  core: {
    getSummaryData() {
      return Service.get('/summary/data')
    },
    getCollectionFeeds(query: BankseaApiPageQuery, type: CollectionFeedFilterType) {
      return Service.post(`/collection/${type}/page`, query)
    },
    getTokensOfCollection(query: TokensOfCollectionQuery) {
      return Service.post('/nft/page', query)
    },
    getTokenFeeds(asset: string) {
      return Service.post('/node/latest', { asset })
    },
    getFeedNodes() {
      return Service.get('/collection/map/count')
    },
    getExecutingNodes() {
      return Service.get('/collection/map/flicker')
    },
    getTokenPriceHistory(asset: string) {
      return Service.post('/nft/price/history', { asset })
    },
    getTokenDetail(asset: string) {
      return Service.post('/nft/detail', { asset })
    },
    getCollectionInfo(slug: string) {
      return Service.post('/collection/info', { slug })
    },
    getTokens(data: CollectionTokensQuery){
      const { order, ...rest  } = data
      return axios.post(`${API_HOST}/analysis/web/v1/nft/search`, {
        ...rest, orders: [JSON.parse(order || '{}')]
      }, {
        headers: {
          'request-timestamp': Date.now().toString()
        }
      })
    }
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
    }

  }
}

export default API
