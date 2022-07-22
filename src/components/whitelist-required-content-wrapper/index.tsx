import React, { CSSProperties, Fragment } from 'react'
import { Box, Button, Flex, Text } from '@banksea-finance/ui-kit'
import styled from 'styled-components'
import { useSolanaWalletBasedAuthentication } from '@/contexts/solana-wallet-based-authtication'

export type WhitelistRequiredContentWrapperProps = {
  content: React.ReactNode
  suspense?: React.ReactNode
  suspendWidth?: CSSProperties['width']
  suspendHeight?: CSSProperties['height']
}

const Container = styled(Box)`
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  
  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    backdrop-filter: blur(10px);
  }
  
  .tips {
    * {
      z-index: 11;
    }
  }
`

export const WhitelistRequiredContentWrapper: React.FC<WhitelistRequiredContentWrapperProps> = ({
  content, suspense, suspendWidth = '100%', suspendHeight = '100%'
}) => {
  const { accessToken, login } = useSolanaWalletBasedAuthentication()

  if (accessToken) {
    return (
      <Fragment>
        {React.isValidElement(content) ? content : (<></>)}
      </Fragment>
    )
  }

  return (
    <Container height={suspendHeight} width={suspendWidth}>
      <Box position={'absolute'} height={'100%'} width={'100%'} zIndex={0}>
        {suspense || <Box width={'100%'} height={'100%'} />}
      </Box>

      <div className="cover" />

      <Flex width={'100%'} height={'100%'} ai={'center'} jc={'center'} zIndex={11} className={'tips'}>
        <Flex flexDirection={'column'} ai={'center'}>
          <Text fontSize={'24px'}>The content is now open to users in whitelist only</Text>
          <Flex ai={'center'}>
            <Text color={'textDisabled'} fontSize={'14px'}>In whitelist?</Text>
            <Button variant={'text'} onClick={login} fontSize={'14px'}>
              Login via Solana wallet
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}
