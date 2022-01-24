import React, { useMemo } from 'react'
import { Flex } from '@react-css/flex'
import { CollapsibleBox, Text } from '@/libs/uikit/components'
import useTokenDetailQuery from '@/hooks/queries/useTokenDetailQuery'
import { CollapsibleBoxPrimaryContentContainer } from '../index.style'
import { LinkOutlined } from '@ant-design/icons'

const AssetAddress: React.FC = () => {
  const { data } = useTokenDetailQuery()

  const reportUrl = useMemo(() => {
    if (!data) {
      return undefined
    }

    return `https://solscan.io/account/${data?.asset}?cluster=devnet`
  }, [data])

  return (
    <CollapsibleBox
      title="Asset address"
      collapsible={false}
      titleIcon={<img src={require('@/images/icon/tokenDetail/contractAddress.svg').default} alt="detail" />}
      style={{ marginTop: '20px' }}
    >
      <CollapsibleBoxPrimaryContentContainer>
        <Flex alignItemsCenter>
          <a href={reportUrl} target={'_blank'} rel="noreferrer">
            <Flex alignItemsCenter>
              <LinkOutlined />
              <Text ml={'5px'} fontSize={'20px'} bold>{data?.asset}</Text>
            </Flex>
          </a>
        </Flex>
      </CollapsibleBoxPrimaryContentContainer>
    </CollapsibleBox>
  )
}

export default AssetAddress
