import { BankseaApiPageQuery } from '@/api/service'

export type CollectionAggregateHistoriesQuery = {
  symbol?: string
  startTime?: string
  endTime?: string
}

type Order = 'ascend' | 'descend'
type Fields = 'nftName' | 'floorPrice' | 'aiFloorPrice' | 'avgPrice' | 'time'

export type FreeFeedsCollectionQuery = BankseaApiPageQuery & {
  search?: string
  orders?: Array<{ order: Order, field: Fields }>
}

export type AuthenticateRequest = {
  signatureBase64: string
  publicKey: string
  dataToSign: string
}
