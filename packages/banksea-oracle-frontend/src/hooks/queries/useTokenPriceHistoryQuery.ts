import { useQuery } from 'react-query'
import API from '@/api'
import { useParams } from 'react-router-dom'

const useTokenPriceHistoryQuery = () => {
  const { key } = useParams()

  return useQuery(
    ['TokenPriceHistory', key],
    () => {
      if (!key) {
        return undefined
      }

      return API.core.getTokenPriceHistory(key)
    }
  )
}

export default useTokenPriceHistoryQuery
