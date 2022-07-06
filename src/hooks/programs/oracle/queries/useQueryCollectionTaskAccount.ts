import { useQuery } from 'react-query'
import { useOracle } from '@/hooks/programs/oracle'
import { PublicKey } from '@solana/web3.js'

export const useQueryCollectionTaskAccount = (collectionTask?: string | PublicKey) => {
  const { fetchCollectionTask } = useOracle()

  return useQuery(
    ['COLLECTION_TASK_ACCOUNT', collectionTask, fetchCollectionTask],
    () => {
      if (!collectionTask) return undefined

      return fetchCollectionTask(typeof collectionTask === 'string' ? new PublicKey(collectionTask) : collectionTask)
    }
  )
}
