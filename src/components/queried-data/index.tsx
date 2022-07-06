import React from 'react'
import { ClipLoader } from 'react-spinners'
import { UseQueryResult } from 'react-query'
import { Text, TextProps } from '@banksea-finance/ui-kit'

export interface QueriedDataProps<DataType> extends TextProps {
  value: UseQueryResult<DataType | undefined>
  displayFunction?: (data: DataType) => React.ReactNode
}

const QueriedData = <T,>({ value, displayFunction, ...textProps }: QueriedDataProps<T>): JSX.Element => {
  return value.data ? (
    <Text {...textProps}>
      {
        displayFunction
          ? displayFunction(value.data)
          : (
            (value.data as any).toString?.() || value.data
          )
      }
    </Text>
  ) : (
    value.isFetching
      ? <ClipLoader color={'#abc'} size={16} css={'position: relative; top: 2px; left: 4px;'} />
      : <Text {...textProps}>-</Text>
  )
}

export default QueriedData
