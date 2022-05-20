import React from 'react'
import { HomeContainer } from './index.style'
import { ArchitectureModule, ConsumersModule, DataProvidersModule, DistributionModule, TopModule } from './modules'

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
