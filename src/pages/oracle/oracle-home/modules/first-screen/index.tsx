import React from 'react'
import { Box, Button, Flex, Grid, Text, useScale } from '@banksea-finance/ui-kit'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FREE_FEEDS_PAGE_PATH } from '@/pages/oracle/free-feeds'

const FirstScreenModuleContainer = styled(Box)`
  width: 100vw;
  height: 44.41vw;
  background-size: 100%;
  position: relative;
  padding-left: 10vw;
  
  ${({ theme }) => theme.mediaQueries.minXl} {
    display: flex;
    justify-content: center;
  }
  
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
  width: min(1800px, 80vw);
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
      fontSize={{ xl: 'min(50px, 3.03vw)', _: 'min(50px, 5.0vw)' }}
      important
      bold
      lineHeight={'1.5'}
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
      <CommonText>
        <span className="gradient">
          {'Analysis Service '}
        </span>
        <span>
          On-chain
        </span>
      </CommonText>
    </Grid>
  )
}

export const FirstScreenModule: React.FC = () => {
  const scale = useScale()

  return (
    <FirstScreenModuleContainer>
      <Image src={require('@/assets/images/pages/oracle-home/fs.webp')} />

      <Flex
        width={'min(1800px, 96vw)'}
        ai={{ xl: 'center', _: 'center' }}
        jc={{ xl: 'flex-start', _: 'center' }}
        height={{ xl: '100%', _: 'fit-content' }}
      >
        <Box>
          <Title />

          <Flex mt={'32px'} jc={{ xl: 'start', _: 'center' }}>
            <Button scale={scale} as={Link} to={FREE_FEEDS_PAGE_PATH}>Free Feeds</Button>
          </Flex>
        </Box>
      </Flex>
    </FirstScreenModuleContainer>
  )
}
