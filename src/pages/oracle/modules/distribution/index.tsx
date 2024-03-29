import React from 'react'
import { AINodesContainer } from '@/pages/oracle/modules/distribution/index.style'
import { AINodesDistribution } from '@/components/ai-nodes-distribution'

export const DistributionModule: React.FC = () => {
  return (
    <AINodesContainer>
      <AINodesDistribution />
    </AINodesContainer>
  )
}
