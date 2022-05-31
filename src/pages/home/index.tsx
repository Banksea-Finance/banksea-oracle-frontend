import React from 'react'
import {
  FeaturesModule,
  FirstScreenModule,
  InvestorsModule,
  NewsModule,
  PartnershipsModule,
  StatisticModule,
  UseCasesModule
} from './modules'

import { Box, Flex, Grid } from '@banksea-finance/ui-kit'
import { PageWrapper } from '@/components/page-wrapper'

export const HomePage: React.FC = () => {
  return (
    <Box width={'100%'}>
      <Box height={'fit-content'} background={'#050F1E'} width={'100%'}>
        <FirstScreenModule />
        <Flex width={'100%'} jc={'center'} pt={'6vw'} pb={{ xl: '', lg: '130px', md: '100px', sm: '80px', _: '60px' }}>
          <img src={require('@/assets/images/pages/home/powered-by.png')} style={{ maxWidth: '1100px', width: '90%' }} alt="" />
        </Flex>
      </Box>
      <Flex
        width={'100%'}
        flexDirection={'column'}
        ai={'center'}
        py={'128px'}
        px={{ xl: '128px', sm: '5%' }}
        style={{ boxShadow: 'rgb(120 100 230 / 50%) 0px 130px 90px -90px inset' }}
      >
        <PageWrapper>
          <Box position={'relative'} height={'0'} bottom={{ xl: '220px', lg: '180px', md: '190px', sm: '180px', xs: '160px', _: '160px' }} width={'100%'}>
            <StatisticModule />
          </Box>
          <Grid width={'100%'} gridGap={'128px'}>
            <FeaturesModule />
            <UseCasesModule />
            <PartnershipsModule />
            <InvestorsModule />
            <NewsModule />
          </Grid>
        </PageWrapper>
      </Flex>
    </Box>
  )
}
