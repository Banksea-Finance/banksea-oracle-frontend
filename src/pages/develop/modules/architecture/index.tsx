import React from 'react'
import { ModuleTitle } from '@/components/module-title'
import { Box, Flex, Text } from '@banksea-finance/ui-kit'
import styled from 'styled-components'

const Container = styled(Box)`
  background-image: url("${require('@/assets/images/pages/develop/architecture-bg.webp')}");
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
`

const ImageContainer = styled.div`
  --mobile-image-height: 80vw;
  --mobile-image-width: calc(var(--mobile-image-height) * 2.529);

  img {
    width: 100%;
  }
  
  ${({ theme }) => theme.mediaQueries.maxLg} {
    display: flex;
    justify-content: center;
    
    height: var(--mobile-image-width);
    width: var(--mobile-image-height);
    
    img {
      transform: rotate(90deg);
      transform-origin: 50% 50%;
      
      height: var(--mobile-image-height);
      width: var(--mobile-image-width);
      
      position: relative;
      top: calc((var(--mobile-image-width) - var(--mobile-image-height)) / 2);
    }
  }
`

export const ArchitectureModule: React.FC = () => {
  return (
    <Container mb={{ lg: '96px', _: '48px' }}>
      <ModuleTitle>
        Architecture
      </ModuleTitle>

      <Text fontSize={'min(28px, 3.5vw)'} textAlign={'center'} mb={'32px'}>
        Powerful AI
        <span className="gradient"> Architecture </span>
        Ensure Highly Reliable NFT Valuation
      </Text>

      <Flex width={'100%'} jc={'center'}>
        <ImageContainer>
          <img src={require('@/assets/images/pages/develop/architecture.webp')} />
        </ImageContainer>
      </Flex>
    </Container>
  )
}
