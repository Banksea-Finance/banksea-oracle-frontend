import React from 'react'
import { ModuleTitle } from '@/components/module-title'
import { Box, Flex, Text } from '@banksea-finance/ui-kit'
import styled from 'styled-components'

const Container = styled(Box)`
  background-image: url("${require('@/assets/images/pages/develop/architecture-bg.webp')}");
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 52vw;

`

export const ArchitectureModule: React.FC = () => {
  return (
    <Container mb={{ lg: '96px', _: '48px' }}>
      <ModuleTitle>
        Architecture
      </ModuleTitle>

      <Text fontSize={'min(28px, 3.5vw)'} textAlign={'center'} mb={'32px'}>
        Powerful AI <span className="primary">Architecture</span> ensure highly
        reliable NFT valuation
      </Text>

      <Flex width={'100%'} jc={'center'}>
        <img style={{ width: '80%' }} src={require('@/assets/images/pages/develop/architecture.webp')} />
      </Flex>
    </Container>
  )
}
