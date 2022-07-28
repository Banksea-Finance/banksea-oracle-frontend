import { Grid, Image, Text, TextProps } from '@banksea-finance/ui-kit'
import { shortenAddress } from '@/utils'
import React, { useState } from 'react'
import { Cluster, PublicKey } from '@solana/web3.js'
import { SOLANA_CLUSTER } from '@/contexts/solana-connection-config'
import CopyToClipboard from 'react-copy-to-clipboard'
import Tooltip from 'rc-tooltip'

export type SolanaAddressType = 'account' | 'token' | 'tx'

export interface SolanaAddressLabelProps extends TextProps {
  type: SolanaAddressType
  address: string | PublicKey
  cluster?: Cluster
  maxLength?: number
}

export const SolanaAddressLabel: React.FC<SolanaAddressLabelProps> = ({
  type,
  address,
  cluster = SOLANA_CLUSTER,
  maxLength,
  ...textProps
}) => {
  const addrStr = address.toString()

  const [copied, setCopied] = useState(false)

  return (
    <Grid gridTemplateColumns={'repeat(3, auto)'} jc={'flex-start'} ai={'center'} gap={'4px'}>
      <Tooltip
        overlay={<Text fontSize={'16px'}>{copied ? 'Copy success' : 'Click to copy'}</Text>}
        placement={'top'}
        onVisibleChange={visible => !visible && setCopied(false)}
      >
        <CopyToClipboard text={addrStr} onCopy={() => setCopied(true)}>
          <Text
            {...textProps}
            textAlign={'start'}
            fontSize={'18px'}
            data-tip="true"
            data-for={'click-to-copy'}
            style={{ cursor: 'pointer', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflowX: 'hidden' }}
          >
            { maxLength ? shortenAddress(addrStr, maxLength / 2) : addrStr }
          </Text>
        </CopyToClipboard>
      </Tooltip>

      <Tooltip overlay={<Text fontSize={'16px'}>View on solscan</Text>} placement={'top'}>
        <a href={`https://solscan.io/${type}/${addrStr}?cluster=${cluster}`} target={'_blank'} rel="noreferrer">
          <Image src="https://solscan.io/favicon.ico" width={'20px'} height={'20px'} />
        </a>
      </Tooltip>

      <Tooltip overlay={<Text fontSize={'16px'}>View on Solana Explorer</Text>} placement={'top'}>
        <a href={`https://explorer.solana.com/${type}/${addrStr}?cluster=${cluster}`} target={'_blank'} rel="noreferrer">
          <Image src="https://explorer.solana.com/favicon.ico" width={'20px'} height={'20px'} />
        </a>
      </Tooltip>
    </Grid>
  )
}
