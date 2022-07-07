import React from 'react'
import { Box, ColumnsType, Flex, Pagination, Skeleton, Table, Text } from '@banksea-finance/ui-kit'
import { FeedInfo, useFreeFeedsQuery } from '@/hooks/queries/free-feeds/useFreeFeedsQuery'
import dayjs from 'dayjs'
import usePageQuery from '@/hooks/usePageQuery'
import { useNavigate } from 'react-router-dom'

const columns: ColumnsType<FeedInfo> = [
  {
    title: '#',
    render: value => <Text minWidth={'48px'}>{value}</Text>,
    dataIndex: 'index',
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
  /* {
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
  },*/
]

export const AllFreeFeedsPage: React.FC = () => {
  const navigate = useNavigate()
  const { current, size, handleChange } = usePageQuery({ size: 5 }, { keepInSearch: true })
  const { data, isFetching } = useFreeFeedsQuery({ current, size })

  return (
    <Box>
      <Box overflowX={'auto'} width={'100%'}>
        {
          isFetching ? (
            <Skeleton width={'100%'} height={'500px'} />
          ) : (
            <Table
              scroll={{ x: 850 }}
              columns={columns as any}
              data={data?.records}
              rowKey={data => data.id}
              rowStyle={{
                height: '100px',
                hoverBackground: '#7864e699'
              }}
              onRow={data => ({
                onClick: () => navigate(`/free-feeds/${data.id}`)
              })}
              components={{
                body: {
                  row: (props: any) => <tr {...props} style={{ ...props.style, cursor: 'pointer' }} />
                }
              }}
            />
          )
        }
      </Box>

      <Flex mt={'16px'} jc={'flex-end'}>
        <Pagination
          showSizeChanger
          pageSizeOptions={[5, 10, 20]}
          current={current}
          pageSize={size}
          total={data?.total}
          onChange={handleChange}
        />
      </Flex>
    </Box>
  )
}
