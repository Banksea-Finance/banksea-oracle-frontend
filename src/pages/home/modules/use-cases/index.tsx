import { UseCasesFullSvg } from '@/components/svgs'
import React from 'react'
import { Flex } from '@banksea-finance/ui-kit'
import { ModuleTitle } from '@/components/module-title'

export const UseCasesModule: React.FC = () => {
  return (
    <Flex flexDirection={'column'} ai={'center'} width={'100%'}>
      <ModuleTitle>
        Use Cases
      </ModuleTitle>
      <UseCasesFullSvg />
    </Flex>
  )
}
