import React, { useCallback, useContext, useRef, useState } from 'react'
import { useSolanaWeb3 } from '@/contexts/solana-web3'
import API from '@/api'

export type SolanaWalletBasedAuthenticationContext = {
  accessToken?: string
  login: () => void
}

const MESSAGE_TO_SIGN = 'Welcome to Banksea Oracle'

const context = React.createContext<SolanaWalletBasedAuthenticationContext>(undefined as any)

export const SolanaWalletBasedAuthenticationProvider = ({ children }: { children?: React.ReactNode }) => {
  const { wallet, connect } = useSolanaWeb3()

  const [accessToken, setAccessToken] = useState<string>()
  const walletRef = useRef(wallet)

  const login = useCallback(async () => {
    if (!walletRef.current?.adapter.publicKey) {
      walletRef.current = await connect('Phantom')
    }

    const wallet = walletRef.current!
    const signed = Buffer.from(await wallet.adapter.signMessage(Buffer.from(MESSAGE_TO_SIGN))).toString('base64')

    const publicKey = wallet.adapter.publicKey!.toBuffer().toString('base64')
    API.v2.authentication.tryAuthenticate({
      dataToSign: MESSAGE_TO_SIGN,
      publicKey,
      signatureBase64: signed
    })
      .then(r => {
        setAccessToken(r ? signed : undefined)
      })
      .catch(() => {
        setAccessToken(undefined)
      })
  }, [walletRef])

  return (
    <context.Provider value={{ accessToken, login }}>
      {children}
    </context.Provider>
  )
}

export const useSolanaWalletBasedAuthentication = () => {
  return useContext(context)
}
