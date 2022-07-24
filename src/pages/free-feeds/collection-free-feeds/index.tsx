import React, { useMemo, useState } from 'react'
import { ModuleTitle } from '@/components/ModuleTitle'
import {
  Box,
  ButtonMenu,
  Card,
  Flex,
  Grid,
  Pagination,
  scales, Skeleton,
  Text, useMatchBreakpoints
} from '@banksea-finance/ui-kit'
import styled from 'styled-components'
import { useCollectionFreeFeedInfoQuery } from '@/hooks/queries/free-feeds/useCollectionFreeFeedInfoQuery'
import { useParams } from 'react-router-dom'
import QueriedData, { QueriedDataProps } from '@/components/queried-data'
import dayjs from 'dayjs'
import { useQueryCollectionTaskAccount } from '@/hooks/programs/oracle'


import usePageQuery from '@/hooks/usePageQuery'
import { fromLamports } from '@/utils'
import { useCollectionFeedActivitiesQuery } from '@/hooks/queries/free-feeds/useCollectionFeedActiviesQuery'
import ReactECharts from 'echarts-for-react'
import { useCollectionAggregateHistoriesQuery } from '@/hooks/queries/free-feeds/useCollectionAggregateHistoriesQuery'
import { EChartsOption } from 'echarts'
import CopyToClipboard from 'react-copy-to-clipboard'
import { QuestionMarkSvg } from '@/components/svgs'
import ReactTooltip from 'react-tooltip'
import { FeedActivitiesTable } from '@/pages/free-feeds/collection-free-feeds/FeedActivitiesTable'
import Redirect from '@/pages/redirect'
import { useSolanaWalletBasedAuthentication } from '@/contexts/solana-wallet-based-authtication'

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

function OverviewItem<DataType>({ title, description, ...rest }: { title: React.ReactNode, description?: React.ReactNode } & QueriedDataProps<DataType>) {
  return (
    <OverviewItemContainer>
      <Flex ai={'center'}>
        <Text color={'primary'} bold mr={'4px'}>{title}</Text>
        {
          description && (
            <>
              <a data-tip="true" data-for={`overview-${title}`}>
                <QuestionMarkSvg size={'14'} />
              </a>
              <ReactTooltip
                id={`overview-${title}`}
                className={'custom-tooltip'}
                aria-haspopup="true"
              >
                <Text>{description}</Text>
              </ReactTooltip>
            </>
          )
        }
      </Flex>

      <QueriedData {...rest} />
    </OverviewItemContainer>
  )
}

const OverviewSection: React.FC = () => {
  const { collection } = useParams()
  const info = useCollectionFreeFeedInfoQuery(collection)

  const collectionTaskAccount = useQueryCollectionTaskAccount(info.data?.collectionTask)

  return (
    <section>
      <ModuleTitle title={'Overview'} />

      <OverviewsContainer>
        <OverviewItem
          title={'Feed Account'}
          description={'The on-chain Account which save the aggregated data. \nYou can use it on your contracts to get the feed data.'}
          value={info}
          dataRender={({ collectionTask: value }) => (
            <Grid gridTemplateColumns={'repeat(4, auto)'} ai={'center'} gap={'4px'} width={'min(460px, 78vw)'}>
              <CopyToClipboard text={value}>
                <Text
                  textAlign={'center'}
                  width={{ _: '160px', sm: 'fit-content' }}
                  style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', cursor: 'pointer' }}
                >
                  {value}
                </Text>
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
          description={'Minimum listing price of this collection on marketplace.'}
          value={collectionTaskAccount}
          dataRender={({ floorPrice }) => !floorPrice?.isZero() ? `${fromLamports(floorPrice)} SOL` : '0'}
        />
        <OverviewItem
          title={'AI Floor Price'}
          description={'The minimum AI valuation of this collection.'}
          value={collectionTaskAccount}
          dataRender={({ aiFloorPrice }) => !aiFloorPrice?.isZero() ? `${fromLamports(aiFloorPrice)} SOL` : '0'}
        />
        <OverviewItem
          title={'Avg Price(24h)'}
          description={'Average price traded in 24 hours'}
          value={collectionTaskAccount}
          dataRender={({ avgPrice }) => !avgPrice?.isZero() ? `${fromLamports(avgPrice)} SOL` : '0'}
        />
        <OverviewItem
          title={'Update Time'}
          description={'Time of Oracle data aggregation.'}
          value={collectionTaskAccount}
          dataRender={({ aggregateTime }) => dayjs(aggregateTime.toNumber() * 1000).format('YYYY/MM/DD HH:mm:ss')}
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
      grid: { top: 24, right: 24, bottom: 48 },
      tooltip: {
        trigger: 'axis',
      },
      dataset: [
        { source: data?.map(o => ({ ...o, time: o.time * 1000 }))?.filter(o => o.avgPrice || o.floorPrice || o.aiFloorPrice) || [] }
      ],
      color: ['#7864e6', '#d25ae6', 'rgb(2,182,142)'],
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
          min: ({ max, min }) => {
            return Math.min(max / 2, 0.8 * min)
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
          name: 'AI Floor Price',
          type: 'line',
          smooth: true,
          datasetIndex: 0,
          encode: {
            x: 'time',
            y: 'aiFloorPrice'
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
      <ModuleTitle title={'Feed Histories'} />

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
  const { data, isFetching } = useCollectionFeedActivitiesQuery({ symbol: collection })

  const { isXs, isSm, isMd } = useMatchBreakpoints()

  return (
    <section>
      <ModuleTitle title={'Feed Activities'} />

      <FeedActivitiesTable
        pageSize={size}
        loading={isFetching}
        data={data?.slice((current - 1) * size, current * size)}
      />

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

export const CollectionFreeFeedsPage: React.FC = () => {
  const { accessToken } = useSolanaWalletBasedAuthentication()

  if (!accessToken) {
    return <Redirect to={'/free-feeds'} />
  }

  const { collection } = useParams()
  const { data } = useCollectionFreeFeedInfoQuery(collection)

  return (
    <Box>
      <Text gradient important bold fontSize={'min(48px, 7.5vw)'} mb={'24px'}>
        { data ? data.nftName : <Skeleton width={'400px'} height={'72px'} /> }
      </Text>
      <Grid gridTemplateColumns={'100%'} gap={'36px'}>
        <OverviewSection />
        <FeedHistorySection />
        <FeedActivitiesSection />
      </Grid>
    </Box>
  )
}
