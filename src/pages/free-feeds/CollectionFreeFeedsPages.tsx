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
  Text, useMatchBreakpoints
} from '@banksea-finance/ui-kit'
import styled from 'styled-components'
import { useCollectionFreeFeedInfoQuery } from '@/hooks/queries/free-feeds/useCollectionFreeFeedInfoQuery'
import { useParams } from 'react-router-dom'
import QueriedData, { QueriedDataProps } from '@/components/queried-data'
import dayjs from 'dayjs'
import { useQueryCollectionTaskAccount } from '@/hooks/programs/oracle'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import { BN } from '@project-serum/anchor'
import BigNumber from 'bignumber.js'
import {
  useQueryCollectionTaskConfigAccount
} from '@/hooks/programs/oracle/queries/useQueryCollectionTaskConfigAccount'
import usePageQuery from '@/hooks/usePageQuery'
import { shortenAddress } from '@/utils'
import { useCollectionFeedActivitiesQuery } from '@/hooks/queries/free-feeds/useCollectionFeedActiviesQuery'
import ReactECharts from 'echarts-for-react'
import { useCollectionAggregateHistoriesQuery } from '@/hooks/queries/free-feeds/useCollectionAggregateHistoriesQuery'
import { EChartsOption } from 'echarts'
import CopyToClipboard from 'react-copy-to-clipboard'
import { CopySvg } from '@/components/svgs'

const OverviewItemContainer = styled(Box)`
  white-space: nowrap;
  text-overflow: ellipsis;
`

const OverviewsContainer = styled(Card)`
  flex-direction: row;
  padding: 20px 0 20px 40px;
  margin-bottom: 16px;

  & > div:nth-of-type(1) {
    flex: 1;
    overflow-wrap: anywhere;
    white-space: break-spaces;
    text-overflow: ellipsis;
    margin-right: 8px;
  }

  & > div:not(:nth-of-type(1)) {
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
    ${({ theme }) => `${theme.colors.primary}00`}) 1 1;
  }

  ${({ theme }) => theme.mediaQueries.maxXl} {
    padding: 20px 0;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);

    & > div:nth-of-type(1) {
      grid-area: 1 / 1 / 2 / 6;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-bottom: 8px;
      padding-bottom: 8px;

      border-width: 2px;
      border-style: solid;
      border-top: 0;
      border-image: linear-gradient(to right,
      ${({ theme }) => `${theme.colors.primary}00`},
      ${({ theme }) => theme.colors.primary}99,
      ${({ theme }) => `${theme.colors.primary}00`}) 1 0 100%;

      overflow-wrap: anywhere;
    }

    & > div:nth-of-type(2) {
      grid-area: 2 / 1 / 3 / 2;
      border-left: 0;
    }

    & > div:nth-of-type(3) {
      grid-area: 2 / 2 / 3 / 3;
    }

    & > div:nth-of-type(4) {
      grid-area: 2 / 3 / 3 / 4;
    }

    & > div:nth-of-type(5) {
      grid-area: 2 / 4 / 3 / 5;
    }
  }

  ${({ theme }) => theme.mediaQueries.maxMd} {
    padding: 20px 0;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);


    & > div:nth-of-type(2) {
      grid-area: 2 / 1 / 3 / 3;
    }

    & > div:nth-of-type(3) {
      grid-area: 2 / 3 / 3 / 5;
    }

    & > div:nth-of-type(4) {
      grid-area: 3 / 1 / 4 / 3;
      border-left: 0;
    }

    & > div:nth-of-type(5) {
      grid-area: 3 / 3 / 4 / 5;
    }

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

const OverviewSection: React.FC = () => {
  const { collection } = useParams()
  const info = useCollectionFreeFeedInfoQuery(collection)

  const collectionTaskAccount = useQueryCollectionTaskAccount(info.data?.collectionTask)
  const collectionTaskConfigAccount = useQueryCollectionTaskConfigAccount(info.data?.collectionTask)

  const fromLamports = (lamports: BN | string | number, decimals = Math.log10(LAMPORTS_PER_SOL)) => {
    return new BigNumber(lamports.toString()).shiftedBy(-decimals)
  }

  return (
    <section>
      <ModuleTitle title={'Overview'} description={'Overview description'} />

      <OverviewsContainer>
        <OverviewItem
          title={'Feed Account'}
          value={info}
          dataRender={({ collectionTask: value }) => (
            <Grid gridTemplateColumns={'repeat(4, auto)'} ai={'center'} gap={'4px'} width={'min(460px, 78vw)'}>
              <Text
                textAlign={'center'}
                width={{ _: '160px', sm: 'fit-content' }}
                style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
              >
                {value}
              </Text>
              <CopyToClipboard text={value}>
                <div style={{ cursor: 'pointer' }}><CopySvg /></div>
              </CopyToClipboard>
              <a href={`https://solscan.io/account/${value}?cluster=devnet`} target={'_blank'} rel="noreferrer">
                <img src="https://solscan.io/favicon.ico" alt="Solscan" style={{ width: '20px', height: '20px' }} />
              </a>
              <a
                href={`https://explorer.solana.com/account/${value}?cluster=devnet`}
                target={'_blank'}
                rel="noreferrer"
              >
                <img
                  src="https://explorer.solana.com/favicon.ico"
                  alt="Solana Explorer"
                  style={{ width: '20px', height: '20px' }}
                />
              </a>
            </Grid>
          )}
        />
        <OverviewItem
          title={'Floor Price'}
          value={collectionTaskAccount}
          dataRender={({ floorPrice }) => floorPrice?.gt(new BN(0)) ? `${fromLamports(floorPrice)} SOL` : '-'}
        />
        <OverviewItem
          title={'Avg Price(24h)'}
          value={collectionTaskAccount}
          dataRender={({ avgPrice }) => avgPrice?.gt(new BN(0)) ? `${fromLamports(avgPrice)} SOL` : '-'}
        />
        <OverviewItem
          title={'Aggregation Time'}
          value={collectionTaskAccount}
          dataRender={({ aggregateTime }) => dayjs(aggregateTime.toNumber() * 1000).format('YYYY/MM/DD HH:mm:ss')}
        />
        <OverviewItem
          title={'Feed Cycle'}
          value={collectionTaskConfigAccount}
          dataRender={({ feedInterval }) => feedInterval ? `${feedInterval.toNumber() / 60} MINUTES` : '-'}
        />
      </OverviewsContainer>
    </section>
  )
}

const FeedHistorySection: React.FC = () => {
  const TIME_RANGES = {
    '24H': 24 * 60 * 60 * 1000,
    '7D': 7 * 24 * 60 * 60 * 1000,
    '30D': 30 * 24 * 60 * 60 * 1000,
    '3M': 3 * 30 * 24 * 60 * 60 * 1000,
    '1Y': 365 * 24 * 60 * 60 * 1000,
    'ALL': undefined
  }

  const { collection } = useParams()
  const [timeRangeKey, setTimeRangeKey] = useState<keyof typeof TIME_RANGES>('7D')

  const startTime = useMemo(() => {
    const now = Date.now()
    const diff = (TIME_RANGES[timeRangeKey] || now)
    return ((now - diff) / 1000).toFixed(0)
  }, [timeRangeKey])

  const { data } = useCollectionAggregateHistoriesQuery({ symbol: collection, startTime })

  const options: EChartsOption = useMemo(() => {
    return {
      darkMode: true,
      grid: { top: 24, right: 48, bottom: 48, left: 48 },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },
      dataset: [
        { source: data?.map(o => ({ ...o, time: o.time * 1000 }))?.filter(o => o.avgPrice && o.floorPrice) || [] }
      ],
      color: ['#7864e6', '#d25ae6'],
      legend: {
        orient: 'horizontal',
        bottom: '0',
        textStyle: {
          color: '#ccc',
        }
      },
      xAxis: {
        type: 'time',
        axisLabel: {
          color: '#808080'
        },
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
          },
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
            y: 'avgPrice'
          },
          showSymbol: false,
        }
      ]
    }
  }, [data])

  return (
    <section>
      <ModuleTitle title={'Feed Histories'} description={'Overview description'} />

      <Card p={'28px'} flexDirection={'column'} width={'inherit'}>
        <Flex jc={'flex-end'} width={'inherit'}>
          <ButtonMenu
            scale={scales.S}
            activeKey={timeRangeKey}
            onItemClick={({ key }) => setTimeRangeKey(key as any)}
            itemProps={{ p: '8px 12px' }}
          >
            {
              Object.keys(TIME_RANGES).map(key => (
                <ButtonMenu.Item itemKey={key} key={key}>{key}</ButtonMenu.Item>
              ))
            }
          </ButtonMenu>
        </Flex>

        <ReactECharts option={options} />
      </Card>
    </section>
  )
}

const FeedActivitiesSection: React.FC = () => {
  const { collection } = useParams()
  const { current, size, handleChange } = usePageQuery()
  const { data } = useCollectionFeedActivitiesQuery({ symbol: collection })

  const columns: ColumnsType = [
    {
      title: 'Tx Hash',
      dataIndex: 'signature',
      align: 'center',
      minWidth: '220px',
      render: value => (
        <Flex ai={'center'} jc={'center'} gap={'8px'}>
          <Text width={'110px'} textAlign={'end'}>{shortenAddress(value)}</Text>
          <a href={`https://solscan.io/tx/${value}?cluster=devnet`} target={'_blank'} rel="noreferrer">
            <img src="https://solscan.io/favicon.ico" alt="Solscan" style={{ width: '20px', height: '20px' }} />
          </a>
          <a href={`https://explorer.solana.com/tx/${value}?cluster=devnet`} target={'_blank'} rel="noreferrer">
            <img src="https://explorer.solana.com/favicon.ico"
              alt="Solana Explorer"
              style={{ width: '20px', height: '20px' }}
            />
          </a>
        </Flex>
      )
    },
    {
      title: 'Floor Price',
      dataIndex: 'floorPrice',
      align: 'center',
      width: 140,
      render: value => value ? `${value} SOL` : '-'
    },
    {
      title: 'Avg Price(24h)',
      dataIndex: 'avgPrice',
      align: 'center',
      width: 140,
      render: value => value ? `${value} SOL` : '-'
    },
    {
      title: 'Feed Time',
      dataIndex: 'time',
      align: 'center',
      width: 140,
      render: value => value ? dayjs(value * 1000).format('MM/DD HH:mm:ss') : '-',
    },
  ]

  const { isXs, isSm, isMd } = useMatchBreakpoints()

  return (
    <section>
      <ModuleTitle title={'Feed Activities'} description={'Overview description'} />

      <Box width={'100%'} overflowX={'hidden'}>
        <Table
          scroll={{ x: 650 }}
          columns={columns as any}
          rowKey={(data, index) => `${index}`}
          data={data?.slice((current - 1) * size, current * size)}
          rowStyle={{ height: '64px' }}
        />
      </Box>

      <Flex mt={'16px'} jc={'flex-end'}>
        <Pagination
          showLessItems={ isXs || isSm || isMd }
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
    <Box>
      <Grid gridTemplateColumns={'100%'} gap={'36px'}>
        <OverviewSection />
        <FeedHistorySection />
        <FeedActivitiesSection />
      </Grid>
    </Box>
  )
}
