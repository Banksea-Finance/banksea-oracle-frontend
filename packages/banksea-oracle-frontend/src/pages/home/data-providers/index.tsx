import React from 'react'
import {
  ContentContainer,
  DataProvidersModuleContainer,
  MainContainer,
  ToButton
} from '@/pages/home/data-providers/index.style'

import toIcon from '@/images/icon/toIcon.svg'
import arrow from '@/images/icon/arrow.svg'
import documentImg from '../../../images/document/documentImg.png'
import { PageWrapper, Text } from '@/libs/uikit/components'
import { useResponsive } from '@/libs/uikit'
import Flex from '@react-css/flex'
import ModuleTitle from '@/components/module-title'

const DataProvidersModule: React.FC = () => {
  const { isMobile } = useResponsive()

  return (
    <DataProvidersModuleContainer>
      <PageWrapper>
        <ModuleTitle>
          Data providers
        </ModuleTitle>

        <MainContainer>
          <ContentContainer>
            <Text fontSize={'20px'} bold textAlign={isMobile ? 'center' : 'start'}>
              Provide comprehensive NFT<br />
              financial service data.
            </Text>
            <ToButton href={'https://banksea-finance.gitbook.io/oracle/data-providers/running-node'} target={'_blank'} rel={'noreferrer'}>
              <img src={toIcon} />
              <span>Get started</span>
              <img src={arrow} />
            </ToButton>
          </ContentContainer>
          <Flex.Item flex={7}>
            <img className="documentImg" src={documentImg} />
          </Flex.Item>
        </MainContainer>
      </PageWrapper>
    </DataProvidersModuleContainer>
  )
}

export default DataProvidersModule
