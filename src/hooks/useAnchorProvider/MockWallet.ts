import { Wallet } from '@project-serum/anchor'
import { Keypair, PublicKey, Transaction } from '@solana/web3.js'

export class MockWallet implements Wallet {
  readonly payer: Keypair = new Keypair()

  get publicKey(): PublicKey {
    return PublicKey.default
  }

  signAllTransactions(_txs: Transaction[]): Promise<Transaction[]> {
    throw new Error('MockWallet not support `signAllTransactions`')
  }

  signTransaction(_tx: Transaction): Promise<Transaction> {
    throw new Error('MockWallet not support `signAllTransactions`')
  }
}
