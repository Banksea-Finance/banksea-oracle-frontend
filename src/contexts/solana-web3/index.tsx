import type { PublicKey } from '@solana/web3.js'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { shortenAddress } from '@/utils'
import { SUPPORT_WALLETS } from './constant'
import { BaseMessageSignerWalletAdapter, WalletReadyState } from '@solana/wallet-adapter-base'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useNotify } from '@banksea-finance/ui-kit'
import { SolanaWallet, SupportWalletNames, WalletContextValues } from './types'

const SolanaWeb3Context = React.createContext<WalletContextValues>({
  adapter: undefined,
  select: (_name: SupportWalletNames) => {},
  wallet: undefined,
  account: undefined,
  disconnect: () => {}
})

const LOCAL_STORAGE_WALLET_KEY = 'WALLET'

export const SolanaWeb3Provider: React.FC = ({ children }) => {
  const { notify } = useNotify()
  const [eagerWallet, setEagerWallet] = useLocalStorage<SupportWalletNames>(LOCAL_STORAGE_WALLET_KEY)

  const [wallet, setWallet] = useState<SolanaWallet | undefined>(eagerWallet ? SUPPORT_WALLETS[eagerWallet] : undefined)
  const [account, setAccount] = useState<PublicKey>()

  const select = (key: SupportWalletNames) => {
    setWallet(SUPPORT_WALLETS[key])
  }

  const adapter = useMemo(() => {
    if (!wallet) {
      return undefined
    }

    return wallet.adapter
  }, [wallet])

  const handleConnect = async (adapter?: BaseMessageSignerWalletAdapter) => {
    if (!adapter) return

    await new Promise<void>((resolve => {
      if (adapter.readyState === WalletReadyState.Installed) resolve()

      adapter.on('readyStateChange', (readyState: WalletReadyState) => {
        if (readyState === WalletReadyState.Installed) resolve()
      })
    }))

    adapter
      .connect()
      .then(() => {
        const publicKey = adapter.publicKey

        if (publicKey === null) {
          notify({
            title: 'Wallet Connect Failed',
            description: `Failed to connect to ${adapter.name} wallet`
          })

          return
        }

        setEagerWallet(adapter.name as any)
        setAccount(publicKey)

        const keyToDisplay = publicKey.toBase58().length > 20 ? shortenAddress(publicKey) : publicKey.toBase58()

        notify({
          title: 'Wallet update',
          description: 'Connected to wallet ' + keyToDisplay
        })
      })
      .catch(e => {
        console.error('connect error', e)
        setWallet(undefined)
      })
  }

  useEffect(() => {
    handleConnect(adapter)
  }, [adapter])

  const disconnect = useCallback(() => {
    setWallet(undefined)
    setAccount(undefined)
    setEagerWallet(undefined)

    if (!adapter) return

    adapter.disconnect()
    notify({
      title: 'Wallet disconnect',
      description: `Disconnected from ${adapter.name} wallet`
    })
  }, [adapter])

  return (
    <SolanaWeb3Context.Provider
      value={{
        adapter,
        select,
        wallet,
        account,
        disconnect
      }}
    >
      {children}
    </SolanaWeb3Context.Provider>
  )
}

export function useSolanaWeb3() {
  return useContext(SolanaWeb3Context)
}
