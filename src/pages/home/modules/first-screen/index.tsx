import React from 'react'
import { Button, Flex, useScale } from '@banksea-finance/ui-kit'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FirstScreenModuleContainer = styled.div`
  --base-height: 41.6vw;

  background: url(${require('@/assets/images/pages/home/topscreen.webp')}) no-repeat;
  height: calc(var(--base-height) * 1.0);
  background-size: 100%;


  ${({ theme }) => theme.mediaQueries.maxXl} {
    height: calc(var(--base-height) * 1.2);
    background-size: 120%;
    background-position-x: 50%;
  }

  ${({ theme }) => theme.mediaQueries.maxLg} {
    height: calc(var(--base-height) * 1.6);
    background-size: 160%;
  }

  ${({ theme }) => theme.mediaQueries.maxMd} {
    height: calc(var(--base-height) * 1.8);
    background-size: 180%;
  }

  ${({ theme }) => theme.mediaQueries.maxSm} {
    height: calc(var(--base-height) * 2.3);
    background-size: 230%;
  }
  
  ${({ theme }) => theme.mediaQueries.maxXs} {
    height: 350px;
    background-size: 230%;
  }
`

export const FirstScreenModule: React.FC = () => {
  const scale = useScale()

  return (
    <FirstScreenModuleContainer>
      <Flex
        width={'100%'}
        height={'100%'}
        justifyContent={'center'}
        ai={'end'}
        pb={'1%'}
      >
        <Button as={Link} scale={scale} to={'/develop'}>
          Explorer
        </Button>
      </Flex>
    </FirstScreenModuleContainer>
  )
}
