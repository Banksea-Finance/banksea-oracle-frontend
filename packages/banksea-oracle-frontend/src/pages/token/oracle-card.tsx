import React from 'react'
import styled from 'styled-components'
import { Text } from '@/libs/uikit/components'

export type OracleCardProps = {
  logo: string
  price: number | string
  name?: string
  status?: unknown
}

export const OracleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 220px;
  background: rgba(255, 255, 255, 0.39);
  border: 1px solid #E6E6E6;
  border-radius: 10px;
  margin-top: 50px;
  padding: 20px 0 31px 0;

  img {
    margin-top: 26px;
    height: 80px;
    object-fit: cover;
  }
`

const StatusTagContainer = styled.div<{ status?: unknown }>`
  width: 100px;
  height: 24px;
  border: 1px solid #E6E6E6;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  div {
    width: 70px;
    height: 8px;
    background: rgba(130, 0, 255, 1);
    border-radius: 8px;    
  }
`

const StatusTag: React.FC = () => {
  return (
    <StatusTagContainer>
      <div />
    </StatusTagContainer>
  )
}

const OracleCard: React.FC<OracleCardProps> = ({ logo, price }) => {
  const defaultImage = require('@/images/icon/tokenDetail/banksea.svg').default

  return (
    <OracleCardContainer>
      <StatusTag />
      <img src={logo || defaultImage} />
      <Text marginTop={'17px'} color={'textDisabled'}>
        {price}
      </Text>
    </OracleCardContainer>
  )
}

export default OracleCard
