import { useState } from 'react'
import { useLocationQuery } from '@/hooks/useLocationQuery'

const usePageQuery = (defaultState?: {current?: number, size?: number}) => {
  const [current, setCurrent] = useState<number>(Number(useLocationQuery('current') || defaultState?.current || 1))
  const [size, setSize] = useState<number>(Number(useLocationQuery('size') || defaultState?.size || 10))

  const handleChange = (page: number, pageSize?: number) => {
    setCurrent(page)
    pageSize && setSize(pageSize)
  }

  return {
    current,
    size,
    handleChange
  }

}

export default usePageQuery
