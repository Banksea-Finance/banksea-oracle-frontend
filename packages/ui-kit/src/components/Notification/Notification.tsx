import React from 'react'
import { Box, Flex } from '../Box'
import styled from 'styled-components'
import { variants, Variants } from '../../types'
import { CloseSvg, ErrorSvg, InfoSvg, SuccessSvg, WarningSvg } from '../../assets/svgs'
import { Text } from '../Text'

export type NotificationVariants = Extract<Variants, 'success' | 'danger' | 'warning' | 'primary'>

export type NotifyTypes = 'info' | 'warning' | 'error' | 'success'

export type NotificationProps = {
  title: React.ReactNode
  variant?: NotificationVariants
  description?: React.ReactNode
}

const StyledNotification = styled(Flex)<{ $variant: Variants }>`
  align-items: center;
  justify-content: space-between;

  min-width: 256px;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 16px;
  border-left: 5px solid ${({ theme, $variant }) => theme.colors[$variant]};
`

const iconByVariants: Record<NotificationVariants, any> = {
  [variants.primary]: InfoSvg,
  [variants.success]: SuccessSvg,
  [variants.warning]: WarningSvg,
  [variants.danger]: ErrorSvg,
}

export const Notification: React.FC<NotificationProps> = ({ variant = 'primary', title, description = '' }) => {
  const Icon = iconByVariants[variant]

  return (
    <StyledNotification $variant={variant}>
      <Flex ai={'center'}>
        <Icon />
        <Box mx={'8px'}>
          <Text important fontSize={'18px'}>{title}</Text>
          <Text color={'disabled'} fontSize={'12px'}>{description}</Text>
        </Box>
      </Flex>
      <CloseSvg />
    </StyledNotification>
  )
}

