import type { PublicKey } from '@solana/web3.js'
import React, { useCallback, useContext, useState } from 'react'
import { shortenAddress } from '@/utils'
import { SUPPORT_WALLETS } from './constant'
import { BaseMessageSignerWalletAdapter, WalletReadyState } from '@solana/wallet-adapter-base'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useNotify } from '@banksea-finance/ui-kit'
import { SolanaWallet, SupportWalletNames, WalletContextValues } from './types'

const SolanaWeb3Context = React.createContext<WalletContextValues>({
  connect: (_name: SupportWalletNames) => undefined as any,
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

  const handleConnect = async (adapter?: BaseMessageSignerWalletAdapter) => {
    if (!adapter) return

    await new Promise<void>((resolve => {
      if (adapter.readyState === WalletReadyState.Installed) resolve()

      adapter.on('readyStateChange', (readyState: WalletReadyState) => {
        if (readyState === WalletReadyState.Installed) resolve()
      })
    }))

    return adapter
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

  const connect = (key: SupportWalletNames) => {
    const wallet = SUPPORT_WALLETS[key]
    setWallet(wallet)

    return handleConnect(wallet.adapter).then(() => wallet)
  }

  const disconnect = useCallback(() => {
    setWallet(undefined)
    setAccount(undefined)
    setEagerWallet(undefined)

    if (!wallet) return

    const { adapter } = wallet

    adapter.disconnect()
    notify({
      title: 'Wallet disconnect',
      description: `Disconnected from ${adapter.name} wallet`
    })
  }, [wallet])

  return (
    <SolanaWeb3Context.Provider
      value={{
        connect,
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
