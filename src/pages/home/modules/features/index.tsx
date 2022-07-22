import React from 'react'
import { Flex, useResponsive } from '@banksea-finance/ui-kit'
import { ModuleTitle } from '@/components/module-title'
import styled from 'styled-components'

export const features = {
  massiveData: 'Massive Data',
  aiDrive: 'AI Drive',
  decentralize: 'Decentralize',
  realtime: 'Realtime'
} as const

export type FeatureKey = keyof typeof features

const ImageContainer = styled.div`
  --mobile-image-height: 80vw;
  --mobile-image-width: calc(var(--mobile-image-height) * 2.05);
  
  width: min(1042px, 96vw);

  img {
    width: 100%;
  }
  
`

export const FeaturesModule: React.FC = () => {
  const { isDesktop } = useResponsive()

  return (
    <Flex flexDirection={'column'} ai={'center'} overflowX={'hidden'}>
      <ModuleTitle>
        Features
      </ModuleTitle>

      <ImageContainer>
        <img src={isDesktop ? require('@/assets/images/pages/home/features.webp') : require('@/assets/images/pages/home/features-sm.webp')} alt="" />
      </ImageContainer>
    </Flex>
  )
}
