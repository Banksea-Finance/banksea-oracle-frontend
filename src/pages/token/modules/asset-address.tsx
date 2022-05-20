import React, { useMemo } from 'react'
import { Text, Flex } from '@banksea-finance/ui-kit'
import useTokenDetailQuery from '@/hooks/queries/useTokenDetailQuery'
import { CollapsibleBoxPrimaryContentContainer } from '../index.style'

const AssetAddress: React.FC = () => {
  const { data } = useTokenDetailQuery()

  const reportUrl = useMemo(() => {
    if (!data) {
      return undefined
    }

    return `https://solscan.io/account/${data?.asset}?cluster=devnet`
  }, [data])

  return (
    <CollapsibleBoxPrimaryContentContainer>
      <Flex>
        <a href={reportUrl} target={'_blank'} rel="noreferrer">
          <Flex>
            <Text ml={'5px'} fontSize={'20px'} bold>{data?.asset}</Text>
          </Flex>
        </a>
      </Flex>
    </CollapsibleBoxPrimaryContentContainer>
  )
}

export default AssetAddress
