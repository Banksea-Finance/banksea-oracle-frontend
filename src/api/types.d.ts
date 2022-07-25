import { BankseaApiPageQuery } from '@/api/service'

export type CollectionAggregateHistoriesQuery = {
  symbol?: string
  startTime?: string
  endTime?: string
}

type Order = 'ascend' | 'descend'
type Fields = 'nftName' | 'floorPrice' | 'aiFloorPrice' | 'avgPrice' | 'time'

export type FreeFeedsCollectionQueryOrder = { order: Order, field: Fields }

export type FreeFeedsCollectionQuery = BankseaApiPageQuery & {
  search?: string
  orders?: Array<FreeFeedsCollectionQueryOrder>
}

export type AuthenticateRequest = {
  signatureBase64: string
  publicKey: string
  dataToSign: string
}
