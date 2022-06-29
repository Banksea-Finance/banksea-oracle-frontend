import React from 'react'
import { CollapsibleBoxPrimaryContentContainer } from '@/pages/token/index.style'
import { Flex, Text } from '@banksea-finance/ui-kit'
import price from '@/images/icon/tokenDetail/price.svg'
import { getCurrencyIcon } from '@/utils'
import useTokenDetailQuery from '@/hooks/queries/useTokenDetailQuery'

const LatestValuation: React.FC = () => {
  const { data } = useTokenDetailQuery()

  return (
    <div >
      <CollapsibleBoxPrimaryContentContainer>
        <Flex>
          <img src={price} />
          <Flex>
            <img src={getCurrencyIcon(data?.chainSource)} style={{ width: '20px', marginRight: '5px' }} />
            <Text fontSize={'40px'} bold>
              {data?.answer || '-'}
            </Text>
          </Flex>
        </Flex>
      </CollapsibleBoxPrimaryContentContainer>
    </div>
  )
}

export default LatestValuation
