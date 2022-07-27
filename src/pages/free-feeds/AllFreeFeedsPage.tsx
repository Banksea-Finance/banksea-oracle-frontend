import React, { useCallback, useRef, useState, KeyboardEvent, MouseEvent, useEffect } from 'react'
import {
  Box, Button,
  Flex, Grid, Input,
  Pagination,
  scales,
  Tag,
  Text, useMatchBreakpoints
} from '@banksea-finance/ui-kit'
import { useFreeFeedsQuery } from '@/hooks/queries/free-feeds/useFreeFeedsQuery'
import usePageQuery from '@/hooks/usePageQuery'
import { FakeFreeFeedsData, FreeFeedsTable } from '@/components/free-feeds-table'
import { useLocation } from 'react-router'
import { WhitelistRequiredContentWrapper } from '@/components/whitelist-required-content-wrapper'
import { Element, scroller } from 'react-scroll'
import { FreeFeedsCollectionQueryOrder } from '@/api/types'
import { AiOutlineSearch } from 'react-icons/ai'

export const AllFreeFeedsPage: React.FC = () => {
  const searchParams = new URLSearchParams(useLocation().search)

  const { isXs, isSm } = useMatchBreakpoints()
  const [search, setSearch] = useState(searchParams.get('search') || '')

  const inputRef = useRef<any>()
  const { current, size, handleChange } = usePageQuery({ size: 10 })
  const [total, setTotal] = useState<number>()

  const [orders, setOrders] = useState<FreeFeedsCollectionQueryOrder[]>([{ order: 'descend', field: 'aiFloorPrice' }])

  const { data: feeds, isFetching } = useFreeFeedsQuery({ current, size, search, orders })

  const onChange = useCallback((page: number, pageSize: number) => {
    scroller.scrollTo('free-feeds-explorer-title', { duration: 250, smooth: true })
    handleChange(page, pageSize)
  }, [handleChange])

  const onSearch = useCallback((event: KeyboardEvent<HTMLDivElement> | MouseEvent) => {
    if ('code' in event && !inputRef.current) {
      inputRef.current = event.target
    }

    if (!('code' in event) || (event.code === 'Enter' || event.code === 'NumpadEnter')) {
      const val = inputRef.current.value
      handleChange(1)
      setSearch(val)
    }
  }, [inputRef])

  useEffect(() => {
    setTotal(prev => {
      if (!prev && feeds?.total) return feeds.total

      return prev
    })
  }, [feeds])

  return (
    <Box width={'100%'}>
      <Element name={'free-feeds-explorer-title'} width={'100%'}>
        <Grid ai={'center'} jc={'space-between'} gap={'4px 12px'} gridTemplateColumns={{ _: 'max-content', md: 'auto auto' }} mb={'8px'} width={'100%'}>
          <Text gradient important bold fontSize={'max(20px, min(48px, 6vw))'}>
            Free Feeds Explorer
          </Text>
          {
            total
              ? <Tag scale={scales.S} gradient p={{ _: '0 4px', sm: '0 20px' }} fontSize={'14px'}>Support {total} collections</Tag>
              : <></>
          }
        </Grid>
      </Element>

      <Flex jc={'flex-end'} mb={'24px'}>
        <Input
          defaultValue={search}
          onKeyDown={onSearch}
          placeholder={'Search by collection name'}
          endAdornment={
            <Button
              ml={'8px'}
              p={'12px'}
              onClick={onSearch}
              style={{ background: 'linear-gradient(180deg, rgb(120, 100, 230) 0%, rgb(210, 90, 230) 55%)' }}
            >
              <AiOutlineSearch size={18} />
            </Button>
          }
          suffixGap={'0'}
        />
      </Flex>

      <WhitelistRequiredContentWrapper
        suspendHeight={'890px'}
        content={
          <FreeFeedsTable
            orders={orders}
            onOrdersChange={setOrders}
            pageSize={size}
            loading={isFetching}
            data={feeds?.records}
          />
        }
        suspense={
          <FreeFeedsTable data={FakeFreeFeedsData} />
        }
      />

      <Flex mt={'16px'} jc={'space-between'} flexWrap={'wrap'} gap={'8px 0'}>
        <a href="https://c2dtw7wmuwa.typeform.com/to/k4yiiPHi" target={'_blank'} rel="noreferrer">
          <Text fontSize={'16px'} color={'secondary'} style={{ textDecoration: 'underline' }}>
            Need more collections feeding?
          </Text>
        </a>

        <Pagination
          showSizeChanger={!isXs}
          pageSizeOptions={[5, 10, 20]}
          current={current}
          pageSize={size}
          total={feeds?.total}
          onChange={onChange}
          showLessItems={isXs || isSm}
        />
      </Flex>
    </Box>
  )
}
