import { PageWrapper } from '@/components/page-wrapper'
import React, { useState } from 'react'
import { Box, ButtonMenu, Flex, Text } from '@banksea-finance/ui-kit'
import { OverviewModule } from './modules'

export const AnalyticsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | undefined>('overview')

  return (
    <PageWrapper>
      <Box width={'100%'} pt={{ lg: '72px' }}>
        <Flex ai={'center'} mb={{ lg: '48px' }}>
          <Text gradient important bold fontSize={'min(46px, 8vw)'}>Market Analytics</Text>
        </Flex>

        <ButtonMenu activeKey={activeTab} onItemClick={({ key }) => setActiveTab(key)} scale={'L'} mb={{ lg: '16px' }}>
          <ButtonMenu.Item itemKey={'overview'}>
            Overview
          </ButtonMenu.Item>
          <ButtonMenu.Item itemKey={'collections'}>
            Collections
          </ButtonMenu.Item>
        </ButtonMenu>

        <OverviewModule />
      </Box>
    </PageWrapper>
  )
}
