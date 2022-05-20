import useMatchBreakpoints from './useMatchBreakpoints'
import { useMemo } from 'react'

const useResponsive = () => {
  const { isXs, isSm } = useMatchBreakpoints()

  const isMobile = useMemo(() => isXs || isSm, [isXs, isSm])
  const isDesktop = useMemo(() => !isMobile, [isMobile])

  return {
    isDesktop,
    isMobile
  }
}

export default useResponsive
