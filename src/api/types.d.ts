export interface OpenBlindBoxRequest {
  wallet: string
  requestId: string
  boxId: string
  status: unknown
  sign: string
}


export interface OpenBlindBoxResponse {
  requestId: string
}
