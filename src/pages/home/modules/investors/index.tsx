import React, { useMemo } from 'react'
import { Flex, useResponsive } from '@banksea-finance/ui-kit'
import { ModuleTitle } from '@/components/module-title'

export type Investor = {
  image: string
  url: string
  scale?: string | number
}

const INVESTORS: Investor[] = [
  {
    image: 'https://parrot.fi/icons/parrot-logo-d.svg',
    url: 'https://parrot.fi',
    scale: 0.9
  },
  {
    image: require('@/assets/images/pages/home/investors/shima.png'),
    url: 'https://shima.capital/',
    scale: 1.4
  },
  {
    image: require('@/assets/images/pages/home/investors/petrock.png'),
    url: 'https://www.petrock.capital/',
    scale: 1.5
  },
  {
    image: require('@/assets/images/pages/home/investors/mexc.svg').default,
    url: 'https://www.mexc.com/',
    scale: 0.6
  },
  {
    image: require('@/assets/images/pages/home/investors/solar.png'),
    url: 'https://www.solarecofund.com/',
    scale: 1.5
  },
  {
    image: require('@/assets/images/pages/home/investors/springwind.svg').default,
    url: '',
    scale: 1.3
  },
  {
    image: require('@/assets/images/pages/home/investors/rio.png'),
    url: 'https://riochain.io/',
    scale: 1.5
  },
  {
    image: require('@/assets/images/pages/home/investors/digital.png'),
    url: 'https://www.drf.ee/',
  },
  {
    image: require('@/assets/images/pages/home/investors/zonff.png'),
    url: 'https://www.zonff.partners',
  },
  {
    image: require('@/assets/images/pages/home/investors/xt.png'),
    url: 'https://www.xt.com/labs',
    scale: 1.2
  },
  {
    image: require('@/assets/images/pages/home/investors/ventures.png'),
    url: 'https://gtaventures.org/',
    scale: 0.7
  },
  {
    image: require('@/assets/images/pages/home/investors/definitive.png'),
    url: 'https://www.definitive.capital/',
    scale: 0.8
  },
  {
    image: require('@/assets/images/pages/home/investors/da.png'),
    url: 'https://edigitalassets.io/',
  },
  {
    image: require('@/assets/images/pages/home/investors/investment.png'),
    url: 'https://solution.ventures/',
  },
  {
    image: require('@/assets/images/pages/home/investors/palar.png'),
    url: 'https://palar.capital/',
  },
  {
    image: require('@/assets/images/pages/home/investors/inv.png'),
    url: 'https://inv.ventures/',
  },
  {
    image: require('@/assets/images/pages/home/investors/catcher.png'),
    url: 'https://catchervc.chaincatcher.com',
    scale: 0.4
  },
]

export const InvestorsModule: React.FC = () => {
  const { isMobile } = useResponsive()

  const heightBase = useMemo(() => isMobile ? '60px' : '90px', [isMobile])

  return (
    <Flex width={'100%'} flexDirection={'column'} ai={'center'}>
      <ModuleTitle>Investors</ModuleTitle>

      <Flex ai={'center'} jc={'center'} flexWrap={'wrap'} gap={{ _: '32px', md: '32px 64px' }}>
        {
          INVESTORS.map(({ image, url, scale = 1.0 }) => (
            <a href={url} key={url} target={'_blank'} rel="noreferrer">
              <img
                src={image}
                alt=""
                style={{ height: `calc(${heightBase} * ${scale})`, width: '100%' }}
                data-aos="zoomin"
              />
            </a>
          ))
        }
      </Flex>
    </Flex>
  )
}
