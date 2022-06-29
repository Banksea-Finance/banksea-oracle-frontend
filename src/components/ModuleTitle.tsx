import { Box, Flex, Text } from '@banksea-finance/ui-kit'
import React from 'react'
import { QuestionMarkSvg } from '@/components/svgs'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'

export type ModuleTitleProps = {
  title: string
  description?: React.ReactNode
}

const Container = styled.div`
  margin-bottom: 40px;
  
  .custom-tooltip {
    max-width: 350px;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: 10px;

    &:after {
      border-top-color: ${({ theme }) => theme.colors.backgroundSecondary} !important;
    }
  }
`

export const ModuleTitle: React.FC<ModuleTitleProps> = ({ title, description }) => {
  return (
    <Container>
      <Flex ai={'center'}>
        <Box height={'24px'} width={'4px'} background={'linear-gradient(#7864E6, #D25AE6)'} />
        <Text fontSize={'36px'} mx={'8px'} bold>
          {title}
        </Text>
        {description && (
          <a data-tip="true" data-for={'description'}>
            <QuestionMarkSvg />
          </a>
        )}
        {description && (
          <ReactTooltip
            id="description"
            className={'custom-tooltip'}
            aria-haspopup="true"
          >
            <Text>{description}</Text>
          </ReactTooltip>
        )}
      </Flex>
    </Container>
  )
}
