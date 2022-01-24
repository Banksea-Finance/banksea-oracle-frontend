import { Colors } from './types'

export const baseColors = {
  failure: '#ED4B9E',
  primary: '#452A7A',
  primaryBright: '#19F096',
  primaryDark: '#0098A1',
  secondary: '#8200FF',
  success: '#31D0AA',
  warning: '#FFB237',
  rainbow: 'linear-gradient(91.26deg, #8AD4EC 0%, #EF96FF 21.74%, #33FBC6 99.99%, #3DB18E 100%)',
}

export const brandColors = {
  binance: '#F0B90B',
}

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: '#2A4F8F',
  primaryContrary: '#24F4B6',
  background: '#FAF9FA',
  backgroundDisabled: '#E9EAEB',
  contrast: '#191326',
  invertedContrast: '#FFFFFF',
  input: 'rgb(250,241,247)',
  inputSecondary: '#d7caec',
  tertiary: '#EFF4F5',
  text: '#452A7A',
  textDisabled: '#8FA2B7',
  textSubtle: '#8f80ba',
  borderColor: '#E9EAEB',
  card: '#fafcff',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)',
  },
}

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: '#24F4B6',
  primaryContrary: '#2A4F8F',
  background: 'rgb(49,49,49)',
  backgroundDisabled: '#3c3742',
  contrast: '#FFFFFF',
  invertedContrast: '#191326',
  input: '#483f5a',
  inputSecondary: '#66578D',
  primaryDark: '#0098A1',
  tertiary: '#353547',
  text: '#EAE2FC',
  textDisabled: '#666171',
  textSubtle: '#A28BD4',
  borderColor: '#524B63',
  card: '#072036',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
  },
}
