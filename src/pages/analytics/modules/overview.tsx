import React, { useMemo } from 'react'
import { ModuleTitle } from '../components/ModuleTitle'
import { Box, Flex, Grid, Text } from '@banksea-finance/ui-kit'
import styled from 'styled-components'
import { useAnalyticsOverviewQuery } from '@/hooks/queries'
import {
  CollectionsSvg,
  HoldersSvg,
  MarketCapSvg,
  PopularitySvg,
  QuestionMarkSvg,
  ValuationSvg,
  VolumeSvg
} from '@/components/svgs'
import ReactTooltip from 'react-tooltip'
import { numberWithCommas } from '@/utils'

type StatisticCardProps = {
  label: string
  icon: () => JSX.Element
  description: string
  background: string

  value?: number
  float?: number
}

const STATISTICS_BASE = [
  { label: 'Popularity', icon: PopularitySvg, description: 'Here\'s description for Popularity' },
  { label: 'Valuation', icon: ValuationSvg, description: 'Here\'s description for Valuation' },
  { label: 'Collections', icon: CollectionsSvg, description: 'Here\'s description for Collections' },
  { label: 'Market Cap', icon: MarketCapSvg, description: 'Here\'s description for Market Cap' },
  { label: 'Volume(24h)', icon: VolumeSvg, description: 'Here\'s description for Volume(24h)' },
  { label: 'Holders', icon: HoldersSvg, description: 'Here\'s description for Holders' },
]

const StatisticCardContainer = styled.div<{ $background: string }>`
  width: 450px;
  height: 270px;
  position: relative;
  padding: 36px;

  background: url("${props => props.$background}") no-repeat;
  background-size: 100%;
`

const StatisticCard: React.FC<StatisticCardProps> = ({ background, icon: Icon, float, label, description, value }) => {
  const tooltipId = `statistic-${label}`

  return (
    <StatisticCardContainer $background={background}>
      <Box position={'absolute'} right={{ lg: '48px' }} top={{ lg: '48px' }}>
        <Icon />
      </Box>

      <Flex flexDirection={'column'} jc={'end'} ai={'start'} height={'100%'} width={'100%'}>
        <Flex ai={'center'}>
          <Text fontSize={{ lg: '20px' }} mr={{ lg: '4px' }}>{label}</Text>
          <a data-tip="true" data-for={tooltipId}>
            <QuestionMarkSvg color={'white'} />
          </a>
          <ReactTooltip
            id={tooltipId}
            aria-haspopup="true"
          >
            <Text>{description}</Text>
          </ReactTooltip>
        </Flex>
        <Text fontSize={{ lg: '48px' }}>{numberWithCommas(value)}</Text>
        <Text fontSize={{ lg: '20px' }}>{float ? `${float > 0 ? '+' : ''}${(float * 100).toFixed(2)}%` : '-'}</Text>
      </Flex>
    </StatisticCardContainer>
  )
}

export const OverviewModule: React.FC = () => {
  const { data: analyticsOverview } = useAnalyticsOverviewQuery()

  const statistics = useMemo(() => {
    if (!analyticsOverview) return STATISTICS_BASE

    const { popularity, valuation, holders, marketCap, volume, collections } = analyticsOverview

    return [popularity, valuation, collections, marketCap, volume, holders].map((o, i) => ({
      ...STATISTICS_BASE[i],
      ...o
    }))
  }, [analyticsOverview])

  return (
    <Box width={'100%'}>
      <ModuleTitle title={'Overview'} description={'The collection\'s estimated potential to become the next Blue Chip collection'} />

      <Grid
        gridTemplateColumns={'repeat(3, 1fr)'}
        gridGap={'32px 0'}
        justifyContent={'space-between'}
        width={'100%'}
      >
        {
          statistics.map((o, i) => (
            <StatisticCard background={require(`@/assets/images/pages/analytics/cards-bg/${i + 1}.webp`)} key={i} {...o} />
          ))
        }
      </Grid>
    </Box>
  )
}
