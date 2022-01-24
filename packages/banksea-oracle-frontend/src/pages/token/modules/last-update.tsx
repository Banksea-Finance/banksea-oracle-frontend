import React from 'react'
import lastUpdate from '@/images/icon/tokenDetail/lastUpdate.svg'
import moment from 'moment'
import { CollapsibleBox, Text } from '@/libs/uikit/components'
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
    <CollapsibleBox
      title="Last update"
      collapsible={false}
      titleIcon={<img src={lastUpdate} alt="detail" />}
      style={{ marginTop: '20px', width: '100%' }}
    >
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
    </CollapsibleBox>
  )
}

export default LastUpdate
