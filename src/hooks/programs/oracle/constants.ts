import { PublicKey } from '@solana/web3.js'

export const ORACLE_PROGRAM_ID = new PublicKey(process.env.PROGRAM || '9XsWF2JwMgzBQZqMpuKbiFjXc7R6Zk6zhgRaxuC8EdyF')

export const ORACLE_ADDRESS = new PublicKey(process.env.ORACLE_ADDRESS || '3Kx7UXtSmiGA89HmLPiher2jLAnooHMPPUpC9x1pPkP1')
