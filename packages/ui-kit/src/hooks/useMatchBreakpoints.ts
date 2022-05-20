import { useEffect, useState } from 'react'
import { breakpointMap } from '../configs/base'
import { MediaQueries } from '../types'

type MatchBreakpoints = {
  [key in keyof MediaQueries as `is${Capitalize<key>}`]: boolean;
};

const mediaQueries: MediaQueries = (() => {
  let prevMinWidth = 0

  return Object.keys(breakpointMap).reduce((result, size, index) => {
    if (index === Object.keys(breakpointMap).length - 1) {
      return { ...result, [size]: `(min-width: ${prevMinWidth}px)` }
    }

    const minWidth = prevMinWidth
    const breakpoint = breakpointMap[size]

    // Min width for next iteration
    prevMinWidth = breakpoint + 1

    return { ...result, [size]: `(min-width: ${minWidth}px) and (max-width: ${breakpoint}px)` }
  }, {}) as MediaQueries
})()

const getKey = (size: string) => `is${size.charAt(0).toUpperCase()}${size.slice(1)}`

const useMatchBreakpoints = (): MatchBreakpoints => {
  const [state, setState] = useState<MatchBreakpoints>(() => {
    return Object.keys(mediaQueries).reduce((result, size) => {
      const key = getKey(size)
      const mql = window.matchMedia(mediaQueries[size as keyof MediaQueries])
      return { ...result, [key]: mql.matches }
    }, {}) as MatchBreakpoints
  })

  useEffect(() => {
    // Create listeners for each media query returning a function to unsubscribe
    const handlers = Object.keys(mediaQueries).map(size => {
      const mql = window.matchMedia(mediaQueries[size as keyof MediaQueries])

      const handler = (matchMediaQuery: MediaQueryListEvent) => {
        const key = getKey(size)
        setState(prevState => ({
          ...prevState,
          [key]: matchMediaQuery.matches,
        }))
      }

      // Safari < 14 fix
      if (mql.addEventListener) {
        mql.addEventListener('change', handler)
      }

      return () => {
        // Safari < 14 fix
        if (mql.removeEventListener) {
          mql.removeEventListener('change', handler)
        }
      }
    })

    return () => {
      handlers.forEach(unsubscribe => {
        unsubscribe()
      })
    }
  }, [setState])

  return state
}

export default useMatchBreakpoints
