import React, { useEffect, useState } from 'react'
import useSummaryQuery from '@/hooks/queries/useSummaryQuery'
import { GridContainer, RainbowBorderBox, SummaryContainer } from '@/pages/market/modules/banksea-data-feed/index.style'
import CountUp from 'react-countup'
import Flex from '@react-css/flex'
import { Text } from '@/libs/uikit/components'
import { CountUpProps } from 'react-countup/build/CountUp'
import ModuleTitle from '@/components/module-title'

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

const AnimatedNumber: React.FC<{ value?: number } & PartialBy<CountUpProps, 'end'>> = ({ value, end, ...other }) => {
  const [before, setBefore] = useState<number>()
  const [current, setCurrent] = useState<number>(value || 0)

  useEffect(() => {
    if (value === undefined) {
      return
    }

    setBefore(current)
    setCurrent(value)
  }, [value])

  return (
    <CountUp start={before} end={current} duration={0.38} useEasing {...other} />
  )
}

const Statistic: React.FC<{ title: string, value?: number, decimals?: number }> = ({
  title, value, decimals
}) => {
  const style = {
    fontSize: '28px',
    fontWeight: '600'
  }

  return (
    <RainbowBorderBox width={'100%'} height={'204px'}>
      <Flex column alignItemsCenter justifyCenter style={{ width: '100%', background: 'white', height: '100%', borderRadius: '10px' }}>
        <Text fontSize={'18px'} color={'textDisabled'} bold mb={'15px'}>
          {title}
        </Text>
        <AnimatedNumber value={value} style={style} decimals={decimals} />
      </Flex>
    </RainbowBorderBox>
  )
}

const Statistics: React.FC = () => {
  const { data } = useSummaryQuery()

  return (
    <SummaryContainer>
      <ModuleTitle>
        Banksea Data Feed
      </ModuleTitle>

      <GridContainer>
        <Statistic title="Total Valuation" value={data?.totalValuation} decimals={2} />
        <Statistic title="Collections supported" value={data?.support} />
        <Statistic title="Number of data" value={data?.dataNum} />
        <Statistic title="Number of nodes" value={data?.nodeCnt} />
      </GridContainer>
    </SummaryContainer>
  )
}

export default Statistics
