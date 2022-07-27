import { Program } from '@project-serum/anchor'
import { ORACLE_PROGRAM_ID } from './constants'
import { IDL, Oracle } from './idl'
import React, { useCallback } from 'react'
import { useAnchorProvider } from '@/hooks/useAnchorProvider'
import { PublicKey } from '@solana/web3.js'
import { getCollectionTaskConfig } from '@/hooks/programs/oracle/helpers/accounts'

export const useOracle = () => {
  const { provider } = useAnchorProvider()

  const program = React.useMemo(() => new Program<Oracle>(
    IDL,
    ORACLE_PROGRAM_ID,
    provider
  ), [provider])

  const fetchCollectionTask = useCallback((collectionTask: PublicKey) => {
    return program.account.collectionTask.fetchNullable(collectionTask).then(r => !r ? undefined : r)
  }, [program])

  const fetchCollectionTaskConfig = useCallback((collectionTask: PublicKey) => {
    return program.account.collectionTaskConfig.fetchNullable(getCollectionTaskConfig(collectionTask)).then(r => !r ? undefined : r)
  }, [program])

  return {
    program,
    fetchCollectionTask,
    fetchCollectionTaskConfig
  }
}

export * from './constants'
export * from './queries/useQueryCollectionTaskAccount'
