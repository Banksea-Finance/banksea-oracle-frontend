import React from 'react'
import { Box, Button, ColumnsType, Flex, Table, Text } from '@banksea-finance/ui-kit'
import { FeedInfo, useFreeFeedsQuery } from '@/hooks/queries/free-feeds/useFreeFeedsQuery'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import usePageQuery from '@/hooks/usePageQuery'

const columns: ColumnsType<FeedInfo> = [
  {
    title: '#',
    render: (value, record: FeedInfo, index) => <Text minWidth={'48px'}>{index}</Text>,
    align: 'center',
    width: 70
  },
  {
    title: 'Collection',
    align: 'center',
    render: (value, record: FeedInfo) => (
      <Flex ai={'center'} jc={'center'}>
        <img src={record.imageUrl} style={{ width: '50px', height: '50px', borderRadius: '25px' }} alt={''} />
        <Text ml={'4px'}>{record.nftName}</Text>
      </Flex>
    )
  },
  {
    title: 'Floor Price',
    dataIndex: 'floorPrice',
    align: 'center',
    width: 140,
    render: value => value ? `${value} SOL` : '-',
  },
  {
    title: 'Avg Price(24h)',
    dataIndex: 'avgPrice',
    align: 'center',
    width: 180,
    render: value => value ? `${value} SOL` : '-',
  },
  {
    title: 'Feed Time',
    dataIndex: 'time',
    align: 'center',
    width: 180,
    render: value => value ? dayjs(value * 1000).format('YYYY/MM/DD HH:mm:ss') : '-',
  },
  {
    dataIndex: 'id',
    align: 'center',
    width: 140,
    render: value => value ? (
      <Flex jc={'center'}>
        <Button width={'60px'} as={Link} to={`/free-feeds/${value}`}>
          View
        </Button>
      </Flex>
    ): undefined,
  },
]

export const AllFreeFeedsPage: React.FC = () => {
  const pageQuery = usePageQuery()
  const { data } = useFreeFeedsQuery(pageQuery)

  return (
    <Flex jc={'center'}>
      <Box overflowX={'auto'} width={'100%'}>
        <Table
          scroll={{ x: 600 }}
          rowStyle={{
            height: '100px'
          }}
          columns={columns as any}
          data={data?.records}
        />
      </Box>
    </Flex>
  )
}
