import React from 'react'
import { Box, Flex, Text, TextProps } from '@banksea-finance/ui-kit'

export const ModuleTitle = (props: TextProps) => (
  <Flex flexDirection={'column'} alignItems={'center'} mb={{ lg: '80px', _: '36px' }}>
    <Text fontSize={'38px'} important gradient mb={{ _: '8px', sm: '12px', lg: '32px' }} letterSpacing={'4px'} bold {...props} />
    <Box width={{ _: '100%', sm: '420px' }} height={'4px'} background={'linear-gradient(90deg, #7864E600, #7864E6, #7864E600)'} />
  </Flex>
)
