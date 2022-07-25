import React, { useCallback, useContext, useRef, useState } from 'react'
import { useSolanaWeb3 } from '@/contexts/solana-web3'
import API from '@/api'

import Cookies from 'js-cookie'
import { decode, JwtPayload } from 'jsonwebtoken'

export type SolanaWalletBasedAuthenticationContext = {
  accessToken?: string
  login: () => void
  authenticating: boolean
}

const COOKIE_KEY = 'SOLANA_WALLET_BASED_ACCESS_TOKEN'
const MESSAGE_TO_SIGN = 'Welcome to Banksea Oracle'

const context = React.createContext<SolanaWalletBasedAuthenticationContext>(undefined as any)

export const SolanaWalletBasedAuthenticationProvider = ({ children }: { children?: React.ReactNode }) => {
  const { wallet, connect } = useSolanaWeb3()

  const [accessToken, setAccessToken] = useState<string | undefined>(() => {
    const old = Cookies.get(COOKIE_KEY)
    if (!old) return undefined

    return decode(old) ? old : undefined
  })

  const [authenticating, setAuthenticating] = useState(false)
  const walletRef = useRef(wallet)

  const login = useCallback(async () => {
    if (!walletRef.current?.adapter.publicKey) {
      walletRef.current = await connect('Phantom')
    }

    let signed: string
    const wallet = walletRef.current!
    const publicKey = wallet.adapter.publicKey!.toBuffer().toString('base64')

    setAuthenticating(true)

    wallet.adapter.signMessage(Buffer.from(MESSAGE_TO_SIGN))
      .then(uint8array => Buffer.from(uint8array).toString('base64'))
      .then(_signed => {
        signed = _signed

        return API.v2.authentication.tryAuthenticate({
          dataToSign: MESSAGE_TO_SIGN,
          publicKey,
          signatureBase64: signed
        }) as unknown as Promise<string>
      })
      .then(token => {
        if (token) {
          const decoded = decode(token) as JwtPayload
          Cookies.set(COOKIE_KEY, token, { expires: new Date((decoded.exp as number) * 1000) })
          setAccessToken(token)
        } else {
          return Promise.reject()
        }
      })
      .catch(() => {
        Cookies.remove(COOKIE_KEY)
        setAccessToken(undefined)
      })
      .finally(() => setAuthenticating(false))
  }, [walletRef])

  return (
    <context.Provider value={{ accessToken, login, authenticating }}>
      {children}
    </context.Provider>
  )
}

export const useSolanaWalletBasedAuthentication = () => {
  return useContext(context)
}
