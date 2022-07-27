import React, { Fragment } from 'react'
import { Box, Flex, Grid, Image, Skeleton, Text } from '@banksea-finance/ui-kit'
import { FeedInfo } from '@/hooks/queries/free-feeds/useFreeFeedsQuery'
import { BN } from '@project-serum/anchor'
import { fromLamports } from '@/utils'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { createColumnHelper, flexRender, getCoreRowModel, Table, useReactTable } from '@tanstack/react-table'
import { range } from 'lodash'
import { FreeFeedsCollectionQueryOrder } from '@/api/types'
import { ArrowDownSvg, ArrowUpSvg } from '@/components/svgs'

export type FreeFeedsTableProps = {
  data?: FeedInfo[]
  pageSize?: number
  loading?: boolean

  orders?: FreeFeedsCollectionQueryOrder[]
  onOrdersChange?: (orders: FreeFeedsCollectionQueryOrder[]) => void
}

const fakeAccount = {
  'floorPrice': new BN(1_234_567_000),
  'aiFloorPrice': new BN(1_234_567_000),
  'avgPrice': new BN(1_234_567_000),
  aggregateTime: new BN(1658460564)
}

export const FakeFreeFeedsData: FeedInfo[] = [
  {
    'id': 'moonly',
    'imageUrl': 'https://bafybeiek4gm4d5zsbgpaqjfd6xo5rfasdituixl4j4mx4b2yqqpvr2v3fu.ipfs.nftstorage.link/',
    'collectionTask': 'jtjFAPdqaxpM2Gjaot9SMgaLnmWJU1PPECTqzUZiK3G',
    'nftName': 'Moonly',
    'floorPrice': 0,
    'aiFloorPrice': 0,
    'avgPrice': 0,
    'time': 1658460564,
    'index': 1,
    'account': fakeAccount
  },
  {
    'id': 'portals',
    'collectionTask': 'jtjFAPdqaxpM2Gjaot9SMgaLnmWJU1PPECTqzUZiK3G',
    'imageUrl': 'https://boryokudragonz.io/dragonz-ani.gif',
    'nftName': 'Boryoku Dragonz',
    'floorPrice': 0,
    'aiFloorPrice': 0,
    'avgPrice': 0,
    'time': 1658460564,
    'index': 2,
    'account': fakeAccount
  },
  {
    'id': 'cets_milk_bottle',
    'collectionTask': '7AdBq5yUykXvsrBH3QpufkL9KdK11frJFmRkydC5zK3k',
    'imageUrl': 'https://dl.airtable.com/.attachmentThumbnails/483970a827af847e0b031c7d90d70baf/6cc644f1',
    'nftName': 'Stoned Ape Crew',
    'floorPrice': 0,
    'aiFloorPrice': 0,
    'avgPrice': 0,
    'time': 1658460564,
    'index': 3,
    'account': fakeAccount
  },
  {
    'id': 'cryptocoraltribe',
    'collectionTask': '9vve9FKs8wgD8n1BzyyLKncyXRL7WhbeB3n349ds1A1z',
    'imageUrl': 'https://creator-hub-prod.s3.us-east-2.amazonaws.com/atadians_pfp_1646721263627.gif',
    'nftName': 'OG Atadians',
    'floorPrice': 0,
    'aiFloorPrice': 0,
    'avgPrice': 0,
    'time': 1658460564,
    'index': 4,
    'account': fakeAccount
  },
  {
    'id': 'gemmy',
    'collectionTask': 'D8QikQ6b5C1pfk5UPaKsUyLweehZzRMbsWJodftugefy',
    'imageUrl': 'https://dl.airtable.com/.attachmentThumbnails/a1cff3a26aee69bf2ab0999d9da348b8/45ae349e',
    'nftName': 'Grim Syndicate',
    'floorPrice': 0,
    'aiFloorPrice': 0,
    'avgPrice': 0,
    'time': 1658460564,
    'index': 5,
    'account': fakeAccount
  },
  {
    'id': 'moonly',
    'imageUrl': 'https://bafybeiek4gm4d5zsbgpaqjfd6xo5rfasdituixl4j4mx4b2yqqpvr2v3fu.ipfs.nftstorage.link/',
    'collectionTask': 'jtjFAPdqaxpM2Gjaot9SMgaLnmWJU1PPECTqzUZiK3G',
    'nftName': 'Moonly',
    'floorPrice': 0,
    'aiFloorPrice': 0,
    'avgPrice': 0,
    'time': 1658460564,
    'index': 6,
    'account': fakeAccount
  },
  {
    'id': 'portals',
    'collectionTask': 'jtjFAPdqaxpM2Gjaot9SMgaLnmWJU1PPECTqzUZiK3G',
    'imageUrl': 'https://boryokudragonz.io/dragonz-ani.gif',
    'nftName': 'Boryoku Dragonz',
    'floorPrice': 0,
    'aiFloorPrice': 0,
    'avgPrice': 0,
    'time': 1658460564,
    'index': 7,
    'account': fakeAccount
  },
  {
    'id': 'cets_milk_bottle',
    'collectionTask': '7AdBq5yUykXvsrBH3QpufkL9KdK11frJFmRkydC5zK3k',
    'imageUrl': 'https://dl.airtable.com/.attachmentThumbnails/483970a827af847e0b031c7d90d70baf/6cc644f1',
    'nftName': 'Stoned Ape Crew',
    'floorPrice': 0,
    'aiFloorPrice': 0,
    'avgPrice': 0,
    'time': 1658460564,
    'index': 8,
    'account': fakeAccount
  },
  {
    'id': 'cryptocoraltribe',
    'collectionTask': '9vve9FKs8wgD8n1BzyyLKncyXRL7WhbeB3n349ds1A1z',
    'imageUrl': 'https://creator-hub-prod.s3.us-east-2.amazonaws.com/atadians_pfp_1646721263627.gif',
    'nftName': 'OG Atadians',
    'floorPrice': 0,
    'aiFloorPrice': 0,
    'avgPrice': 0,
    'time': 1658460564,
    'index': 9,
    'account': fakeAccount
  },
  {
    'id': 'gemmy',
    'collectionTask': 'D8QikQ6b5C1pfk5UPaKsUyLweehZzRMbsWJodftugefy',
    'imageUrl': 'https://dl.airtable.com/.attachmentThumbnails/a1cff3a26aee69bf2ab0999d9da348b8/45ae349e',
    'nftName': 'Grim Syndicate',
    'floorPrice': 0,
    'aiFloorPrice': 0,
    'avgPrice': 0,
    'time': 1658460564,
    'index': 10,
    'account': fakeAccount
  },
]

const columnHelper = createColumnHelper<FeedInfo>()

const priceRender = (value?: BN | number) => {
  if (typeof value === 'number') {
    return value ? `${value.toFixed(4)} SOL` : '0 SOL'
  }

  return value?.isZero() ? '0 SOL' : `${fromLamports(value)} SOL`
}

const _columns = [
  columnHelper.accessor('index', {
    header: '#',
    cell: props => <Text fontSize={'18px'}>{props.getValue()}</Text>,
  }),
  columnHelper.accessor(row => row, {
    header: 'Collection',
    cell: props => {
      const row = props.getValue()

      return (
        <Flex ai={'center'}>
          <Image src={row.imageUrl} width={'50px'} height={'50px'} borderRadius={'50%'} />
          <Text
            fontSize={'18px'}
            ml={'8px'}
            style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
          >
            {row.nftName}
          </Text>
        </Flex>
      )
    }
  }),
  columnHelper.accessor('floorPrice', {
    header: 'Floor Price',
    cell: props => <Text fontSize={'18px'}>{priceRender(props.getValue())}</Text>,
    meta: {
      field: 'floorPrice'
    }
  }),
  columnHelper.accessor('aiFloorPrice', {
    header: 'AI Floor Price',
    cell: props => <Text fontSize={'18px'}>{priceRender(props.getValue())}</Text>,
    meta: {
      field: 'aiFloorPrice'
    }
  }),
  columnHelper.accessor('avgPrice', {
    header: 'Avg Price(24h)',
    cell: props => <Text fontSize={'18px'}>{priceRender(props.getValue())}</Text>,
    meta: {
      field: 'avgPrice'
    }
  }),
  columnHelper.accessor('time', {
    header: 'Update Time',
    cell: props => {
      const value = props.getValue()
      return (
        <Text fontSize={'18px'} width={'160px'}>
          {value ? dayjs(value * 1000).format('YYYY/MM/DD HH:mm:ss') : '-'}
        </Text>
      )
    },
    meta: {
      field: 'time'
    }
  })
]

const TableRow = styled(Grid)`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 8px;
  align-items: center;
  
  border: 1px solid transparent;

  padding: 8px 24px 8px 24px;
  
  transition: all .38s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 15px 10px -7px #7864e699;
    cursor: pointer;
  }
`

const rowGridProps = {
  gridTemplateColumns: {
    sm: '48px minmax(270px, 1fr) repeat(3, 120px) 140px',
    _: '24px 160px repeat(3, 120px) 140px'
  },
  gap: '0 16px'
}

const renderTableHeaders = (
  table: Table<FeedInfo>,
  orders?: FreeFeedsCollectionQueryOrder[],
  onOrdersChange?: (orders: FreeFeedsCollectionQueryOrder[]) => void
) => {
  return (
    <Fragment>
      {
        table.getHeaderGroups().map(headerGroup => (
          <Grid
            width={'100%'}
            px={'24px'}
            mb={'4px'}
            {...rowGridProps}
            key={headerGroup.id}
          >
            {
              headerGroup.headers.map(header => {
                const meta = header.column.columnDef.meta as Record<string, any> | undefined
                const field = meta?.field
                const fieldOrder = orders?.find(o => o.field === field)

                const triggerSortChange = () => {
                  if (!onOrdersChange || !orders) return

                  if (fieldOrder) {
                    const index = orders.map(o => o.field).indexOf(field)

                    const cloned = [...orders]
                    const currentOrder = fieldOrder.order

                    if (currentOrder === 'descend') {
                      cloned.splice(index, 1, {
                        ...fieldOrder,
                        order: fieldOrder.order === 'descend' ? 'ascend' : 'descend'
                      })
                    } else {
                      cloned.splice(index, 1)
                    }

                    onOrdersChange(cloned)
                  } else {
                    onOrdersChange([
                      ...orders,
                      { field, order: 'descend' }
                    ])
                  }
                }

                const columnTitle = (
                  <Text color={'textDisabled'} fontSize={'14px'} bold key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header, {
                          ...header.getContext(),
                          key: header.column.id
                        }
                      )}
                  </Text>
                )

                return (
                  field ? (
                    <Flex key={header.id} ai={'center'} style={{ cursor: 'pointer' }} onClick={triggerSortChange}>
                      {
                        fieldOrder && (
                          <Box mr={'4px'}>
                            {fieldOrder.order === 'descend' ? <ArrowDownSvg /> : <ArrowUpSvg />}
                          </Box>
                        )
                      }
                      {columnTitle}
                    </Flex>
                  ) : columnTitle
                )
              })
            }
          </Grid>
        ))
      }
    </Fragment>
  )
}

const TableBody: React.FC<{ table: Table<FeedInfo> }> = ({ table }) => {
  return (
    <Grid gridTemplateColumns={'100%'} gap={'16px 0'} pb={'16px'}>
      {
        table.getRowModel().rows.map(row => (
          <TableRow
            width={'100%'}
            key={row.id}
            onClick={() => window.open(`/free-feeds/${row.original.id}`, '_blank')}
            {...rowGridProps}
          >
            {
              row.getVisibleCells().map(cell => (
                flexRender(cell.column.columnDef.cell, {
                  ...cell.getContext(),
                  key: cell.id
                })
              ))
            }
          </TableRow>
        ))
      }
    </Grid>
  )
}

const renderLoadingBody = (rows: number) => {
  return (
    <Grid gridTemplateColumns={'100%'} gap={'16px 0'} pb={'16px'}>
      {
        range(rows).map((o, index) => (
          <TableRow key={index}>
            <Skeleton width={'100%'} height={'50px'} />
          </TableRow>
        ))
      }
    </Grid>
  )
}

export const FreeFeedsTable: React.FC<FreeFeedsTableProps> = ({ data, loading, pageSize, orders, onOrdersChange }) => {
  const table = useReactTable({
    data: data || [],
    columns: _columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <Box overflowX={'auto'} width={'100%'}>
      <Box minWidth={'870px'}>
        {renderTableHeaders(table, orders, onOrdersChange)}
        {
          loading
            ? renderLoadingBody(pageSize || 5)
            : <TableBody table={table} />
        }
      </Box>
    </Box>
  )
}
