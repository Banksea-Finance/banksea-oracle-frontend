import React, { useEffect } from 'react'
import { Button, Flex, Text } from '@banksea-finance/ui-kit'
import { ModuleTitle } from '@/components/module-title'

import hljs from 'highlight.js'
import 'highlight.js/styles/felipec.css'
import styled from 'styled-components'

const EXAMPLE_CODE = `
  <pre>
    <code>
  import fs from 'fs'
  import BN from 'bn.js' 
  import { Keypair } from '@solana/web3.js'
  import { Wallet } from '@project-serum/anchor'
  import { BankseaOracleClient } from '@banksea-finance/oracle-client'

  const cluster = 'devnet'
  const endpoint = 'https://mango.devnet.rpcpool.com/'
  const keypair = Keypair.fromSecretKey(
    Uint8Array.from(
      JSON.parse(fs.readFileSync('path/to/your/keyfile').toString('utf-8'))
    )
  )
  const wallet = new Wallet(keypair)
  
  const oracleClient = new BankseaOracleClient(cluster, { endpoint, wallet })
  const feedCount = new BN(10)
  const feedInterval = new BN(3600) // 3600 seconds
  const feedNodeCount = new BN(3)
  
  const whitelists = await oracleClient.listWhitelists()
  // Just choose one you like to subscribe
  const whitelistPubkey = whitelists[0].pubkey
  // Use a random one.
  const collectionTaskKeypair = Keypair.generate() 
  
  await oracleClient.subscribe({
    feedCount,
    feedInterval,
    feedNodeCount,
    whitelistPubkey,
    collectionTaskKeypair // this argument is optional
  })
    </code>
  </pre>
`

const ConsumersModuleContainer = styled.div`
  width: 100%;
  padding-bottom: 96px;
  
  background-image: url("${require('@/assets/images/pages/oracle-home/consumer-bg.webp')}");
  background-repeat: no-repeat;
  background-size: 50%;
  
  background-position: 100% 80%;
  
  ${({ theme }) => theme.mediaQueries.maxLg} {
    background-size: 100%;
    padding-bottom: 64px;
  }
`

const CodeContainer = styled.div`
  width: 100%;
  height: fit-content;
  flex: 1;

  pre {
    overflow-y: auto;
    overflow-x: hidden;
    height: fit-content;
  }

  code.hljs {
    width: 100%;
    height: 410px;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    font-family: Consolas, serif;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    line-height: 1.5;
    
    overflow-x: auto;
  }
`

export const ConsumersModule: React.FC = () => {
  useEffect(() => {
    hljs.configure({
      ignoreUnescapedHTML: true,
      languages: ['typescript']
    })

    const codes = document.querySelectorAll('pre code')
    codes.forEach(el => {
      hljs.highlightElement(el as HTMLElement)
    })
  }, [])

  return (
    <ConsumersModuleContainer>
      <ModuleTitle>
        Consumers
      </ModuleTitle>

      <Flex jc={'space-between'} ai={{ xl: 'center', _: 'center' }} flexDirection={{ xl: 'row', _: 'column' }}>
        <CodeContainer dangerouslySetInnerHTML={{ __html: EXAMPLE_CODE }} />

        <Flex flexDirection={'column'} ai={'center'} flex={1} mt={{ xl: '0', _: '32px' }} ml={{ xl: '64px', _: '0' }}>
          <Flex flexDirection={'column'} ai={{ xl: 'start', _: 'center' }}>
            <Text fontSize={'20px'} mb={'16px'} textAlign={{ xl: 'unset', _: 'center' }}>
              Use the client provided by Javascript library<br />
              to subscribe & consume data from Banksea Oracle.
            </Text>
            <Button
              as={'a'}
              href={'https://banksea-finance.gitbook.io/oracle/consumers/javascript-api'}
              target={'_blank'}
              rel={'noreferrer'}
              width={'fit-content'}
              p={'0 32px'}
            >
              Try now
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </ConsumersModuleContainer>
  )
}
