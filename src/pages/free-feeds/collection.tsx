import React, { useMemo, useState } from 'react'
import { ModuleTitle } from '@/components/ModuleTitle'
import {
  Box,
  ButtonMenu,
  Card,
  ColumnsType,
  Flex,
  Grid,
  Pagination,
  scales,
  Table,
  Text
} from '@banksea-finance/ui-kit'
import styled from 'styled-components'
import { useCollectionFreeFeedInfoQuery } from '@/hooks/queries/free-feeds/useCollectionFreeFeedInfoQuery'
import { useParams } from 'react-router-dom'
import QueriedData, { QueriedDataProps } from '@/components/queried-data'
import dayjs from 'dayjs'
import { useCollectionAggregateHistoriesQuery } from '@/hooks/queries/free-feeds/useCollectionAggregateHistoriesQuery'
import { EChartsOption } from 'echarts'
import { useCollectionFeedActivitiesQuery } from '@/hooks/queries/free-feeds/useCollectionFeedActiviesQuery'
import usePageQuery from '@/hooks/usePageQuery'
import { shortenAddress } from '@/utils'
import ReactECharts from 'echarts-for-react'

const OverviewItemContainer = styled(Box)`
  &:nth-of-type(1) {
    flex: 1;
    
    overflow-wrap: anywhere;
    margin-right: 8px;
  }

  &:not(:nth-of-type(1)) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0 min(60px, 2.5vw);
    border-width: 2px;
    border-style: solid;
    border-right: 0;
    border-image: linear-gradient(to bottom,
    ${({ theme }) => `${theme.colors.primary}00`},
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => `${theme.colors.primary}00`}) 1 100%;
  }
`

function OverviewItem<DataType>({ title, ...rest }: { title: string } & QueriedDataProps<DataType>) {
  return (
    <OverviewItemContainer>
      <Text color={'primary'} bold>{title}</Text>

      <QueriedData {...rest} />
    </OverviewItemContainer>
  )
}

const FeedHistory: React.FC = () => {
  const { collection } = useParams()
  // TODO
  const [timeRange, setTimeRange] = useState<string>('6')
  const { data } = useCollectionAggregateHistoriesQuery({ symbol: collection })

  const options: EChartsOption = useMemo(() => {
    return {
      darkMode: true,
      grid: { top: 50, right: 48, bottom: 24, left: 80 },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },
      dataset: [
        { source: data?.map(o => ({ ...o, time: o.time * 1000 })) || [] }
      ],
      color: ['#8200FF'],
      xAxis: {
        type: 'time',
        axisLabel: {
          color: '#808080'
        }
      },
      yAxis: [
        {
          type: 'value',
          show: true,
          nameTextStyle: {
            color: '#808080'
          },
          splitLine: {
            show: false,
          }
        }
      ],
      dataZoom: [{
        type: 'inside',
        start: 0,
        end: 100
      }],
      series: [
        {
          name: 'Floor Price',
          type: 'line',
          smooth: true,
          datasetIndex: 0,
          encode: {
            x: 'time',
            y: 'floorPrice'
          },
          showSymbol: false,
        },
        {
          name: 'Avg Price',
          type: 'line',
          smooth: true,
          datasetIndex: 0,
          encode: {
            x: 'time',
            y: 'avgPrice24h'
          },
          showSymbol: false,
        }
      ]
    }
  }, [data])

  return (
    <Card p={'28px'} flexDirection={'column'}>
      <Flex jc={'space-between'} width={'100%'}>
        <Text fontSize={'24px'}>Feed History</Text>

        <ButtonMenu scale={scales.S} activeKey={timeRange} onItemClick={({ key }) => setTimeRange(key!)}>
          <ButtonMenu.Item itemKey={'1'}>24H</ButtonMenu.Item>
          <ButtonMenu.Item itemKey={'2'}>7D</ButtonMenu.Item>
          <ButtonMenu.Item itemKey={'3'}>30D</ButtonMenu.Item>
          <ButtonMenu.Item itemKey={'4'}>3M</ButtonMenu.Item>
          <ButtonMenu.Item itemKey={'5'}>1Y</ButtonMenu.Item>
          <ButtonMenu.Item itemKey={'6'}>All</ButtonMenu.Item>
        </ButtonMenu>
      </Flex>

      <ReactECharts option={options} />
    </Card>
  )
}

const OverviewSection: React.FC = () => {
  const { collection } = useParams()
  const info = useCollectionFreeFeedInfoQuery(collection)

  return (
    <section>
      <ModuleTitle title={'Overview'} description={'Overview description'} />

      <Card flexDirection={'row'} p={'20px 0 20px 40px'} mb={'80px'}>
        <OverviewItem title={'Feed Account'} value={info} displayFunction={() => 'GmbEn9VtEjBHieksfq6jNVxQpL7LxV9LDzcV2GQB5NNT'} />
        <OverviewItem title={'Floor Price'} value={info} displayFunction={({ floorPrice }) => floorPrice ? `${floorPrice} SOL` : '-'} />
        <OverviewItem title={'Avg Price(24h)'} value={info} displayFunction={({ avgPrice }) => avgPrice ? `${avgPrice} SOL` : '-'} />
        <OverviewItem title={'Feed Time'} value={info} displayFunction={value => dayjs(value.time * 1000).format('YYYY/MM/DD HH:mm:ss')} />
        <OverviewItem title={'Feed Cycle'} value={info} displayFunction={() => '60min'} />
      </Card>

      <FeedHistory />
    </section>
  )
}

const FeedActivities: React.FC = () => {
  const { collection } = useParams()
  const { current, size, handleChange } = usePageQuery()
  const { data } = useCollectionFeedActivitiesQuery({ symbol: collection })

  const columns: ColumnsType = [
    {
      title: 'Tx Hash',
      dataIndex: 'signature',
      align: 'center',
      render: value => (
        <Flex ai={'center'} jc={'center'} gap={'8px'}>
          <Text width={'110px'} textAlign={'end'}>{shortenAddress(value)}</Text>
          <a href={`https://solscan.io/tx/${value}?cluster=devnet`} target={'_blank'} rel="noreferrer">
            <img src="https://solscan.io/favicon.ico" alt="Solscan" style={{ width: '20px', height: '20px' }} />
          </a>
          <a href={`https://explorer.solana.com/tx/${value}?cluster=devnet`} target={'_blank'} rel="noreferrer">
            <img src="https://explorer.solana.com/favicon.ico" alt="Solana Explorer" style={{ width: '20px', height: '20px' }} />
          </a>
        </Flex>
      )
    },
    {
      title: 'Floor Price',
      dataIndex: 'floorPrice',
      align: 'center',
      width: '20%',
      render: value => value ? `${value} SOL` : '-'
    },
    {
      title: 'Avg Price(24h)',
      dataIndex: 'avgPrice24h',
      align: 'center',
      width: '20%',
      render: value => value ? `${value} SOL` : '-'
    },
    {
      title: 'Feed Time',
      dataIndex: 'time',
      align: 'center',
      width: '20%',
      render: value => value ? dayjs(value * 1000).format('MM/DD HH:mm:ss') : '-',
    },
  ]

  return (
    <section>
      <ModuleTitle title={'Feed Activities'} description={'Overview description'} />

      <Table
        columns={columns as any}
        data={data?.slice((current - 1) * size, current * size)}
        rowStyle={{
          height: '64px',
        }}
      />

      <Flex mt={'16px'} jc={'flex-end'}>
        <Pagination
          showSizeChanger
          current={current}
          pageSize={size}
          total={data?.length}
          onChange={handleChange}
        />
      </Flex>
    </section>
  )
}

export const CollectionFreeFeedsPages: React.FC = () => {
  return (
    <Grid gap={'80px'}>
      <OverviewSection />
      <FeedActivities />
    </Grid>
  )
}
