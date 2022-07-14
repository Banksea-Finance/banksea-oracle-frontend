import { BankseaApiPageQuery } from '@/api/service'

export type CollectionAggregateHistoriesQuery = {
  symbol?: string
  startTime?: string
  endTime?: string
}

export type FreeFeedsCollectionQuery = BankseaApiPageQuery & {
  search?: string
}
