import React from 'react'
import {
  CollapsibleBoxPrimaryContentContainer,
  CollapsibleBoxSecondaryContentContainer,
  SecondaryText
} from '@/pages/token/index.style'
import { Flex, Text } from '@banksea-finance/ui-kit'
import useTokenDetailQuery from '@/hooks/queries/useTokenDetailQuery'

const Properties: React.FC = () => {
  const { data } = useTokenDetailQuery()

  const attrs = data?.attributes
    .sort((a, b) => { return (a.rate || Number.MAX_VALUE) - (b.rate || Number.MAX_VALUE)})
    .slice(0, 3) || []

  return (
    <div>
      <CollapsibleBoxPrimaryContentContainer>
        <Text fontSize={'16px'} color={'text'} bold textAlign={'center'}>
          {data?.name || '-'} has {data?.attributes.length || '-'} Properties
        </Text>
      </CollapsibleBoxPrimaryContentContainer>
      <CollapsibleBoxSecondaryContentContainer borderTop>
        <Flex>
          {attrs.map(({ value }, index) => (
            <SecondaryText key={index}>{value}</SecondaryText>
          ))}
        </Flex>
      </CollapsibleBoxSecondaryContentContainer>

      <CollapsibleBoxPrimaryContentContainer>
        <Flex>
          {
            attrs.map(({ rate }, index) => (
              <Text fontSize={'24px'} color={'primary'} bold key={index}>
                {
                  rate ? (
                    `${(rate * 100).toFixed(2)}%`
                  ) : '-'
                }
              </Text>
            ))
          }
        </Flex>
      </CollapsibleBoxPrimaryContentContainer>
    </div>
  )
}

export default Properties
