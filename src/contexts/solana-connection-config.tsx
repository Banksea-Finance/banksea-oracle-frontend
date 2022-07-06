import useLocalStorage from '@/hooks/useLocalStorage'
import { Cluster, clusterApiUrl, Connection } from '@solana/web3.js'
import React, { useContext, useMemo } from 'react'

interface ConnectionConfig {
  connection: Connection
  endpointUrl: string
  setEndpoint: (val: string) => void
}

export const SOLANA_CLUSTER: Cluster = process.env.REACT_APP_SOLANA_CLUSTER as Cluster || 'devnet'

export const SOLANA_ENDPOINT: string = process.env.REACT_APP_SOLANA_ENDPOINT || clusterApiUrl(SOLANA_CLUSTER)

const SolanaConnectionConfigContext = React.createContext<ConnectionConfig>({
  endpointUrl: SOLANA_ENDPOINT,
  setEndpoint: () => {},
  connection: new Connection(SOLANA_ENDPOINT, 'recent'),
})

export function SolanaConnectionConfigProvider({ children = undefined as any }) {
  const [endpoint, setEndpoint] = useLocalStorage<string>('connectionEndpts', SOLANA_ENDPOINT)

  const connection = useMemo(() => new Connection(endpoint!, 'recent'), [endpoint])

  return (
    <SolanaConnectionConfigContext.Provider
      value={{
        endpointUrl: endpoint!,
        setEndpoint,
        connection,
      }}
    >
      {children}
    </SolanaConnectionConfigContext.Provider>
  )
}

export function useSolanaConnectionConfig() {
  return useContext(SolanaConnectionConfigContext)
}
