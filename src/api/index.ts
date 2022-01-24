import { BankseaApiPageQuery, BankseaApiPageResult, Service } from '@/api/service'
import { TokensOfCollectionQuery } from '@/hooks/queries/useTokensOfCollectionQuery'
import { CollectionFeedFilterType } from '@/hooks/queries/useCollectionFeedsQuery'
import { CollectionTokensQuery, TokenOverview } from '@/hooks/queries/useCollectionTokensQuery'

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
    getTokens(data: CollectionTokensQuery): Promise<BankseaApiPageResult<TokenOverview>> {
      const { order, ...rest  } = data
      return Service.post('/nft/search', { ...rest, orders: [JSON.parse(order || '{}')] }) as any
    }
  }
}

export default API
