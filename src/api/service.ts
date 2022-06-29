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

const Service = axios.create({
  baseURL: `${API_HOST}/analysis/web/v1/`
})

Service.interceptors.response.use(
  onFulfilled, onRejected
)

const ServiceV2 = axios.create({
  baseURL: 'http://119.45.201.48:25580/api/web/v1/'
})

ServiceV2.interceptors.response.use(
  onFulfilled, onRejected
)

export { Service, ServiceV2 }
