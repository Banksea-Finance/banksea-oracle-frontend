import { Flex, Grid } from '@banksea-finance/ui-kit'
import { ArchitectureModule, ConsumersModule, FirstScreenModule } from './modules'
import React from 'react'
import { PageWrapper } from '@/components/page-wrapper'

export const OracleHomePage: React.FC = () => {
  return (
    <Flex width={'100%'} ai={'center'} flexDirection={'column'}>
      <FirstScreenModule />

      <PageWrapper>
        <Grid width={'100%'} gap={{ xl: '96px', _: '48px' }} gridTemplateColumns={'100%'}>
          <ConsumersModule />
          <ArchitectureModule />
        </Grid>
      </PageWrapper>
    </Flex>
  )
}
