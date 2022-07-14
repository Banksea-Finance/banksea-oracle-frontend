import React from 'react'
import { Box, Button, Flex, Grid, Text, useScale } from '@banksea-finance/ui-kit'
import styled from 'styled-components'

const FirstScreenModuleContainer = styled(Box)`
  width: 100vw;
  height: 44.41vw;
  background-size: 100%;
  position: relative;
  padding-left: 10vw;

  ${({ theme }) => theme.mediaQueries.maxXl} {
    padding-left: 0;
    height:  fit-content;
    padding-bottom: 48px;
  }
  
  ${({ theme }) => theme.mediaQueries.maxLg} {
    margin-bottom: 48px;
    background-size: 80%, 200%;
    background-position: 50% 100%;
  }
`

const Image = styled.img`
  width: 80vw;
  position: absolute;
  right: 0;
  top: 10%;
  z-index: -1;

  ${({ theme }) => theme.mediaQueries.maxXl} {
    position: relative;
    width: 150%;
    right: 40%;
    top: initial;
    bottom: 100%;
    
    margin-bottom: -15%;
  }

  ${({ theme }) => theme.mediaQueries.maxMd} {
    width: 200%;
    right: 78%;
  }
`

const Title: React.FC = () => {
  const CommonText = ({ children }: any) => (
    <Text
      as={'span'}
      fontSize={{ xl: 'min(50px, 3.33vw)', _: 'min(50px, 5.0vw)' }}
      important
      bold
      lineHeight={'1'}
      textAlign={{ xl: 'start', _: 'center' }}
    >
      {children}
    </Text>
  )

  return (
    <Grid
      zIndex={22}
      gridTemplateColumns={{ xl: 'max-content', _: '100%' }}
      justifyItems={{ _: 'center', xl: 'flex-start' }}
      width={'100%'}
    >
      <CommonText>Provide Comprehensive NFT</CommonText>
      <Flex ai={'center'} gap={{ xl: 'min(25px, 1.7vw)', _: 'min(25px, 2.5vw)' }}>
        <CommonText>Financial</CommonText>
        <Text
          as={'span'}
          gradient
          fontSize={{ xl: 'min(60px, 4vw)', _: 'min(60px, 7.5vw)' }}
          important
          bold
        >
          Service Data
        </Text>
      </Flex>
    </Grid>
  )
}

export const FirstScreenModule: React.FC = () => {
  const scale = useScale()

  return (
    <FirstScreenModuleContainer>
      <Image src={require('@/assets/images/pages/develop/fs.png')} />

      <Flex
        width={'min(2000px, 96vw)'}
        ai={{ xl: 'center', _: 'center' }}
        jc={{ xl: 'flex-start', _: 'center' }}
        height={{ xl: '100%', _: 'fit-content' }}
      >
        <Box>
          <Title />

          <Flex gap={'32px'} mt={'32px'} jc={{ xl: 'start', _: 'center' }}>
            <Button scale={scale}>Explorer</Button>
            <Button scale={scale} variant={'outlined'}>Analysis</Button>
          </Flex>
        </Box>
      </Flex>
    </FirstScreenModuleContainer>
  )
}
