import React from 'react'
import { ArchitectureContainer, ArchitectureImage } from '@/pages/home/modules/architecture/index.style'
import ModuleTitle from '@/components/module-title'

export const ArchitectureModule: React.FC = () => {
  return (
    <ArchitectureContainer>
      <ModuleTitle small>
        Powerful AI architecture ensure highly<br />
        reliable NFT valuation
      </ModuleTitle>
      <ArchitectureImage zIndex={19260817} src={require('@/images/home/AIValuationItem/architecture.png').default} />
    </ArchitectureContainer>
  )
}
