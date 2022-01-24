import React from 'react'
import oracleResponses from '@/images/icon/tokenDetail/oracleResponses.svg'
import { CollapsibleBox, Text } from '@/libs/uikit/components'
import useTokenDetailQuery from '@/hooks/queries/useTokenDetailQuery'
import useTokenFeedsQuery from '@/hooks/queries/useTokenFeedsQuery'
import {
  CollapsibleBoxPrimaryContentContainer,
  CollapsibleBoxSecondaryContentContainer,
  SecondaryText
} from '../index.style'

const OracleResponses: React.FC = () => {
  const { data } = useTokenDetailQuery()
  const { data: feeds } = useTokenFeedsQuery()

  return (
    <CollapsibleBox
      title="Oracle responses"
      collapsible={false}
      titleIcon={<img src={oracleResponses} alt="detail" />}
      style={{ marginTop: '20px', width: '100%' }}
    >
      <CollapsibleBoxSecondaryContentContainer>
        <SecondaryText>
          Minimum response: {data?.minRsp}
        </SecondaryText>
      </CollapsibleBoxSecondaryContentContainer>

      <CollapsibleBoxPrimaryContentContainer>
        <Text color={'primary'} fontSize={'24px'} bold>
          {feeds?.responseNodes} / {feeds?.totalNodes}
        </Text>
      </CollapsibleBoxPrimaryContentContainer>
    </CollapsibleBox>
  )
}

export default OracleResponses
