export const scales = {
  S: 'S',
  M: 'M',
  L: 'L'
} as const

export type Scales = keyof typeof scales
