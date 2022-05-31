import React, { useEffect } from 'react'
import { Button, Flex, Text } from '@banksea-finance/ui-kit'
import { ModuleTitle } from '@/components/module-title'

import hljs from 'highlight.js'
import 'highlight.js/styles/felipec.css'
import styled from 'styled-components'

const EXAMPLE_CODE = `
  <pre>
    <code>
  
  import { 
    getBankseaOracleProgram, 
    fetchTokenReport, 
    ReportAccount 
  } from '@banksea-finance/oracle-client'
  
  const program = getBankseaOracleProgram('devnet')
  
  const report = await fetchTokenReport(program, {
    contractAddress: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
    tokenId: 3421
  })
  
  console.log(report.convert())
    </code>
  </pre>
`

const ConsumersModuleContainer = styled.div`
  width: 100%;
  padding-bottom: 96px;
  
  background-image: url("${require('@/assets/images/pages/develop/consumer-bg.webp')}");
  background-repeat: no-repeat;
  background-size: 50%;
  
  background-position: 100% 80%;
  
  ${({ theme }) => theme.mediaQueries.maxLg} {
    background-size: 100%;
    padding-bottom: 64px;
  }
`

const CodeContainer = styled.div`
  height: fit-content;
  flex: 1;
  width: 100%;

  pre {
    overflow: inherit;
    height: fit-content;
  }

  .hljs {
    width: 100%;
    height: 400px;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    line-height: 120%;

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

      <Flex jc={'space-between'} ai={{ lg: 'start', _: 'center' }} gap={'32px'} flexDirection={{ lg: 'row', _: 'column' }}>
        <CodeContainer dangerouslySetInnerHTML={{ __html: EXAMPLE_CODE }} />
        <Flex flexDirection={'column'} ai={'center'} flex={1} mt={{ lg: '64px', _: '16px' }}>
          <Flex flexDirection={'column'} ai={{ lg: 'start', _: 'center' }}>
            <Text fontSize={'20px'} mb={'16px'} textAlign={{ lg: 'unset', _: 'center' }}>
              Use Javascript client library<br />
              to consume data from Banksea oracle.
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
