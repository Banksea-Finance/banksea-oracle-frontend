import { PublicKey } from '@solana/web3.js'
import { ORACLE_PROGRAM_ID } from '@/hooks/programs/oracle'

export const getCollectionTaskConfig = (collectionTask: PublicKey) => {
  return PublicKey.findProgramAddressSync(
    [Buffer.from('collection_task_config'), collectionTask.toBuffer()],
    ORACLE_PROGRAM_ID
  )[0]
}
