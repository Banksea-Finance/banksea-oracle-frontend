import React, { useCallback, useRef, useState, KeyboardEvent, MouseEvent } from 'react'
import {
  Box,
  Button,
  Flex,
  Input,
  Pagination,
  scales,
  Skeleton,
  Tag,
  Text, useMatchBreakpoints
} from '@banksea-finance/ui-kit'
import { useFreeFeedsQuery } from '@/hooks/queries/free-feeds/useFreeFeedsQuery'
import usePageQuery from '@/hooks/usePageQuery'
import { AiOutlineSearch } from 'react-icons/ai'
import { FreeFeedsTable } from '@/components/free-feeds-table'
import { useLocation } from 'react-router'
import { useStoredUrlQuery } from '@/hooks/useStoredUrlQuery'

export const AllFreeFeedsPage: React.FC = () => {
  const searchParams = new URLSearchParams(useLocation().search)

  const { isXs, isSm } = useMatchBreakpoints()
  const [search, setSearch] = useState(searchParams.get('search') || '')

  const inputRef = useRef<any>()
  const { current, size, handleChange } = usePageQuery({ size: 5 }, { keepInSearch: true })
  const { data: feeds, isFetching } = useFreeFeedsQuery({ current, size, search })

  const onSearch = useCallback((event: KeyboardEvent<HTMLDivElement> | MouseEvent) => {
    if ('code' in event && !inputRef.current) {
      inputRef.current = event.target
    }

    if (!('code' in event) || (event.code === 'Enter' || event.code === 'NumpadEnter')) {
      const val = inputRef.current.value
      setSearch(val)

    }
  }, [inputRef])

  useStoredUrlQuery({ search })

  return (
    <Box>
      <Flex jc={'space-between'} ai={'center'} mb={'24px'} flexWrap={'wrap'} gap={'4px 24px'}>
        <Flex ai={'center'} gap={'12px'}>
          <Text gradient important bold fontSize={'min(48px, 7.5vw)'}>
            Collections
          </Text>
          {
            feeds
              ? <Tag scale={scales.S} gradient p={{ _: '0 4px', sm: '0 20px' }} fontSize={'12px'}>Support {feeds.total} collections</Tag>
              : <Skeleton width={'171px'} height={'32px'} />
          }
        </Flex>

        <Input
          defaultValue={search}
          onKeyDown={onSearch}
          placeholder={'Search by collection name or slug...'}
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

      <FreeFeedsTable
        pageSize={size}
        loading={isFetching}
        data={feeds?.records}
      />

      <Flex mt={'16px'} jc={'space-between'} flexWrap={'wrap'} gap={'8px 0'}>
        <a href="">
          <Text fontSize={'14px'} color={'secondary'} style={{ textDecoration: 'underline' }}>
            Need more collections feeding?
          </Text>
        </a>

        <Pagination
          showSizeChanger={!isXs}
          pageSizeOptions={[5, 10, 20]}
          current={current}
          pageSize={size}
          total={feeds?.total}
          onChange={handleChange}
          showLessItems={isXs || isSm}
        />
      </Flex>
    </Box>
  )
}
