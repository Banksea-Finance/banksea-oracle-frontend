import { useQuery } from 'react-query'
import { useOracle } from '@/hooks/programs/oracle'
import { PublicKey } from '@solana/web3.js'

export const useQueryCollectionTaskAccount = (collectionTask?: string | PublicKey) => {
  const { queryCollection } = useOracle()

  return useQuery(
    ['COLLECTION_TASK_ACCOUNT', collectionTask, queryCollection],
    () => {
      if (!collectionTask) return undefined

      return queryCollection(typeof collectionTask === 'string' ? new PublicKey(collectionTask) : collectionTask)
    }
  )
}
