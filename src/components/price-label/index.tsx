import React, { useState } from 'react'
import { Flex, Text, TextProps } from '@banksea-finance/ui-kit'
import { SolanaMarkSvg } from '@/components/svgs'
import Tooltip from 'rc-tooltip'

export type PriceUnit = 'SOL' | 'ETH'

export interface PriceLabelProps extends TextProps {
  value?: string | number
  unit?: PriceUnit
  iconSize?: string
}

export const PriceLabel: React.FC<PriceLabelProps> = ({
  unit = 'SOL',
  iconSize = '14px',
  value,
  ...textProps
}) => {
  const [tooltipVisible, setTooltipVisible] = useState(false)

  return (
    <Flex ai={'center'}>
      <Tooltip
        visible={tooltipVisible}
        animation={'zoom'}
        placement={'top'}
        trigger={['hover']}
        overlay={<Text>SOL</Text>}
      >
        <div onMouseEnter={() => setTooltipVisible(true)} onMouseLeave={() => setTooltipVisible(false)}>
          {
            unit === 'SOL'
              ? <SolanaMarkSvg height={iconSize}  />
              : <></>
          }
        </div>
      </Tooltip>
      <Text ml={'4px'} lineHeight={1} {...textProps}>
        {value}
      </Text>
    </Flex>
  )
}
