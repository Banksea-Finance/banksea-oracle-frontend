import React from 'react'
import triggerParameters from '@/images/icon/tokenDetail/triggerParameters.svg'
import {
  CollapsibleBoxPrimaryContentContainer,
  CollapsibleBoxSecondaryContentContainer,
  SecondaryText
} from '@/pages/token/index.style'
import { Flex } from '@react-css/flex'
import { CollapsibleBox } from '@/libs/uikit/components'
import useTokenDetailQuery from '@/hooks/queries/useTokenDetailQuery'
import moment from 'moment'
import Text from '@/libs/uikit/components/Text/Text'

const TriggerParameters: React.FC = () => {
  const { data } = useTokenDetailQuery()

  return (
    <CollapsibleBox
      title="Trigger parameters"
      collapsible={false}
      titleIcon={<img src={triggerParameters} alt="detail" />}
      style={{ marginTop: '20px' }}
    >
      <CollapsibleBoxSecondaryContentContainer>
        <Flex>
          <Flex.Item flex={1}>
            <SecondaryText>
              Heart beet
            </SecondaryText>
          </Flex.Item>
          <Flex.Item flex={1}>
            <SecondaryText>
              Minimum response
            </SecondaryText>
          </Flex.Item>
        </Flex>
      </CollapsibleBoxSecondaryContentContainer>

      <CollapsibleBoxPrimaryContentContainer>
        <Flex>
          <Flex.Item flex={1}>
            <Text fontSize={'24px'} color={'primary'} bold>
              {data?.heartbeat ? (
                moment(Date.now() + data.heartbeat).fromNow()
              ) : '-'}
            </Text>
          </Flex.Item>
          <Flex.Item flex={1}>
            <Text fontSize={'24px'} color={'primary'} bold>
              {data?.minRsp || '-'}
            </Text>
          </Flex.Item>
        </Flex>
      </CollapsibleBoxPrimaryContentContainer>
    </CollapsibleBox>
  )
}

export default TriggerParameters
