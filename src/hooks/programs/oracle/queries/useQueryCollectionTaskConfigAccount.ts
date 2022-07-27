import { useQuery } from 'react-query'
import { useOracle } from '@/hooks/programs/oracle'
import { PublicKey } from '@solana/web3.js'

export const useQueryCollectionTaskConfigAccount = (collectionTask?: string | PublicKey) => {
  const { fetchCollectionTaskConfig } = useOracle()

  return useQuery(
    ['COLLECTION_TASK_CONFIG_ACCOUNT', collectionTask, fetchCollectionTaskConfig],
    () => {
      if (!collectionTask) return undefined

      return fetchCollectionTaskConfig(typeof collectionTask === 'string' ? new PublicKey(collectionTask) : collectionTask)
    }
  )
}
