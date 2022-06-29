import React from 'react'
import {
  CollapsibleBoxPrimaryContentContainer,
  CollapsibleBoxSecondaryContentContainer,
  SecondaryText
} from '../index.style'
import useTokenDetailQuery from '@/hooks/queries/useTokenDetailQuery'
import moment from 'moment'
import { Flex, Text } from '@banksea-finance/ui-kit'

const TriggerParameters: React.FC = () => {
  const { data } = useTokenDetailQuery()

  return (
    <div>
      <CollapsibleBoxSecondaryContentContainer>
        <Flex>
          <SecondaryText>
            Heart beet
          </SecondaryText>
          <SecondaryText>
            Minimum response
          </SecondaryText>
        </Flex>
      </CollapsibleBoxSecondaryContentContainer>

      <CollapsibleBoxPrimaryContentContainer>
        <Flex>
          <Text fontSize={'24px'} color={'primary'} bold>
            {data?.heartbeat ? (
              moment(Date.now() + data.heartbeat).fromNow()
            ) : '-'}
          </Text>
          <Text fontSize={'24px'} color={'primary'} bold>
            {data?.minRsp || '-'}
          </Text>
        </Flex>
      </CollapsibleBoxPrimaryContentContainer>
    </div>
  )
}

export default TriggerParameters
