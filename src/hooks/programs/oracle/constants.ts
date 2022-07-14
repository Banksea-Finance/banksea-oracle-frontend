import { PublicKey } from '@solana/web3.js'

export const ORACLE_PROGRAM_ID = new PublicKey(process.env.PROGRAM || 'HQPVbeV8aqJK7PQPrgp7ufP93uGh92dJXQNxyKkM2sBV')

export const ORACLE_ADDRESS = new PublicKey(process.env.ORACLE_ADDRESS || '7qVvNsM217KYgk3b4VVPWGEvbVaFbUhTFTxTwTizXHFL')
