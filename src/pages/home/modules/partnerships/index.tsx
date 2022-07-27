import React, { useMemo } from 'react'
import { Flex, Image, useResponsive } from '@banksea-finance/ui-kit'
import { ModuleTitle } from '@/components/module-title'

export type Partnership = {
  image: string
  url: string
  scale?: number
}

const PARTNERSHIPS: Partnership[] = [
  {
    image: require('@/assets/images/pages/home/partnerships/slope.png'),
    url: 'https://slope.finance/',
    scale: 0.6
  },
  {
    image: require('@/assets/images/pages/home/partnerships/Bitkeep.png'),
    url: 'https://bitkeep.com/',
    scale: 0.7

  },
  {
    image: require('@/assets/images/pages/home/partnerships/XCarnival.png'),
    url: 'https://xcarnival.fi/',
    scale: 0.6
  },
  {
    image: require('@/assets/images/pages/home/partnerships/Certik.svg').default,
    url: 'https://www.certik.com/',
    scale: 0.4
  },
  {
    image: require('@/assets/images/pages/home/partnerships/Frakt.png'),
    url: 'https://frakt.xyz/',
    scale: 0.6
  },
  {
    image: require('@/assets/images/pages/home/partnerships/moonbeam.png'),
    url: 'https://moonbeam.network/',
    scale: 0.85
  },
  {
    image: require('@/assets/images/pages/home/partnerships/Droid.png'),
    url: 'https://droidcapital.net/',
    scale: 2
  },
  {
    image: require('@/assets/images/pages/home/partnerships/parrot.svg').default,
    url: 'https://parrot.fi',
    scale: 0.8
  },
  {
    image: require('@/assets/images/pages/home/partnerships/zebec.png'),
    url: 'https://zebec.io/',
    scale: 0.8
  },
  {
    image: require('@/assets/images/pages/home/partnerships/SolSea.svg').default,
    url: 'https://solsea.io/',
    scale: 0.55
  },
  {
    image: require('@/assets/images/pages/home/partnerships/exomon.png'),
    url: 'https://www.exomon.xyz/',
  },
  {
    image: require('@/assets/images/pages/home/partnerships/bitcoinaddict.svg').default,
    url: 'https://bitcoinaddict.org/',
    scale: 0.8
  },
  {
    image: require('@/assets/images/pages/home/partnerships/CryptoTimes.png'),
    url: 'https://www.cryptotimes.io/',
    scale: 0.45
  },
]

export const PartnershipsModule: React.FC = () => {
  const { isMobile } = useResponsive()

  const heightBase = useMemo(() => isMobile ? 40 : 90, [isMobile])

  return (
    <Flex width={'100%'} flexDirection={'column'} ai={'center'}>
      <ModuleTitle fontSize={'min(38px, 8vw)'}>Partnerships</ModuleTitle>

      <Flex ai={'center'} jc={'center'} flexWrap={'wrap'}>
        {
          PARTNERSHIPS.map(({ scale = 1.0, url, image }) => (
            <a href={url} target={'_blank'} rel="noreferrer" key={url}>
              <Image
                src={image}
                height={`${heightBase * (scale as number)}px`}
                my={'16px'}
                mx={{ md: '32px', _: '16px' }}
                data-aos="zoomin"
              />
            </a>
          ))
        }
      </Flex>

    </Flex>
  )
}
