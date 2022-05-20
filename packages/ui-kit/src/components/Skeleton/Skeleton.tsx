import React from 'react'
import styled, { keyframes } from 'styled-components'
import { border, layout, space } from 'styled-system'
import { animation as ANIMATION, SkeletonProps } from './types'

const waves = keyframes`
  from {
    left: -150px;
  }
  
  to {
    left: 100%;
  }
`

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  
  50% {
    opacity: 0.4;
  }
  
  100% {
    opacity: 1;
  }
`

const Root = styled.div<SkeletonProps>`
  min-height: 20px;
  display: block;
  background-color: ${({ theme }) => theme.colors.backgroundDisabled};

  ${layout}
  ${space}
  ${border}
`

const Pulse = styled(Root)`
  animation: ${pulse} 2s infinite ease-out;
  transform: translate3d(0, 0, 0);
`

const Waves = styled(Root)`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &:before {
    content: '';
    position: absolute;
    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);
    top: 0;
    left: -150px;
    height: 100%;
    width: 150px;
    animation: ${waves} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`

const Skeleton: React.FC<SkeletonProps> = ({ animation = ANIMATION.PULSE, ...props }) => {
  if (animation === ANIMATION.WAVES) {
    return <Waves {...props} />
  }

  return <Pulse {...props} />
}

export default Skeleton
