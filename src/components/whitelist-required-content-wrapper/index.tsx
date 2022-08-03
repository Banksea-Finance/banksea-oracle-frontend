import React, { CSSProperties, Fragment } from 'react'
import { Box, Button, Flex, Text } from '@banksea-finance/ui-kit'
import styled from 'styled-components'
import { useSolanaWalletBasedAuthentication } from '@/contexts/solana-wallet-based-authtication'
import { useSolanaWeb3 } from '@/contexts/solana-web3'
import { shortenAddress } from '@/utils'

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
  const { account, disconnect } = useSolanaWeb3()
  const { accessToken, login, authenticating } = useSolanaWalletBasedAuthentication()

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
          <Text fontSize={'28px'} mb={'16px'}>
            The content is only visible to whitelisted users
          </Text>
          {
            !account ? (
              <Flex flexDirection={'column'} ai={'center'}>
                <Button as={'a'} href={'https://c2dtw7wmuwa.typeform.com/to/Da3lRDf0'} target={'_blank'} rel={'noreferrer'}>
                  Apply for a whitelist
                </Button>
                <Flex ai={'center'}>
                  <Text color={'textDisabled'} fontSize={'14px'}>In whitelist?</Text>
                  <Button variant={'text'} onClick={login} fontSize={'14px'}>
                    Login via Solana wallet
                  </Button>
                </Flex>
              </Flex>
            ) : (
              authenticating ? (
                <Text>Authenticating...</Text>
              ) : (
                <Flex flexDirection={'column'} ai={'center'}>
                  <Text>
                    {'You have connected the wallet: '}
                    <span className="primary">
                      {shortenAddress(account)}
                    </span>
                    {', but seems that you are not in whitelist.'}
                  </Text>
                  <Flex ai={'center'}>
                    <Button variant={'text'} fontSize={'14px'} onClick={login}>Retry authentication</Button>
                    <Button variant={'text'} fontSize={'14px'} onClick={disconnect}>Disconnect</Button>
                  </Flex>
                </Flex>
              )
            )
          }
        </Flex>
      </Flex>
    </Container>
  )
}
