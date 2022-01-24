import React, { useEffect } from 'react'
import {
  CodeContainer,
  ConsumersModuleContainer,
  ConsumersModuleWrapper,
  DescriptionContainer,
  ToButton
} from '@/pages/home/consumers/index.style'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
import toIcon from '@/images/icon/toIcon.svg'
import arrow from '@/images/icon/arrow.svg'
import { Text } from '@/libs/uikit/components'
import Flex from '@react-css/flex'
import ModuleTitle from '@/components/module-title'

const content = `
  <pre>
    <code>
  
  
  import { 
    getBankseaOracleProgram, 
    fetchTokenReport, 
    ReportAccount 
  } from '@banksea-finance/oralce-client'
  
  const program = getBankseaOracleProgram('devnet')
  
  const report = await fetchTokenReport(program, {
      contractAddress: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
      tokenId: 3421
  })
  
  console.log(report.convert())
    </code>
  </pre>
`

const ConsumersModule: React.FC = () => {
  useEffect(() => {
    hljs.configure({
      ignoreUnescapedHTML: true,
      languages: ['javascript']
    })

    const codes = document.querySelectorAll('pre code')
    codes.forEach(el => {
      hljs.highlightElement(el as HTMLElement)
    })
  }, [])

  return (
    <ConsumersModuleContainer>
      <ModuleTitle mb={'30px'}>
        Consumers
      </ModuleTitle>

      <ConsumersModuleWrapper>
        <CodeContainer dangerouslySetInnerHTML={{ __html: content }} />
        <Flex.Item flex={1} />
        <DescriptionContainer flex={7}>
          <Text fontSize={'20px'} bold>
            Use Javascript client library<br />
            to consume data from Banksea oracle.
          </Text>
          <ToButton
            href={'https://banksea-finance.gitbook.io/oracle/consumers/javascript-api'}
            target={'_blank'}
            rel={'noreferrer'}
          >
            <img src={toIcon} />
            <span>Try now</span>
            <img src={arrow} />
          </ToButton>
        </DescriptionContainer>
      </ConsumersModuleWrapper>
    </ConsumersModuleContainer>
  )
}

export default ConsumersModule
