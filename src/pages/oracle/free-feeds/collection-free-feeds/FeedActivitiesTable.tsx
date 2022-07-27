import React, { Fragment } from 'react'
import { Box, Grid, Skeleton, Text } from '@banksea-finance/ui-kit'
import { shortenAddress } from '@/utils'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { createColumnHelper, flexRender, getCoreRowModel, Table, useReactTable } from '@tanstack/react-table'
import { range } from 'lodash'
import { CollectionFeedActivity } from '@/hooks/queries/free-feeds/useCollectionFeedActiviesQuery'

export type FeedActivitiesTableProps = {
  data?: CollectionFeedActivity[]
  pageSize?: number
  loading?: boolean
}

const columnHelper = createColumnHelper<CollectionFeedActivity>()

const priceRender = (value?: number) => value ? `${value.toFixed(4)} SOL` : '0 SOL'

const _columns = [
  columnHelper.accessor('signature', {
    header: 'Tx Hash',
    cell: props => {
      const value = props.getValue()

      return (
        <Grid gridTemplateColumns={'repeat(3, auto)'} jc={'flex-start'} ai={'center'} gap={'4px'}>
          <a href={`https://solscan.io/tx/${value}?cluster=devnet`} target={'_blank'} rel="noreferrer">
            <img src="https://solscan.io/favicon.ico" alt="Solscan" style={{ width: '20px', height: '20px' }} />
          </a>
          <a href={`https://explorer.solana.com/tx/${value}?cluster=devnet`} target={'_blank'} rel="noreferrer">
            <img src="https://explorer.solana.com/favicon.ico"
              alt="Solana Explorer"
              style={{ width: '20px', height: '20px' }}
            />
          </a>
          <Text textAlign={'end'} fontSize={'18px'}>{shortenAddress(value)}</Text>
        </Grid>
      )
    }
  }),
  columnHelper.accessor('floorPrice', {
    header: 'Floor Price',
    cell: props => <Text fontSize={'18px'}>{priceRender(props.getValue())}</Text>
  }),
  columnHelper.accessor('aiFloorPrice', {
    header: 'AI Floor Price',
    cell: props => <Text fontSize={'18px'}>{priceRender(props.getValue())}</Text>
  }),
  columnHelper.accessor('avgPrice', {
    header: 'Avg Price(24h)',
    cell: props => <Text fontSize={'18px'}>{priceRender(props.getValue())}</Text>
  }),
  columnHelper.accessor('time', {
    header: 'Feed Time',
    cell: props => {
      const value = props.getValue()
      return (
        <Text fontSize={'18px'}>
          {value ? dayjs(value * 1000).format('MM/DD HH:mm:ss') : '-'}
        </Text>
      )
    }
  })
]

const TableRow = styled(Grid)`
  height: 64px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 8px;
  align-items: center;
  
  border: 1px solid transparent;

  padding: 8px 24px 8px 24px;
  
  transition: all .38s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 15px 10px -7px #7864e699;
  }
`

const rowGridProps = {
  gridTemplateColumns: '1fr repeat(3, 120px) 140px',
  gap: '0 16px'
}

const renderTableHeaders = (table: Table<CollectionFeedActivity>) => {
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
              headerGroup.headers.map(header => (
                <Text
                  key={header.id}
                  fontSize={'14px'}
                  fontWeight={'bold'}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </Text>
              ))
            }
          </Grid>
        ))
      }
    </Fragment>
  )
}

const TableBody: React.FC<{ table: Table<CollectionFeedActivity> }> = ({ table }) => {
  return (
    <Grid gridTemplateColumns={'100%'} gap={'16px 0'} pb={'16px'}>
      {
        table.getRowModel().rows.map(row => (
          <TableRow
            width={'100%'}
            key={row.id}
            {...rowGridProps}
          >
            {
              row.getVisibleCells().map(cell => (
                flexRender(cell.column.columnDef.cell, {
                  ...cell.getContext(),
                  key: cell.id,
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

export const FeedActivitiesTable: React.FC<FeedActivitiesTableProps> = ({ data, loading, pageSize }) => {
  const table = useReactTable({
    data: data || [],
    columns: _columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <Box overflowX={'auto'} width={'100%'}>
      <Box minWidth={'870px'}>
        {renderTableHeaders(table)}
        {
          loading
            ? renderLoadingBody(pageSize || 5)
            : <TableBody table={table} />
        }
      </Box>
    </Box>
  )
}
