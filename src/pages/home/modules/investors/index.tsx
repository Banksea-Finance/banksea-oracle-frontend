import React, { useMemo } from 'react'
import { Flex, Image, useResponsive } from '@banksea-finance/ui-kit'
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
    scale: 0.4
  },
  {
    image: require('@/assets/images/pages/home/investors/solar.png'),
    url: 'https://www.solarecofund.com/',
    scale: 1.5
  },
  {
    image: require('@/assets/images/pages/home/investors/springwind.svg').default,
    url: 'https://springwind.vc/',
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
    image: require('@/assets/images/pages/home/investors/zonff.svg').default,
    url: 'https://www.zonff.partners',
    scale: 1.5
  },
  {
    image: require('@/assets/images/pages/home/investors/xt.png'),
    url: 'https://www.xt.com/labs',
    scale: 1.2
  },
  {
    image: require('@/assets/images/pages/home/investors/ventures.png'),
    url: 'https://ventures.web3.com/',
    scale: 0.6
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

  const heightBase = useMemo<number>(() => isMobile ? 40 : 90, [isMobile])

  return (
    <Flex width={'100%'} flexDirection={'column'} ai={'center'}>
      <ModuleTitle fontSize={'min(38px, 11vw)'}>Investors</ModuleTitle>

      <Flex ai={'center'} jc={'center'} flexWrap={'wrap'}>
        {
          INVESTORS.map(({ image, url, scale = 1.0 }) => (
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
