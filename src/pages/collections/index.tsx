import React, { useMemo, useState } from 'react'
import { Avatar, Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom'
import usePageQuery from '@/hooks/usePageQuery'
import { CollectionsListContainer, Description, Line, Title } from './index.style'
import { ReactComponent as DropdownIcon } from '@/images/icon/dropdown.svg'
import useCollectionFeedsQuery, {
  CollectionFeed,
  CollectionFeedFilterType
} from '@/hooks/queries/useCollectionFeedsQuery'
import { useLocationQuery } from '@/hooks/useLocationQuery'
import Flex from '@react-css/flex'
import { Image, PageWrapper, Table, Text } from '@/libs/uikit/components'
import moment from 'moment'
import { DefaultTimeFormat } from '@/utils/constant'
import { getCurrencyIcon, numberWithCommas } from '@/utils'

const CollectionsListPage: React.FC = () => {
  const typeFromQuery = useLocationQuery('type')
  const [type, setType] = useState<CollectionFeedFilterType>((typeFromQuery as CollectionFeedFilterType) || 'popular')

  const { current, size, handleChange } = usePageQuery({ size: 5 })
  const { data, isLoading } = useCollectionFeedsQuery({ current, size }, type)

  const overlay = useMemo(() => {
    if (type === 'popular') {
      return (
        <Menu.Item onClick={() => setType('recent')}>
          Recent
        </Menu.Item>
      )
    }

    return (
      <Menu.Item onClick={() => setType('popular')}>
        Popular
      </Menu.Item>
    )
  }, [type])

  return (
    <CollectionsListContainer>
      <PageWrapper>
        <Title>
          Most { type }
          <Dropdown overlay={<Menu>{overlay}</Menu>} trigger={['click']}>
            <DropdownIcon width={'20px'} height={'20px'} fill={'#666'} style={{ marginRight: '20px', cursor: 'pointer' }} />
          </Dropdown>
          feeds
        </Title>
        <Line />
        <Description>Explore the most { type } feeds on Banksea Data Feeds</Description>
        <Table
          loading={isLoading}
          rowKey={'slug'}
          dataSource={data?.records}
          pagination={{ total: data?.total, current, pageSize: size, onChange: handleChange, showSizeChanger: true }}
        >
          <Table.Column
            title={'Collection'}
            width={'300px'}
            render={(_, record: CollectionFeed) => (
              <Link to={`/collection/${record.slug}`}>
                <Flex alignItemsCenter>
                  <Avatar src={record.image} alt="" style={{ marginRight: '10px' }} />
                  <div>
                    <Text color={'textDisabled'} fontSize={'16px'} bold>{record.nftName}</Text>
                    <Text color={'secondary'} bold>{record.announceNumber}</Text>
                  </div>
                </Flex>
              </Link>
            )}
          />
          <Table.Column
            title={'Last feed time'}
            render={(_, record: CollectionFeed) => (
              moment(record.lastUpdate).format(DefaultTimeFormat)
            )}
          />
          <Table.Column
            title={'Total valuation'}
            render={(_, record: CollectionFeed) => (
              <Flex alignItemsCenter>
                <Image src={getCurrencyIcon(record.chainSource)} width={'15px'} height={'15px'} mr={'5px'} />
                <Text>{numberWithCommas(record.valuation)}</Text>
              </Flex>
            )}
          />
          <Table.Column title={'Network'} dataIndex={'chainSource'} />
          <Table.Column
            title={'Added'}
            render={(_, { addTime }: CollectionFeed) => (
              <Text>{moment(addTime).format('DD/MM/YYYY')}</Text>
            )}
          />
        </Table>
      </PageWrapper>
    </CollectionsListContainer>
  )
}

export default CollectionsListPage
