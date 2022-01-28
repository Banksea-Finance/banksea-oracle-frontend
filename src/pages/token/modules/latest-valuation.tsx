import React from 'react'
import { CollapsibleBoxPrimaryContentContainer } from '@/pages/token/index.style'
import { Flex } from '@react-css/flex'
import { CollapsibleBox, Image, Text } from '@/libs/uikit/components'
import trustAnswerIcon from '@/images/icon/tokenDetail/trustAnswer.svg'
import price from '@/images/icon/tokenDetail/price.svg'
import { getCurrencyIcon } from '@/utils'
import useTokenDetailQuery from '@/hooks/queries/useTokenDetailQuery'

const LatestValuation: React.FC = () => {
  const { data } = useTokenDetailQuery()

  return (
    <CollapsibleBox
      title="Latest Valuation"
      collapsible={false}
      titleIcon={<img src={trustAnswerIcon} alt="detail" />}
      style={{ marginTop: '14px' }}
    >
      <CollapsibleBoxPrimaryContentContainer>
        <Flex alignItemsCenter>
          <Image src={price} width={'30px'} height={'30px'} mr={'10px'} />
          <Flex row alignItemsCenter>
            <img src={getCurrencyIcon(data?.chainSource)} style={{ width: '20px', marginRight: '5px' }} />
            <Text fontSize={'40px'} bold>
              {data?.answer || '-'}
            </Text>
          </Flex>
        </Flex>
      </CollapsibleBoxPrimaryContentContainer>
    </CollapsibleBox>
  )
}

export default LatestValuation
