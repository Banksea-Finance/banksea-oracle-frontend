import { Box, Card, Flex, Text, useTheme } from '@banksea-finance/ui-kit'
import React from 'react'

const Item: React.FC<{ label: string, value: string, float: number }> = ({
  label, value, float
}) => {
  const { theme } = useTheme()

  return (
    <Flex flexDirection={'column'} alignItems={'center'} width={'100%'}>
      <Text fontSize={{ xl: '36px', lg: '24px', md: '20px', sm: '16px' }} style={{ position: 'relative', width: 'fit-content' }}>
        {value}

        <Box position={'absolute'} right={{ xs: '-48px', _: 'unset' }} left={{ _: '0%', xs: 'unset' }} top={{ xs: '40%', _: '80%' }}>
          <Text
            color={float > 0 ? '#329664' : '#DC6E78'}
            fontSize={{ xl: '14px', xs: '12px' }}
          >
            {float > 0 ? '+' : ''}{float * 100}%
          </Text>
        </Box>
      </Text>
      <Box width={'30px'} height={'1px'} background={theme.colors.primary} mb={'12px'} />
      <Text color={'disabled'}>{label}</Text>
    </Flex>
  )
}

export const StatisticModule: React.FC = () => {
  return (
    <Card py={{ xl: '32px', _: '16px' }} width={'100%'} alignItems={'center'} backgroundColor={'backgroundSecondary'}>
      <Flex jc={'space-between'} width={'100%'}>
        <Item label={'Popularity'} value={'1'} float={0.1} />
        <Item label={'Popularity'} value={'123'} float={-0.1} />
        <Item label={'Popularity'} value={'12345'} float={2} />
        <Item label={'Popularity'} value={'1234567'} float={-0.2} />
      </Flex>
    </Card>
  )
}
