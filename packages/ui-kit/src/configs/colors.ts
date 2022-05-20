import { Colors } from '../types'

export const baseColors = {
  danger: '#F5466E',
  primaryBright: '#53DEE9',
  primaryDark: '#0098A1',
  secondary: '#7645D9',
  success: '#50E6B4',
  warning: '#F0A055',
  rainbow: 'linear-gradient(91.26deg, #8AD4EC 0%, #EF96FF 21.74%, #33FBC6 99.99%, #3DB18E 100%)'
}

export const brandColors = {
  binance: '#F0B90B',
}

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: '#605bff',
  primaryContrary: '#19D697',
  secondary: '#3D99CB',
  subtle: '#2D50F5',
  background: '#f5f4fc',
  backgroundSecondary: '#f5f4fc',
  backgroundDisabled: '#E9EAEB',
  contrast: '#191326',
  invertedContrast: '#FFFFFF',
  input: '#eeeaf4',
  inputSecondary: '#d7caec',
  tertiary: '#EFF4F5',
  text: '#452A7A',
  textContrary: '#f5fcff',
  textDisabled: '#8FA2B7',
  disabled: '#8FA2B7',
  textSubtle: '#8f80ba',
  borderColor: '#E9EAEB',
  card: '#fafcf9',
}

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: '#5a67cf',
  primaryContrary: '#F05500',
  secondary: '#F0A055',
  tertiary: '#41C84B',
  subtle: '#2D50F5',
  background: '#141428',
  backgroundSecondary: '#1e1e32',
  backgroundDisabled: '#3c3742',
  contrast: '#FFFFFF',
  invertedContrast: '#191326',
  input: '#483f5a',
  inputSecondary: '#66578D',
  primaryDark: '#0098A1',
  text: '#EAE2FC',
  textContrary: '#f5f4fc',
  textDisabled: '#8c8c8c',
  disabled: '#8c8c8c',
  textSubtle: '#A28BD4',
  borderColor: '#524B63',
  card: '#072036',
}
