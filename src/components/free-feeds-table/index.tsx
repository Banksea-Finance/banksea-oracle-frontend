import React from 'react'
import { ColumnsType, Flex, Table, Text } from '@banksea-finance/ui-kit'
import { TableProps } from '@banksea-finance/ui-kit/dist/components/Table/types'
import { FeedInfo } from '@/hooks/queries/free-feeds/useFreeFeedsQuery'
import { useNavigate } from 'react-router-dom'
import { BN } from '@project-serum/anchor'
import { fromLamports } from '@/utils'
import dayjs from 'dayjs'

export type FreeFeedsTableProps = TableProps<FeedInfo>

const columns: ColumnsType<FeedInfo> = [
  {
    title: '#',
    dataIndex: 'index',
    render: value => <Text minWidth={'48px'}>{value}</Text>,
    align: 'center',
    width: 70
  },
  {
    title: 'Collection',
    align: 'left',
    render: (value, record: FeedInfo) => (
      <Flex ai={'center'} width={'max(160px, 26vw)'} ml={'-12px'}>
        <img src={record.imageUrl} style={{ width: '50px', height: '50px', borderRadius: '25px' }} alt={''} />
        <Text
          ml={'8px'}
          style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        >
          {record.nftName}
        </Text>
      </Flex>
    )
  },
  {
    title: 'Floor Price',
    dataIndex: ['account', 'floorPrice'],
    align: 'center',
    width: 140,
    render: (value: BN) => !value?.isZero() ? `${fromLamports(value)} SOL` : '-',
  },
  {
    title: 'AI Floor Price',
    dataIndex: ['account', 'aiFloorPrice'],
    align: 'center',
    width: 140,
    render: value => !value?.isZero() ? `${fromLamports(value)} SOL` : '-',
  },
  {
    title: 'Avg Price(24h)',
    dataIndex: ['account', 'avgPrice'],
    align: 'center',
    width: 180,
    render: value => !value?.isZero() ? `${fromLamports(value)} SOL` : '-',
  },
  {
    title: 'Feed Time',
    dataIndex: ['account', 'aggregateTime'],
    align: 'center',
    width: 180,
    render: value => value ? dayjs(value.toNumber() * 1000).format('YYYY/MM/DD HH:mm:ss') : '-'
  },
]

export const FreeFeedsTable: React.FC<FreeFeedsTableProps> = props => {
  const navigate = useNavigate()
  return (
    <Table
      {...props}
      columns={columns}
      width={'100%'}
      scroll={{ x: 960 }}
      rowKey={data => data.id}
      rowStyle={{ height: '100px' }}
      onRow={data => ({
        onClick: () => data.id && navigate(`/free-feeds/${data.id}`)
      })}
    />
  )
}
