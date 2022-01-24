import React from 'react'
import { AINodesContainer } from '@/pages/home/distribution/index.style'
import AINodesDistribution from '@/components/ai-nodes-distribution'
import { PageWrapper } from '@/libs/uikit/components'

const DistributionModule: React.FC = () => {
  return (
    <AINodesContainer>
      <PageWrapper>
        <AINodesDistribution />
      </PageWrapper>
    </AINodesContainer>
  )
}

export default DistributionModule
