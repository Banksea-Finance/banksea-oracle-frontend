import styled from 'styled-components'
import marketBac from '../../images/market/marketBac.webp'
import { Text } from '@banksea-finance/ui-kit'
export const CollectionsListContainer = styled.div`
  background: url(${marketBac}) no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
`

export const Title = styled.div`
  text-align: center;
  color: #333333;
  font-size: 50px;
  font-weight: 600;
  font-family: orbitron;
  letter-spacing: 4px;
  user-select: none;
`

export const Line = styled.div`
  width: 200px;
  margin-left: calc((100% - 200px) / 2);
  height: 4px;
  background: linear-gradient(90deg, #FFB4FF 0%, #19F096 100%);
  margin-top: 30px;
`

export const Description = styled(Text)`
  margin: 40px 0 80px 0;
  font-size: 18px;
  text-align: center;
  color: #333333;
  font-weight: 600;
`
