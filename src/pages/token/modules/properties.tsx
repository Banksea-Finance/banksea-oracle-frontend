import React from 'react'
import {
  CollapsibleBoxPrimaryContentContainer,
  CollapsibleBoxSecondaryContentContainer,
  SecondaryText
} from '@/pages/token/index.style'
import { Flex } from '@react-css/flex'
import { CollapsibleBox, Text } from '@/libs/uikit/components'
import useTokenDetailQuery from '@/hooks/queries/useTokenDetailQuery'

const Properties: React.FC = () => {
  const { data } = useTokenDetailQuery()

  const attrs = data?.attributes
    .sort((a, b) => { return (a.rate || Number.MAX_VALUE) - (b.rate || Number.MAX_VALUE)})
    .slice(0, 3) || []

  return (
    <CollapsibleBox
      title="Properties"
      collapsible
      titleIcon={<img src={require('@/images/icon/tokenDetail/properties.svg').default} alt="detail" />}
      style={{ marginTop: '21px' }}
    >
      <CollapsibleBoxPrimaryContentContainer>
        <Text fontSize={'16px'} color={'text'} bold textAlign={'center'}>
          {data?.name || '-'} has {data?.attributes.length || '-'} Properties
        </Text>
      </CollapsibleBoxPrimaryContentContainer>
      <CollapsibleBoxSecondaryContentContainer borderTop>
        <Flex justifySpaceBetween>
          {attrs.map(({ value }, index) => (
            <Flex.Item flex={1} key={index} style={{ textAlign: 'center', }}>
              <SecondaryText>{value}</SecondaryText>
            </Flex.Item>
          ))}
        </Flex>
      </CollapsibleBoxSecondaryContentContainer>

      <CollapsibleBoxPrimaryContentContainer>
        <Flex justifySpaceBetween>
          {
            attrs.map(({ rate }, index) => (
              <Flex.Item flex={1} key={index} style={{ textAlign: 'center' }}>
                <Text fontSize={'24px'} color={'primary'} bold>
                  {
                    rate ? (
                      `${(rate * 100).toFixed(2)}%`
                    ) : '-'
                  }
                </Text>
              </Flex.Item>
            ))
          }
        </Flex>
      </CollapsibleBoxPrimaryContentContainer>
    </CollapsibleBox>
  )
}

export default Properties
