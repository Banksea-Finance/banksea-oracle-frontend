import React from 'react'
import { ArchitectureContainer, ArchitectureImage } from '@/pages/home/architecture/index.style'
import { PageWrapper } from '@/libs/uikit/components'
import ModuleTitle from '@/components/module-title'

const ArchitectureModule: React.FC = () => {
  return (
    <ArchitectureContainer>
      <PageWrapper>
        <ModuleTitle small>
          Powerful AI architecture ensure highly<br />
          reliable NFT valuation
        </ModuleTitle>
        <ArchitectureImage zIndex={19260817} src={require('@/images/home/AIValuationItem/architecture.png').default} />
      </PageWrapper>
    </ArchitectureContainer>
  )
}

export default ArchitectureModule
