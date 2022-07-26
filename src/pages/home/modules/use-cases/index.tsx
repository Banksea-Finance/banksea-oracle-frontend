import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Flex, Text } from '@banksea-finance/ui-kit'
import { ModuleTitle } from '@/components/module-title'
import styled from 'styled-components'
import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap.css'

const UseCasesContainer = styled.div`
  position: relative;
  width: max(440px, min(1042px, 96vw));

  span {
    color: white;
    font-family: ${({ theme }) => theme.fontFamilies.common};

    background-color: rgb(120, 100, 230);
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    position: absolute;
    border-radius: 50%;

    &:before, &:after {
      content: "";
    }

    &:hover, &[data-active=true] {
      &:after {
        z-index: -1;
        position: absolute;
        opacity: 0.8;
        background-color: rgb(120, 100, 230, 0.5);
        border-radius: 50%;

        width: 110%;
        height: 110%;

        transition: width, height .3s;
        animation: k1 ease-out .3s;
      }


      &:before {
        z-index: -1;
        position: absolute;
        opacity: 0.8;
        background-color: rgb(120, 100, 230, 0.3);
        border-radius: 50%;

        width: 120%;
        height: 120%;

        transition: width, height .3s;
        animation: k2 ease-out .3s;
      }
    }

    @keyframes k1 {
      0% {
        width: 100%;
        height: 100%;
      }

      100% {
        width: 110%;
        height: 110%;
      }
    }

    @keyframes k2 {
      0% {
        width: 100%;
        height: 100%;
      }

      100% {
        width: 120%;
        height: 120%;
      }
    }
  }

  #bg {
    width: 100%;
  }

  #game-fi {
    top: 5%;
    right: 39%;
    width: 9%;
    height: 9%;
  }

  #lending {
    top: 26%;
    right: 20%;
    width: 10%;
    height: 10%;
  }

  #marketplace {
    top: 24%;
    right: 70%;
    width: 13%;
    height: 13%;
  }

  #music {
    top: 73%;
    right: 76%;
    width: 8%;
    height: 8%;
  }

  #meta-verse {
    top: 78%;
    right: 8%;
    width: 12%;
    height: 12%;
  }

  #wallet {
    top: 62%;
    right: 30%;
    width: 8%;
    height: 8%;
  }

  #banksea-oracle {
    top: 37%;
    right: 39%;
    width: 22%;
    height: 22%;
  }

  .custom-tooltip {
    width: 350px;
  }
`

const ids = [
  'game-fi', 'lending', 'marketplace', 'wallet', 'music', 'meta-verse',
]

const items = [
  {
    id: 'game-fi',
    label: 'Game Fi',
    description: 'The game and de-fi will be better combined through Banksea valuation service that provide more possibilities for the liquidity of virtual assets.',
    tooltipPosition: 'bottom',
  },
  {
    id: 'lending',
    label: 'Lending',
    description: 'Banksea provides safe and reasonable solutions for NFT lending with the valuation of NFTs and Collections, and monitors the market in real time to minimize the risk of lending.',
    tooltipPosition: 'bottom',
    offsetX: -100
  },
  {
    id: 'marketplace',
    label: 'Marketplace',
    description: 'Banksea provides secure, objective, and real-time data analysis and NFT valuation for users to formulate better trading strategies in the marketplace.',
    tooltipPosition: 'bottom',
    offsetX: 100
  },
  {
    id: 'music',
    label: 'Music',
    description: 'Banksea is exploring and researching music NFT and can customize the data analysis and valuation services for music NFTs.',
    tooltipPosition: 'top',
    offsetX: 120
  },
  {
    id: 'meta-verse',
    label: 'MetaVerse',
    description: 'As the infrastructure in the metaverse, Banksea will build a bridge between the virtual and real world for value measurement, providing more connections and possibilities for the two worlds.',
    tooltipPosition: 'top',
  },
  {
    id: 'wallet',
    label: 'Wallet',
    description: 'Banksea has established in-depth cooperation with NFT wallet project to provide comprehensive analysis of NFTs, such as traits analysis, rarity analysis, popularity analysis, transaction analysis, real-time valuation, etc. It is convenient for users to analyze the status of assets directly on the wallet.',
    tooltipPosition: 'top',
    offsetX: -80
  },
  {
    id: 'banksea-oracle',
    label: 'Banksea Oracle',
  }
]

export const UseCasesModule: React.FC = () => {
  const hoveredIdRef = useRef<string>()
  const [visibleIndex, setVisibleIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!hoveredIdRef.current) {
        setVisibleIndex(prev => (prev + 1) % 6)
      }
    }, 3000)

    return () => {
      clearInterval(intervalId)
    }
  }, [hoveredIdRef])

  return (
    <Flex flexDirection={'column'} ai={'center'} width={'100%'} overflowX={'hidden'}>
      <ModuleTitle>
        Use Cases
      </ModuleTitle>

      <UseCasesContainer>
        <img src={require('@/assets/images/pages/home/use-cases-bg.webp')} alt="" id={'bg'} />

        {
          items.map(({ id, label, description }) => {
            let child = (
              <span id={id} data-aos={'fade-zoom-in'} data-aos-delay={'250'} data-active={id === ids[visibleIndex]}>
                {label}
              </span>
            )

            if (description) {
              child = (
                <div
                  onMouseEnter={() => {
                    setVisibleIndex(ids.indexOf(id))
                    hoveredIdRef.current = id
                  }}
                  onMouseLeave={() => hoveredIdRef.current = undefined}
                >
                  <Tooltip
                    visible={hoveredIdRef.current === id || (hoveredIdRef.current === undefined && id === ids[visibleIndex])}
                    overlay={
                      <Flex flexDirection={'column'} ai={'center'}>
                        <Text fontSize={'24px'}>{label}</Text>
                        <Text
                          maxWidth={'min(350px, 90vw)'}
                          textAlign={'center'}
                          fontSize={{ _: '14px', sm: '16px' }}
                        >
                          {description}
                        </Text>
                      </Flex>
                    }
                  >
                    {child}
                  </Tooltip>
                </div>
              )
            }

            return (
              <Fragment key={id}>
                {child}
              </Fragment>
            )
          })
        }
      </UseCasesContainer>
    </Flex>
  )
}
