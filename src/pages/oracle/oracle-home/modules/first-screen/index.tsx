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
  
  ${({ theme }) => theme.mediaQueries.maxLg} {
    position: relative;
    margin-bottom: 48px;
    background-size: 80%, 200%;
    background-position: 50% 100%;

    padding-left: 0;
    height: fit-content;
    padding-bottom: 48px;
  }
`

const Image = styled.img`
  width: min(1800px, 80vw);
  position: absolute;
  right: 0;
  z-index: -1;

  ${({ theme }) => theme.mediaQueries.maxLg} {
    position: relative;
    
    width: 150%;
    right: 40%;
    
    margin-top: -20%;
    margin-bottom: -15%;
  }

  ${({ theme }) => theme.mediaQueries.maxMd} {
    width: 200%;
    right: 78%;
  }
`

const Title: React.FC = () => {
  const breakPoint = 'lg'

  const CommonText = ({ children }: any) => (
    <Text
      as={'span'}
      fontSize={{ [breakPoint]: 'min(50px, 2.90vw)', _: 'min(50px, 5.0vw)' }}
      important
      bold
      lineHeight={'1.5'}
      textAlign={{ [breakPoint]: 'start', _: 'center' }}
    >
      {children}
    </Text>
  )

  return (
    <Grid
      zIndex={22}
      gridTemplateColumns={{ [breakPoint]: 'max-content', _: '100%' }}
      justifyItems={{ [breakPoint]: 'flex-start', _: 'center' }}
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
  const breakPoint = 'lg'

  return (
    <FirstScreenModuleContainer>
      <Image src={require('@/assets/images/pages/oracle-home/fs.webp')} />

      <Flex
        width={'min(1800px, 96vw)'}
        ai={{ [breakPoint]: 'center', _: 'center' }}
        jc={{ [breakPoint]: 'flex-start', _: 'center' }}
        height={{ [breakPoint]: '100%', _: 'fit-content' }}
      >
        <Box>
          <Title />

          <Flex mt={{ [breakPoint]: '32px', _: '16px' }} jc={{ [breakPoint]: 'start', _: 'center' }}>
            <Button scale={scale} as={Link} to={FREE_FEEDS_PAGE_PATH}>Free Feeds</Button>
          </Flex>
        </Box>
      </Flex>
    </FirstScreenModuleContainer>
  )
}
