import React from 'react'
import { Box, ColumnsType, Flex, Pagination, scales, Skeleton, Table, Tag, Text } from '@banksea-finance/ui-kit'
import { FeedInfo, useFreeFeedsQuery } from '@/hooks/queries/free-feeds/useFreeFeedsQuery'
import usePageQuery from '@/hooks/usePageQuery'
import { useNavigate } from 'react-router-dom'
import { fromLamports } from '@/utils'
import dayjs from 'dayjs'

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
    render: value => value ? `${fromLamports(value)} SOL` : '-',
  },
  {
    title: 'Avg Price(24h)',
    dataIndex: ['account', 'avgPrice'],
    align: 'center',
    width: 180,
    render: value => value ? `${fromLamports(value)} SOL` : '-',
  },
  {
    title: 'Feed Time',
    dataIndex: ['account', 'aggregateTime'],
    align: 'center',
    width: 180,
    render: value => dayjs(value.toNumber() * 1000).format('YYYY/MM/DD HH:mm:ss')
  },
]

export const AllFreeFeedsPage: React.FC = () => {
  const navigate = useNavigate()
  const { current, size, handleChange } = usePageQuery({ size: 5 }, { keepInSearch: true })
  const { data: feeds, isFetching } = useFreeFeedsQuery({ current, size })

  return (
    <Box>
      <Flex ai={'center'} gap={'12px'} mb={'24px'}>
        <Text gradient important bold fontSize={'min(48px, 7.5vw)'}>
          Collections
        </Text>
        {feeds ? <Tag scale={scales.S} gradient>Support {feeds.total} collections</Tag> : <Skeleton width={'171px'} height={'32px'} />}
      </Flex>

      <Table
        pageSize={size}
        loading={isFetching}
        width={'100%'}
        scroll={{ x: 800 }}
        columns={columns as any}
        data={feeds?.records}
        rowKey={data => data.id}
        rowStyle={{ height: '100px', hoverBackground: '#7864e699' }}
        onRow={data => ({
          onClick: () => navigate(`/free-feeds/${data.id}`)
        })}
        components={{
          body: {
            row: (props: any) => <tr {...props} style={{ ...props.style, cursor: 'pointer' }} />
          }
        }}
      />

      <Flex mt={'16px'} jc={'space-between'} flexWrap={'wrap'}>
        <a href="">
          <Text fontSize={'14px'} color={'secondary'} style={{ textDecoration: 'underline' }}>
            Need more collections feeding?
          </Text>
        </a>

        <Pagination
          showSizeChanger
          pageSizeOptions={[5, 10, 20]}
          current={current}
          pageSize={size}
          total={feeds?.total}
          onChange={handleChange}
        />
      </Flex>
    </Box>
  )
}
