import React from 'react'
import { Flex, Grid, Text, useTheme } from '@banksea-finance/ui-kit'
import { FeaturesSvg } from '@/components/svgs'
import { ModuleTitle } from '@/components/module-title'

export const features = {
  massiveData: 'Massive Data',
  aiDrive: 'AI Drive',
  decentralize: 'Decentralize',
  realtime: 'Realtime'
} as const

export type FeatureKey = keyof typeof features

const DESCRIPTION_BY_FEATURES: Record<FeatureKey, string> = {
  aiDrive: 'The valuation of NFT from all Aspects by artificial intelligence.',
  decentralize: 'Distributed node price feed to guarantee the safety of valuation data.',
  massiveData: 'Banksea Oracle extract massive data on-chain for develop to guarantee the quality of valuation data.',
  realtime: 'The Valuation of NFT is realtime.'
}

const FeatureItem: React.FC<{ svg: () => JSX.Element, name: string, description: string }> = ({ svg: Svg, name, description }) => {
  const { theme } = useTheme()

  return (
    <Flex alignItems={'center'} flexDirection={'column'} width={'233px'}>
      <Flex
        ai={'center'}
        jc={'center'}
        borderRadius={'50%'}
        width={{ md: '200px', _: '160px' }}
        height={{ md: '200px', _: '160px' }}
        background={theme.colors.backgroundSecondary}
      >
        <Svg />
      </Flex>
      <Text color={'white'} fontSize={'24px'} m={{ md: '43px 0 18px 0', _: '12px 0' }}>{name}</Text>
      <Text color={'disabled'} width={'100%'} textAlign={'center'}>{description}</Text>
    </Flex>
  )
}

export const FeaturesModule: React.FC = () => {
  return (
    <Flex flexDirection={'column'} ai={'center'} width={'100%'}>
      <ModuleTitle>
        Features
      </ModuleTitle>
      <Grid gridTemplateColumns={{ xl: 'repeat(4, 1fr)', md: 'repeat(2, 1fr)' }} gridGap={'16px 0'} jc={'space-between'} justifyItems={'center'} width={'100%'}>
        {
          Object.keys(features).map(key => (
            <FeatureItem svg={FeaturesSvg[key as FeatureKey]} name={features[key as FeatureKey]} description={DESCRIPTION_BY_FEATURES[key as FeatureKey]} key={key} />
          ))
        }
      </Grid>
    </Flex>
  )
}
