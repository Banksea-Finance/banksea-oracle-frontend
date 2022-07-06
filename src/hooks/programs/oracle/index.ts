import { Program } from '@project-serum/anchor'
import { ORACLE_PROGRAM_ID } from './constants'
import { IDL, Oracle } from './idl'
import React, { useCallback } from 'react'
import { useAnchorProvider } from '@/hooks/useAnchorProvider'
import { PublicKey } from '@solana/web3.js'

export const useOracle = () => {
  const { provider } = useAnchorProvider()

  const program = React.useMemo(() => new Program<Oracle>(
    IDL,
    ORACLE_PROGRAM_ID,
    provider
  ), [provider])

  const queryCollection = useCallback((collectionTask: PublicKey) => {
    return program.account.collectionTask.fetchNullable(collectionTask).then(r => !r ? undefined : r)
    // const [ ] = PublicKey.findProgramAddressSync(
    //   [Buffer.from('collection_task'), code]
    // )
  }, [program])


  return {
    program,
    queryCollection
  }
}

export * from './constants'
export * from './queries/useQueryCollectionTaskAccount'
