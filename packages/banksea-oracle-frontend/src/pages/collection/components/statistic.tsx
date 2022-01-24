import React from 'react'
import { StatisticContainer } from '../index.style'

export type StatisticProps = {
  title: string
  value?: string
}

const Statistic: React.FC<StatisticProps> = ({ title, value }) => {
  return (
    <StatisticContainer>
      <div className="wrapper">
        <div className="value">{value || 'No data'}</div>
        <div className="divider" />
        <div className="title">{title}</div>
      </div>
    </StatisticContainer>
  )
}

export default Statistic
