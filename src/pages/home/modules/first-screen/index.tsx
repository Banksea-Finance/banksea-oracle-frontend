import React from 'react'
import { Button, Flex, Grid, Text, Image, Box } from '@banksea-finance/ui-kit'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { EthereumSvg, MoonbeamSvg, SolanaSvg } from '@/components/svgs'

const FirstScreenModuleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: max(calc(100vh - 100px), fit-content);
  position: relative;
  z-index: 1;
  min-height: 50vh;

  background: url(${require('@/assets/images/pages/home/fs-bg.png')}) 0 0 no-repeat;
  background-position-y: 80%;
  background-size: 100%;

  ${({ theme }) => theme.mediaQueries.maxXl} {
    background-position-y: 50%;
  }
`

export const FirstScreenModule: React.FC = () => {
  const breakPoint = 'lg'

  return (
    <FirstScreenModuleContainer>
      <Flex
        width={'min(1440px, 96vw)'}
        pt={'2%'}
        height={'fit-content'}
        flexDirection={{ [breakPoint]: 'row-reverse', _: 'column' }}
        ai={{ _: 'center' }}
        jc={{ [breakPoint]: 'space-between' }}
        position={'relative'}
      >
        <Image
          width={{ [breakPoint]: 'min(722px, 50vw)', _: '60vw' }}
          height={{ [breakPoint]: 'calc(3200 / 2889 * min(722px, 50vw))', _: 'calc(3200 / 2889 * 60vw)' }}
          placeholder={(width, height) => <Box width={width} height={height} />}
          zIndex={1}
          src={require('@/assets/images/pages/home/fs.webp')}
          style={{ userSelect: 'none' }}
        />

        <Image
          position={'absolute'}
          right={{ [breakPoint]: '-5%', _: '0' }}
          top={{ [breakPoint]: '20%', _: '10%' }}
          width={{ [breakPoint]: 'calc(min(722px, 50vw) * 1.2)', _: '90vw' }}
          height={{ [breakPoint]: 'calc(467 / 852 * min(722px, 50vw) * 1.2)', _: 'calc(467 / 852 * 90vw)' }}
          placeholder={(width, height) => <Box width={width} height={height} />}
          zIndex={1}
          src={require('@/assets/images/pages/home/dots.png')}
          style={{ userSelect: 'none' }}
        />

        <Flex
          flexDirection={'column'}
          ai={{ [breakPoint]: 'start', _: 'center' }}
          width={'90vw'}
          position={{ [breakPoint]: 'absolute', _: 'relative' }}
          left={'0'}
          zIndex={'11'}
        >
          <Text
            as={'span'}
            fontSize={{ [breakPoint]: 'min(75px, 4vw)', _: 'min(60px, 8vw)' }}
            important
            bold
            lineHeight={'1.5'}
            textAlign={{ [breakPoint]: 'start', _: 'center' }}
            width={'100%'}
          >
            {'The First '}
            <span className={'gradient'}>
              AI-Driven
            </span>
            <br />
            NFT Oracle
          </Text>

          <Text
            bold
            color={'rgb(222,221,227)'}
            mb={{ lg: '42px', _: '36px' }}
            mt={{ lg: '36px', _: '24px' }}
            fontSize={'min(24px, 5vw)'}
          >
            Objective, safe and real-time NFT valuation
          </Text>

          <Grid gridTemplateColumns={'repeat(2, 1fr)'} gap={'16px'} mb={{ lg: '100px', _: '48px' }}>
            <Button as={Link} autoScale to={'/oracle'} width={'min(170px, 30vw)'}>
              Oracle
            </Button>
            <Button as={Link} autoScale to={'/api'} width={'min(170px, 30vw)'} variant={'outlined'}>
              API
            </Button>
          </Grid>

          <Grid
            gap={'24px'}
            jc={'start'}
            ai={'center'}
            flexWrap={'wrap'}
            justifyItems={'center'}
            gridTemplateColumns={{ sm: 'repeat(3, max-content)', _: 'repeat(1, max-content)' }}
          >
            <SolanaSvg />
            <MoonbeamSvg />
            <EthereumSvg />
          </Grid>
        </Flex>
      </Flex>
    </FirstScreenModuleContainer>
  )
}
