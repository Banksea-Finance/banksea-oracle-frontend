import React, { useCallback, useMemo, useRef, useState } from 'react'
import { ModuleTitle } from '@/components/ModuleTitle'
import {
  Box,
  ButtonMenu,
  Card,
  Image,
  Flex,
  Grid,
  Pagination,
  scales,
  Skeleton,
  Text,
  useMatchBreakpoints
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
import { QuestionMarkSvg } from '@/components/svgs'
import ReactTooltip from 'react-tooltip'
import { FeedActivitiesTable } from '@/pages/oracle/free-feeds/collection-free-feeds/FeedActivitiesTable'
import { Redirect } from '@/pages'
import { useSolanaWalletBasedAuthentication } from '@/contexts/solana-wallet-based-authtication'
import { Element, scroller } from 'react-scroll'
import BigNumber from 'bignumber.js'
import CopyToClipboard from 'react-copy-to-clipboard'
import { FREE_FEEDS_PAGE_PATH } from '@/pages/oracle/free-feeds'

const OverviewsContainer = styled(Card)`
  margin-bottom: 16px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;

  .part__2 > div {
    padding: 0 24px;
  }


  ${({ theme }) => theme.mediaQueries.minXl} {
    padding: 20px 0 20px 40px;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    .part__1 {
      flex: 1;
      width: 100%;
      overflow-x: hidden;
    }

    .part__2 {
      display: flex;
      width: fit-content;
      margin-left: 8px;

      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border-width: 2px;
        border-style: solid;
        border-right: 0;
        border-image: linear-gradient(to bottom,
        ${({ theme }) => `${theme.colors.primary}00`},
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => `${theme.colors.primary}00`}) 1 1;
      }
    }
  }

  ${({ theme }) => theme.mediaQueries.maxXl} {
    padding: 20px 16px 20px 16px;
    flex-direction: column;
    align-items: center;

    .part__1 {
      width: 100%;
      padding-bottom: 8px;
      margin-bottom: 12px;

      border-width: 2px;
      border-style: solid;
      border-top: 0;
      border-image: linear-gradient(to right,
      ${({ theme }) => `${theme.colors.primary}00`},
      ${({ theme }) => theme.colors.primary}cc,
      ${({ theme }) => `${theme.colors.primary}00`}) 1 0 100%;
    }

    .part__2 {
      display: grid;
      grid-template-columns: repeat(4, max-content);


      & > div:not(:nth-child(1)) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border-width: 2px;
        border-style: solid;
        border-right: 0;
        border-image: linear-gradient(to bottom,
        ${({ theme }) => `${theme.colors.primary}00`},
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => `${theme.colors.primary}00`}) 1 1;
      }
    }
  }

  ${({ theme }) => theme.mediaQueries.maxMd} {
    flex-direction: column;
    align-items: center;

    .part__2 {
      display: grid;
      grid-template-columns: repeat(2, max-content);

      & > div {
        padding: 0 12px;
        width: 100%;
      }

      & > div:nth-child(3) {
        border-left: 0;
      }
    }
  }

`

function OverviewItem<DataType>({
  title,
  description,
  ...rest
}: { title: React.ReactNode, description?: React.ReactNode } & QueriedDataProps<DataType>) {
  return (
    <Flex width={'100%'} flexDirection={'column'} ai={{ xl: 'start', _: 'center' }}>
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

      <QueriedData {...rest} fontSize={'18px'} />
    </Flex>
  )
}

const OverviewSection: React.FC = () => {
  const { collection } = useParams()
  const info = useCollectionFreeFeedInfoQuery(collection)

  const collectionTaskAccount = useQueryCollectionTaskAccount(info.data?.collectionTask)
  const copyTooltipRef = useRef<any>()

  return (
    <section>
      <ModuleTitle title={'Overview'} />

      <OverviewsContainer>
        <div className="part__1">
          <OverviewItem
            title={'Feed Account'}
            description={'The on-chain Account which save the aggregated data. \nYou can use it on your contracts to get the feed data.'}
            value={info}
            dataRender={({ collectionTask: value }) => (
              <Grid gridTemplateColumns={'repeat(3, auto)'} jc={{ _: 'center', xl: 'flex-start' }} ai={'center'} gap={'8px'} width={'100%'}>
                <CopyToClipboard text={value} onCopy={() => ReactTooltip.show(copyTooltipRef.current)}>
                  <Text
                    fontSize={'18px'}
                    ref={ref => copyTooltipRef.current = ref}
                    data-tip="true"
                    data-for={`copy-for-${value}`}
                    textAlign={'center'}
                    style={{ cursor: 'pointer', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflowX: 'hidden' }}
                  >
                    {value}
                  </Text>
                </CopyToClipboard>
                <a href={`https://solscan.io/account/${value}?cluster=devnet`} target={'_blank'} rel="noreferrer">
                  <Image src="https://solscan.io/favicon.ico" alt="Solscan" width={'20px'} height={'20px'} />
                </a>
                <a
                  href={`https://explorer.solana.com/account/${value}?cluster=devnet`}
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <Image src="https://explorer.solana.com/favicon.ico" width={'20px'} height={'20px'} />
                </a>


                <ReactTooltip
                  id={`copy-for-${value}`}
                  className={'custom-tooltip'}
                  aria-haspopup="true"
                  event={'click'}
                  afterShow={() => setTimeout(ReactTooltip.hide, 750)}
                >
                  <Text>Copy success!</Text>
                </ReactTooltip>
              </Grid>
            )}
          />
        </div>

        <div className="part__2">
          <OverviewItem
            title={'Floor Price'}
            description={'Minimum listing price of this collection on marketplace.'}
            value={collectionTaskAccount}
            dataRender={({ floorPrice }) => !floorPrice?.isZero() ? `${fromLamports(floorPrice)} SOL` : '0 SOL'}
          />
          <OverviewItem
            title={'AI Floor Price'}
            description={'The minimum AI valuation of this collection.'}
            value={collectionTaskAccount}
            dataRender={({ aiFloorPrice }) => !aiFloorPrice?.isZero() ? `${fromLamports(aiFloorPrice)} SOL` : '0 SOL'}
          />
          <OverviewItem
            title={'Avg Price(24h)'}
            description={'Average price traded in 24 hours'}
            value={collectionTaskAccount}
            dataRender={({ avgPrice }) => !avgPrice?.isZero() ? `${fromLamports(avgPrice)} SOL` : '0 SOL'}
          />
          <OverviewItem
            title={'Update Time'}
            description={'Time of Oracle data aggregation.'}
            value={collectionTaskAccount}
            dataRender={({ aggregateTime }) => dayjs(aggregateTime.toNumber() * 1000).format('YYYY/MM/DD HH:mm:ss')}
          />
        </div>

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
        backgroundColor: 'rgb(30, 40, 100)',
        textStyle: {
          color: '#fff'
        },
        borderColor: 'transparent'
      },
      dataset: [
        {
          source: data?.map(o => ({
            ...o,
            time: o.time * 1000
          }))?.filter(o => o.avgPrice || o.floorPrice || o.aiFloorPrice) || []
        }
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
            const range = new BigNumber(max - min)
            let decimals: number

            if (max <= 1 || range.lte(1)) {
              decimals =  4
            } else if (max <= 10 || range.lte(10)) {
              decimals = 2
            } else {
              decimals = 0
            }

            return new BigNumber(min).minus(range.multipliedBy('0.15')).toFixed(decimals, BigNumber.ROUND_DOWN)
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

  const onChange = useCallback((page: number, pageSize: number) => {
    scroller.scrollTo('feed-activities-title', { duration: 250, smooth: true })
    handleChange(page, pageSize)
  }, [handleChange])

  return (
    <section>
      <Element name={'feed-activities-title'}>
        <ModuleTitle title={'Feed Activities'} />
      </Element>

      <FeedActivitiesTable
        pageSize={size}
        loading={isFetching}
        data={data?.slice((current - 1) * size, current * size)}
      />

      <Flex mt={'16px'} jc={'flex-end'}>
        <Pagination
          showLessItems={isXs || isSm || isMd}
          showSizeChanger
          current={current}
          pageSize={size}
          total={data?.length}
          onChange={onChange}
        />
      </Flex>
    </section>
  )
}

export const CollectionFreeFeedsPage: React.FC = () => {
  const { accessToken } = useSolanaWalletBasedAuthentication()

  if (!accessToken) {
    return <Redirect to={FREE_FEEDS_PAGE_PATH} />
  }

  const { collection } = useParams()
  const { data, error } = useCollectionFreeFeedInfoQuery(collection)

  if (data === null || error) {
    return <Redirect to={FREE_FEEDS_PAGE_PATH} />
  }

  return (
    <Box>
      {data
        ? (
          <Flex ai={'center'} mb={'24px'}>
            <Image
              src={data?.imageUrl}
              width={'calc(min(48px, 7.5vw) * 2)'}
              height={'calc(min(48px, 7.5vw) * 2)'}
              borderRadius={'50%'}
              mr={'16px'}
            />
            <Text gradient important bold fontSize={'min(48px, 7.5vw)'}>
              { data.nftName }
            </Text>
          </Flex>
        )
        : <Skeleton width={'400px'} height={'72px'} />}

      <Grid gridTemplateColumns={'100%'} gap={'36px'}>
        <OverviewSection />
        <FeedHistorySection />
        <FeedActivitiesSection />
      </Grid>
    </Box>
  )
}
