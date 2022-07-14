import React from 'react'
import { Flex } from '@banksea-finance/ui-kit'
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
  
  ${({ theme }) => theme.mediaQueries.maxLg} {
    display: flex;
    justify-content: center;
    
    height: var(--mobile-image-width);
    width: var(--mobile-image-height);
    
    img {
      transform: rotate(90deg);
      transform-origin: 50% 50%;
      
      height: var(--mobile-image-height);
      width: var(--mobile-image-width);
      
      position: relative;
      top: calc((var(--mobile-image-width) - var(--mobile-image-height)) / 2);
    }
  }
`

export const FeaturesModule: React.FC = () => {
  return (
    <Flex flexDirection={'column'} ai={'center'} overflowX={'hidden'}>
      <ModuleTitle>
        Features
      </ModuleTitle>

      <ImageContainer>
        <img src={require('@/assets/images/pages/home/features.png')} alt="" />
      </ImageContainer>
    </Flex>
  )
}
