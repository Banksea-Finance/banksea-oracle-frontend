import { BaseMessageSignerWalletAdapter } from '@solana/wallet-adapter-base'
import { PublicKey } from '@solana/web3.js'

export type SupportWalletNames = 'Phantom' | 'Slope' | 'Solflare'
// | 'Sollet'
// | 'Solong'
// | 'MathWallet'
// | 'Ledger'

export type SolanaWallet = {
  name: SupportWalletNames
  adapter: BaseMessageSignerWalletAdapter
}

export type WalletContextValues = {
  connect: (name: SupportWalletNames) => Promise<SolanaWallet>
  wallet: SolanaWallet | undefined
  account?: PublicKey
  disconnect: () => void
}
