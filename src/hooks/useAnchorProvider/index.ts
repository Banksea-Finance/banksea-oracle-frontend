import { useSolanaConnectionConfig } from '@/contexts/solana-connection-config'
import { useSolanaWeb3 } from '@/contexts/solana-web3'
import { AnchorProvider } from '@project-serum/anchor'
import { useMemo } from 'react'
import { MockWallet } from '@/hooks/useAnchorProvider/MockWallet'

export const useAnchorProvider = () => {
  const { connection } = useSolanaConnectionConfig()
  const { adapter } = useSolanaWeb3()

  return useMemo<{ provider: AnchorProvider; readOnly: boolean }>(() => {
    if (!adapter) {
      const mockWallet = new MockWallet()

      return {
        provider: new AnchorProvider(connection, mockWallet, {}),
        readOnly: true
      }
    }

    return {
      provider: new AnchorProvider(connection, adapter as any, {}),
      readOnly: false
    }
  }, [connection, adapter])
}
