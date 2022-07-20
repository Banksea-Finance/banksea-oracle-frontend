import React from 'react'
import { Button, Flex, Grid, Text } from '@banksea-finance/ui-kit'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { EthereumSvg, PolkadotSvg, SolanaSvg } from '@/components/svgs'

const FirstScreenModuleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: max(calc(100vh - 100px), fit-content);
  position: relative;
  z-index: 1;

  background: url(${require('@/assets/images/pages/home/fs-bg.png')}) 0 0 no-repeat;
  background-position-y: 80%;
  background-size: 100%;

  ${({ theme }) => theme.mediaQueries.maxXl} {
    background-position-y: 50%;
  }
`

const Image = styled.img`
  width: min(722px, 50vw);
  z-index: 1;

  ${({ theme }) => theme.mediaQueries.maxXl} {
    width: 60vw;
  }
`

export const FirstScreenModule: React.FC = () => {
  return (
    <FirstScreenModuleContainer>
      <Flex
        width={'min(1440px, 96vw)'}
        pt={'2%'}
        height={'fit-content'}
        flexDirection={{ xl: 'row-reverse', _: 'column' }}
        ai={{ _: 'center' }}
        jc={{ xl: 'space-between' }}
        position={'relative'}
      >
        <Image src={require('@/assets/images/pages/home/fs.png')} alt="" />

        <Flex
          flexDirection={'column'}
          ai={{ xl: 'start', _: 'center' }}
          width={'90vw'}
          position={{ xl: 'absolute', _: 'relative' }}
          left={'0'}
          zIndex={'11'}
        >
          <Text
            as={'span'}
            fontSize={{ xl: 'min(75px, 4vw)', _: 'min(60px, 8vw)' }}
            important
            bold
            lineHeight={'1.5'}
            textAlign={{ xl: 'start', _: 'center' }}
            width={'100%'}
          >
            {'The First '}
            <span className={'gradient'}>
              AI-Driven
            </span>
            <br />
            NFT Oracle
          </Text>

          <Text color={'disabled'} mb={{ lg: '42px', _: '36px' }} mt={{ lg: '36px', _: '24px' }}>
            Objective, safe and real-time NFT valuation
          </Text>

          <Flex gap={'16px'} mb={{ lg: '100px', _: '48px' }}>
            <Button as={Link} autoScale to={'/develop'} width={'min(170px, 30vw)'}>
              Oracle
            </Button>
            <Button as={Link} autoScale to={'/develop'} width={'min(170px, 30vw)'} variant={'outlined'}>
              API
            </Button>
          </Flex>

          <Grid
            gap={'16px'}
            jc={'start'}
            ai={'center'}
            flexWrap={'wrap'}
            justifyItems={'center'}
            gridTemplateColumns={{ md: 'repeat(4, max-content)', _: 'repeat(2, max-content)' }}
          >
            <PolkadotSvg />
            <SolanaSvg />
            <EthereumSvg />
          </Grid>
        </Flex>
      </Flex>


    </FirstScreenModuleContainer>
  )
}
