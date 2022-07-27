import React from 'react'
import { ClipLoader } from 'react-spinners'
import { UseQueryResult } from 'react-query'
import { Text, TextProps } from '@banksea-finance/ui-kit'

export interface QueriedDataProps<DataType> extends TextProps {
  value: UseQueryResult<DataType | undefined>
  dataRender?: (data: DataType) => React.ReactNode
}

const QueriedData = <T,>({ value, dataRender, ...textProps }: QueriedDataProps<T>): JSX.Element => {
  const rendered = value.data ? (dataRender ? dataRender(value.data) : ((value.data as any).toString?.() || value.data)) : undefined

  return value.data ? (
    typeof rendered === 'string' ?
      <Text {...textProps}>{rendered}</Text>
      : rendered
  ) : (
    value.isFetching
      ? <ClipLoader color={'#abc'} size={16} css={'position: relative; top: 2px; left: 4px;'} />
      : <Text {...textProps}>-</Text>
  )
}

export default QueriedData
