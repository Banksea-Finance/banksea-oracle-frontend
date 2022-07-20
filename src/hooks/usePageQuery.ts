import { useCallback, useState } from 'react'
import { useStoredUrlQuery } from '@/hooks/useStoredUrlQuery'
import { useLocationQuery } from '@/hooks/useLocationQuery'

type PageQueryOpts = {
  keepInSearch?: boolean
}

const usePageQuery = (defaultState?: {current?: number, size?: number}, opts?: PageQueryOpts) => {
  const [current, setCurrent] = useState<number>(Number(useLocationQuery('current') || defaultState?.current || 1))
  const [size, setSize] = useState<number>(Number(useLocationQuery('size') || defaultState?.size || 10))

  useStoredUrlQuery(opts?.keepInSearch ? { current, size } : undefined)

  const handleChange = useCallback(
    (page: number, pageSize?: number) => {
      setCurrent(page)
      pageSize && setSize(pageSize)
    },
    []
  )

  return {
    current,
    size,
    handleChange
  }

}

export default usePageQuery
