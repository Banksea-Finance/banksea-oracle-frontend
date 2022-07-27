import React from 'react'
import {
  FeaturesModule,
  FirstScreenModule, InvestorsModule, NewsModule, PartnershipsModule, UseCasesModule
} from './modules'

import { Box, Flex, Grid } from '@banksea-finance/ui-kit'

export const HomePage: React.FC = () => {
  return (
    <Box width={'100%'}>
      <Box height={'fit-content'} background={'#050F1E'} width={'100%'}>
        <FirstScreenModule />
      </Box>
      <Flex
        width={'100vw'}
        flexDirection={'column'}
        ai={'center'}
        py={'128px'}
        px={{ xl: '128px', sm: '5%' }}
      >
        <Grid
          width={'min(1440px, 96vw)'}
          gap={'128px'}
          position={'relative'}
          zIndex={2}
        >
          <FeaturesModule />
          <UseCasesModule />
          <PartnershipsModule />
          <InvestorsModule />
          <NewsModule />
        </Grid>
      </Flex>
    </Box>
  )
}
