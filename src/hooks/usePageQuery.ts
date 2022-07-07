import { useCallback, useState } from 'react'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'

type PageQueryOpts = {
  keepInSearch?: boolean
}

const usePageQuery = (defaultState?: {current?: number, size?: number}, opts?: PageQueryOpts) => {
  const { keepInSearch } = opts || {}
  const searchParams = new URLSearchParams(useLocation().search)

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [current, setCurrent] = useState<number>(Number(searchParams.get('p') || defaultState?.current || 1))
  const [size, setSize] = useState<number>(Number(searchParams.get('s') || defaultState?.size || 10))

  const handleChange = useCallback(
    (page: number, pageSize?: number) => {
      setCurrent(page)
      pageSize && setSize(pageSize)

      if (keepInSearch) {
        searchParams.set('p', `${page}`)
        pageSize && searchParams.set('s', `${pageSize}`)

        navigate(`${pathname}?${searchParams.toString()}`, { replace: true })
      }
    },
    [pathname, searchParams, keepInSearch]
  )

  return {
    current,
    size,
    handleChange
  }

}

export default usePageQuery
