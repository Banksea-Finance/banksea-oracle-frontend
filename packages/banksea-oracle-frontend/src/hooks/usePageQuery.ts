import { useCallback, useState } from 'react'

const usePageQuery = (defaultState?: {current?: number, size?: number}) => {
  const [current, setCurrent] = useState(defaultState?.current || 1)
  const [size, setSize] = useState(defaultState?.size || 10)

  const handleChange = useCallback(
    (page: number, pageSize?: number) => {
      setCurrent(page)
      pageSize && setSize(pageSize)
    },
    [],
  )

  return {
    current,
    size,
    handleChange
  }

}

export default usePageQuery
