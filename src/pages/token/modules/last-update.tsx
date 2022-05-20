import React from 'react'
import moment from 'moment'
import {  Text } from '@banksea-finance/ui-kit'
import useTokenDetailQuery from '@/hooks/queries/useTokenDetailQuery'
import { DefaultTimeFormat } from '@/utils/constant'
import {
  CollapsibleBoxPrimaryContentContainer,
  CollapsibleBoxSecondaryContentContainer,
  SecondaryText
} from '../index.style'

const LastUpdate: React.FC = () => {
  const { data } = useTokenDetailQuery()

  return (
    <div >
      <CollapsibleBoxSecondaryContentContainer>
        <SecondaryText>
          {data?.latestUpdate ? moment(data?.latestUpdate).format(DefaultTimeFormat) : '-'}
        </SecondaryText>
      </CollapsibleBoxSecondaryContentContainer>

      <CollapsibleBoxPrimaryContentContainer>
        <Text color={'primary'} fontSize={'24px'} bold>
          {data?.latestUpdate ? moment(data?.latestUpdate).fromNow() : '-'}
        </Text>
      </CollapsibleBoxPrimaryContentContainer>
    </div>
  )
}

export default LastUpdate
