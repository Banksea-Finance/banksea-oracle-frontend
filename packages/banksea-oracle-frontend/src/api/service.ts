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
  orders: unknown[]
  optimizeCountSql: boolean
  hitCount: boolean
  searchCount: boolean
  pages: number
}

export type BankseaApiResponseBody<T> = {
  code: number
  data: T
  message: string
  success: boolean
}

function onFulfilled(config: any) {
  const { data: responseBody } = config

  if (responseBody.code) {
    if (+responseBody.code === 200) {
      return responseBody.data
    }
    return Promise.reject(responseBody.message)
  }

  return config.data
}

function onRejected(error: any) {
  const responseData = error.response?.data

  if (!responseData) {
    return Promise.reject(error)
  }

  const { message, code } = responseData

  if (message && code) {
    return Promise.reject(message)
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

export { Service }
