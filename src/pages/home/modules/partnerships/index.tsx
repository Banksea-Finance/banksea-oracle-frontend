import React, { useMemo } from 'react'
import { Flex, Text, useResponsive } from '@banksea-finance/ui-kit'
import { ModuleTitle } from '@/components/module-title'

export type Partnership = {
  image: string
  url: string
  text?: string
  scale?: number
}

const PARTNERSHIPS: Partnership[] = [
  {
    image: 'https://parrot.fi/icons/parrot-logo-d.svg',
    url: 'https://parrot.fi',
  },
  {
    image: require('@/assets/images/pages/home/partnerships/moonbeam.png'),
    url: 'https://moonbeam.network/',
  },
  {
    image: require('@/assets/images/pages/home/partnerships/slope.png'),
    url: 'https://slope.finance/',
    scale: 0.7
  },
  {
    image: require('@/assets/images/pages/home/partnerships/solanart.png'),
    url: 'https://solanart.io/collections/citizenone',
    text: 'Solanart',
    scale: 0.9
  },
  {
    image: require('@/assets/images/pages/home/partnerships/ME.svg').default,
    url: 'https://magiceden.io/marketplace/citizenone',
    scale: 0.8
  },
  {
    image: 'https://solsea.io/assets/solsea_Logo_RGB_final1.svg',
    url: 'https://solsea.io/collection/61f56d3d6f589f689cbe1c18',
    scale: 0.7
  },
]

export const PartnershipsModule: React.FC = () => {
  const { isMobile } = useResponsive()

  const heightBase = useMemo(() => isMobile ? '60px' : '90px', [isMobile])

  return (
    <Flex width={'100%'} flexDirection={'column'} ai={'center'}>
      <ModuleTitle>Partnerships</ModuleTitle>
      <Flex ai={'center'} jc={'center'} flexWrap={'wrap'} gap={'64px'}>
        {
          PARTNERSHIPS.map(({ scale = 1.0, url, image, text }) => (
            <a href={url} target={'_blank'} rel="noreferrer" key={url}>
              <Flex ai={'center'}>
                <img src={image} alt="" style={{ height: `calc(${heightBase} * ${scale})`, width: '100%' }} />
                <Text important fontSize={'28px'} ml={'8px'}>{text}</Text>
              </Flex>
            </a>
          ))
        }
      </Flex>

    </Flex>
  )
}
