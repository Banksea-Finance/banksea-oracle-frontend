import { useSolanaConnectionConfig } from '@/contexts/solana-connection-config'
import { useSolanaWeb3 } from '@/contexts/solana-web3'
import { AnchorProvider } from '@project-serum/anchor'
import { useMemo } from 'react'
import { MockWallet } from '@/hooks/useAnchorProvider/MockWallet'

export const useAnchorProvider = () => {
  const { connection } = useSolanaConnectionConfig()
  const { wallet } = useSolanaWeb3()

  return useMemo<{ provider: AnchorProvider; readOnly: boolean }>(() => {
    if (!wallet) {
      const mockWallet = new MockWallet()

      return {
        provider: new AnchorProvider(connection, mockWallet, {}),
        readOnly: true
      }
    }

    return {
      provider: new AnchorProvider(connection, wallet.adapter as any, {}),
      readOnly: false
    }
  }, [connection, wallet])
}
