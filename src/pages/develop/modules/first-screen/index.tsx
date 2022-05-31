import React from 'react'
import { Box, Button, Flex, Text, useScale } from '@banksea-finance/ui-kit'
import styled from 'styled-components'

const FirstScreenModuleContainer = styled(Box)`
  width: 100%;
  --base-height: 43.75vw;

  background: url(${require('@/assets/images/pages/develop/first-screen-bg-lg.webp')}) no-repeat;
  height: calc(var(--base-height) * 1.0);
  background-size: 100%;

  ${({ theme }) => theme.mediaQueries.maxLg} {
    margin-bottom: 48px;
    background-image: url(${require('@/assets/images/pages/develop/first-screen-bg-sm.webp')}), url(${require('@/assets/images/pages/develop/first-screen-bg-sm-2.webp')});
    height: 90vh;
    background-size: 80%, 200%;
    background-position: 50% 100%;
  }
`

export const FirstScreenModule: React.FC = () => {
  const scale = useScale()

  return (
    <FirstScreenModuleContainer pl={{ xl: '10%', _: '5%' }} pr={{ xl: 'none', _: '5%' }} pt={{ xl: '13%', _: '10vh' }}>
      <Box>
        <Text fontSize={'min(42px, 8vw)'} important letterSpacing={'4px'} maxWidth={{ xl: '800px', _: 'none' }} width={'100%'} textAlign={{ _: 'center', xl: 'start' }}>
          Provide Comprehensive NFT Financial <span className="primary">Service</span> Data
        </Text>
        <Flex gap={'32px'} mt={'32px'} jc={{ xl: 'start', _: 'center' }}>
          <Button scale={scale}>Explorer</Button>
          <Button scale={scale} variant={'outlined'}>Analysis</Button>
        </Flex>
      </Box>
    </FirstScreenModuleContainer>
  )
}
