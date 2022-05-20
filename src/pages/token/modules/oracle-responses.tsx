import React from 'react'
import oracleResponses from '@/images/icon/tokenDetail/oracleResponses.svg'
import { Text } from '@banksea-finance/ui-kit'
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
    <div >
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
    </div>
  )
}

export default OracleResponses
