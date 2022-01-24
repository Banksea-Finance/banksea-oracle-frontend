import React from 'react'
import { HomeContainer } from '@/pages/home/index.style'
import TopModule from '@/pages/home/top'
import ArchitectureModule from '@/pages/home/architecture'
import DistributionModule from '@/pages/home/distribution'
import ConsumersModule from '@/pages/home/consumers'
import DataProvidersModule from '@/pages/home/data-providers'

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <TopModule />
      <ArchitectureModule />
      <DistributionModule />
      <ConsumersModule />
      <DataProvidersModule />
    </HomeContainer>
  )
}

export default HomePage
