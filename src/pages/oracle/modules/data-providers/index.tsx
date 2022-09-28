import React from 'react'
import { ContentContainer, DataProvidersModuleContainer, MainContainer, ToButton } from './index.style'

import toIcon from '@/images/icon/toIcon.svg'
import arrow from '@/images/icon/arrow.svg'
import documentImg from '../../../../images/document/documentImg.png'
import { Text, useResponsive } from '@banksea-finance/ui-kit'
import { ModuleTitle } from '@/components/module-title'

export const DataProvidersModule: React.FC = () => {
  const { isMobile } = useResponsive()

  return (
    <DataProvidersModuleContainer>
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
        <img className="documentImg" src={documentImg} />
      </MainContainer>
    </DataProvidersModuleContainer>
  )
}
