import { Flex } from '@banksea-finance/ui-kit'
import { ArchitectureModule, ConsumersModule, FirstScreenModule } from './modules'
import React from 'react'
import { PageWrapper } from '@/components/page-wrapper'
import { CollectionsFeedsModule } from './components/collections-feeds-module'

export const DevelopPage: React.FC = () => {
  return (
    <Flex width={'100%'} ai={'center'} flexDirection={'column'}>
      <FirstScreenModule />
      <ArchitectureModule />
      {/*<DistributionModule />*/}
      <PageWrapper>
        <ConsumersModule />

        <Flex
          width={'100%'}
          jc={{ lg: 'space-between', }}
          flexDirection={{ lg: 'row', _: 'column' }}
          gap={{ _: '32px', lg: 'none' }}
          mb={{ lg: '96px', _: '48px' }}
        >
          <CollectionsFeedsModule type={'popular'} title={'Most Popular Feeds'} color={'#dc6e78'} />
          <CollectionsFeedsModule type={'recent'} title={'Latest Feeds'} color={'#329664'} />
        </Flex>
      </PageWrapper>
    </Flex>
  )
}
