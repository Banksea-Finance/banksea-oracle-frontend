import axios from 'axios'

export type BankseaApiPageQuery = {
  size?: number
  current?: number
}

export interface BankseaApiPageResult<T> {
  records: T[]
  total: number
  size: number
  current: number
  orders?: unknown[]
  optimizeCountSql?: boolean
  hitCount?: boolean
  searchCount?: boolean
  pages?: number
}

export type BankseaApiResponseBody<T> = {
  code: number
  data: T
  message: string
  success: boolean
}

function onFulfilled(config: any) {
  const { data: responseBody } = config

  if ('code' in responseBody) {
    const response = responseBody as BankseaApiResponseBody<any>

    if (+response.code === 200) {
      return response.data
    }

    return Promise.reject(response.message)
  }

  return Promise.reject(config.data)
}

function onRejected(error: any) {
  const responseData = error.response?.data

  if (!responseData) {
    return Promise.reject(error)
  }

  if ('message' in responseData) {
    return Promise.reject(responseData.message)
  }

  return Promise.reject(responseData)
}

export const API_HOST = process.env.REACT_APP_API_BASE

const BaseService = axios.create({
  baseURL: `${API_HOST}/`
})

BaseService.interceptors.response.use(
  onFulfilled, onRejected
)

const ServiceV2 = axios.create({
  baseURL: 'https://api.banksea.finance/api/web/v1/'
})

ServiceV2.interceptors.response.use(
  onFulfilled, onRejected
)

export { BaseService, ServiceV2 }
