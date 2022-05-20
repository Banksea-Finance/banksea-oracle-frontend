export const variants = {
  primary: 'primary',
  primaryContrary: 'primaryContrary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  subtle: 'subtle',
  disabled: 'disabled',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
} as const

export type Variants = keyof typeof variants;
