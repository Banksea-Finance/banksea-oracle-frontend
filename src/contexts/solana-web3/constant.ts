import { PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { SolanaWallet, SupportWalletNames } from './types'

export const SUPPORT_WALLETS: Record<SupportWalletNames, SolanaWallet> = {
  Phantom: {
    name: 'Phantom',
    adapter: new PhantomWalletAdapter()
  },
  Slope: {
    name: 'Slope',
    adapter: new SlopeWalletAdapter()
  },
  Solflare: {
    name: 'Solflare',
    adapter: new SolflareWalletAdapter()
  },
  // 'Solong': {
  //   name: 'Solong',
  //   url: 'https://solongwallet.com',
  //   icon: `${ASSETS_URL}solong.png`,
  //   adapter: SolongWalletAdapter
  // },
  // 'MathWallet': {
  //   name: 'MathWallet',
  //   url: 'https://mathwallet.org',
  //   icon: `${ASSETS_URL}mathwallet.svg`
  // },
  // 'Ledger': {
  //   name: 'Ledger',
  //   url: 'https://www.ledger.com',
  //   icon: `${ASSETS_URL}ledger.svg`,
  //   adapter: LedgerWalletAdapter
  // },
  // 'Sollet': {
  //   name: 'Sollet',
  //   url: 'https://www.sollet.io',
  //   icon: `${ASSETS_URL}sollet.svg`
  // }
} as const
