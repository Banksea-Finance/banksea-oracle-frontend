import useMatchBreakpoints from '@/libs/uikit/hooks/useMatchBreakpoints'
import { useMemo } from 'react'

const useResponsive = () => {
  const { isXl } = useMatchBreakpoints()

  const isDesktop = useMemo(() => isXl , [isXl])
  const isMobile = useMemo(() => !isDesktop, [isDesktop])

  return {
    isDesktop,
    isMobile
  }
}

export default useResponsive
