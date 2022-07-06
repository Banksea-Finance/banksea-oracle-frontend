import { PublicKey } from '@solana/web3.js'

export const ORACLE_PROGRAM_ID = new PublicKey(process.env.PROGRAM || '5qLP13944CfqRao6TCS5UpeJ8poUp4ibTWifR3Jv2csU')

export const ORACLE_ADDRESS = new PublicKey(process.env.ORACLE_ADDRESS || '56thNjWVDhSKx9BcHGd2QzehdbNyVCRFofeLywTNEjcB')
