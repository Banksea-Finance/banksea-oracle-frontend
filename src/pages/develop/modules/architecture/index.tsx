import React from 'react'
import { ModuleTitle } from '@/components/module-title'
import { Box, Flex, Text, useResponsive } from '@banksea-finance/ui-kit'
import styled from 'styled-components'

const Container = styled(Box)`
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
`

export const ArchitectureModule: React.FC = () => {
  const { isDesktop } = useResponsive()

  return (
    <Container mb={{ lg: '96px', _: '48px' }}>
      <ModuleTitle>
        Architecture
      </ModuleTitle>

      <Text fontSize={'min(28px, 3.5vw)'} textAlign={'center'} mb={'32px'}>
        Powerful
        <b className="gradient"> Architecture </b>
        Ensure Highly Reliable NFT Valuation
      </Text>

      <Flex width={'100%'} jc={'center'}>
        <ImageContainer>
          <img src={isDesktop ? require('@/assets/images/pages/develop/architecture.webp') : require('@/assets/images/pages/develop/architecture-sm.webp')} />
        </ImageContainer>
      </Flex>
    </Container>
  )
}
