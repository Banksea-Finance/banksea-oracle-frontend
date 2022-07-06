import BigNumber from 'bignumber.js'
import SolanaIcon from '@/images/icon/solana.png'
import EthIcon from '@/images/icon/eth.png'
import { PublicKey } from '@solana/web3.js'

export const shortenAddress = (address?: string | PublicKey, length = 6) => {
  const str = address?.toString()

  return str ? `${str.slice(0, length)}...${str.slice(-length)}` : '-'
}

export function numberWithCommas(x?: string | number | BigNumber, decimalPlace = 2, showSign?: boolean): string {
  if (!x?.toString().length) {
    return numberWithCommas('0', decimalPlace, showSign)
  }

  const trimTrailingZero = (x: string): string => {
    if (x.length <= decimalPlace) {
      return x.padEnd(decimalPlace, '0')
    }

    return x[x.length - 1] !== '0' ? x : trimTrailingZero(x.substring(0, x.length - 1))
  }

  const parts: string[] = new BigNumber(x).toFixed(decimalPlace).split('.')

  parts[0] = (parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')) ?? '0'

  if (!parts[1]) {
    parts[1] = '0'.repeat(decimalPlace)
  } else {
    parts[1] = trimTrailingZero(parts[1])
  }

  if (!decimalPlace) {
    return parts[0]
  }
  return [
    showSign && new BigNumber(x).gte(0) ? '+' : '',
    parts.join('.')
  ].join('')
}

export function simplifyNumber(x?: string | number | BigNumber, decimalPlace = 2): string {
  if (!x?.toString().length) {
    return '0'
  }

  const num = new BigNumber(x.toString())

  const KILO = new BigNumber('1000')
  const MILLION = new BigNumber('1000000')
  const BILLION = new BigNumber('1000000000')
  const TRILLION = new BigNumber('1000000000000')

  if (num.gte(TRILLION)) {
    return num.div(TRILLION).toFixed(decimalPlace) + 't'
  } else if (num.gte(BILLION)) {
    return num.div(BILLION).toFixed(decimalPlace) + 'B'
  } else if (num.gte(MILLION)) {
    return num.div(MILLION).toFixed(decimalPlace) + 'M'
  } else if (num.gte(KILO)) {
    return num.div(KILO).toFixed(decimalPlace) + 'K'
  } else {
    return num.toFixed(decimalPlace)
  }
}

export function formatTime(time: Date) {
  const now = Date.now()

  const diff = (now - time.getTime()) / 1000

  const onMinute = 60
  const onHour = onMinute * 60
  const onDay = onHour * 24
  const oneMonth = onDay * 30
  const oneYear = onDay * 365

  if (diff < 30) {
    return 'Just Now'
  } else if (diff < onHour) {
    return [Math.ceil(diff / onMinute), ' minute', diff / onMinute > 1 ? 's' : '', ' ago']
  } else if (diff < onDay) {
    return [Math.ceil(diff / onHour), ' hour', diff / onHour > 1 ? 's' : '', ' ago']
  } else if (diff < oneMonth) {
    return [Math.ceil(diff / onDay), ' day', diff / onDay > 1 ? 's' : '', ' ago']
  } else if (diff < oneYear) {
    return [Math.ceil(diff / oneMonth), ' month', diff / oneMonth > 1 ? 's' : '', ' ago']
  } else {
    return [Math.ceil(diff / oneYear), ' year', diff / oneYear > 1 ? 's' : '', ' ago']
  }
}

export function chunks<T>(array: T[], size: number): T[][] {
  return Array.apply<number, T[], T[][]>(
    0,
    new Array(Math.ceil(array.length / size))
  ).map((_, index) => array.slice(index * size, (index + 1) * size))
}

export function generateColumnsByObject(array?: Array<any>, opts?: { excludeFields?: string[], hideEmptyColumns?: boolean }) {
  const { excludeFields, hideEmptyColumns } = opts ?? {}

  const isColumnEmpty = (columnName: string) => {
    if (!hideEmptyColumns) {
      return false
    }

    return array?.map(o => o[columnName]).every(o => !o)
  }

  if (!array || !array[0]) {
    return []
  }

  return Object.entries(array[0])
    .filter(([key]) => !excludeFields?.includes(key) && !isColumnEmpty(key))
    .map(([key, value]) => {
      if (typeof value !== 'object') {
        return {
          title: key,
          dataIndex: key,
          key: key,
        }
      } else {
        return {
          title: key,
          children: Object.keys(value ?? {}).map(o => ({
            title: o,
            dataIndex: [key, o]
          }))
        }
      }
    })
}

export function Uint8ArrayToString(data: Array<number>) {
  return data.filter(o => o > 0).map(o => String.fromCharCode(o)).join('')
}

export async function sleep(milliseconds: number) {
  return await new Promise(resolve => setTimeout(resolve, milliseconds))
}

export function getCurrencyIcon(chainSource?: string): string | undefined {
  if (!chainSource) {
    return undefined
  }

  return {
    'Solana': SolanaIcon,
    'Ethereum': EthIcon,
  }[chainSource]
}
