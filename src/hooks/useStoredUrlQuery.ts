import { useLocation } from 'react-router'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useStoredUrlQuery = (obj?: Record<string, any>) => {
  const navigate = useNavigate()
  const { pathname, search } = useLocation()

  useEffect(() => {
    const searchParams = new URLSearchParams(search)

    if (obj) {
      Object.entries(obj).forEach(([key, value]) => {
        searchParams.set(key, value.toString())
      })

      navigate(`${pathname}?${searchParams.toString()}`, { replace: true })
    }
  }, [pathname, JSON.stringify(obj), search])
}
