import styled from 'styled-components'
import { Text } from '@banksea-finance/ui-kit'
export const MarketPageContainer = styled.div`
  background: url(${require('@/images/market/marketBac.webp').default}) no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
  
  width: 100%;
  padding-top: 100px;
  overflow-x: hidden;
`

export const HomeModuleTitle = styled(Text)`
  width: fit-content;
  font-size: 30px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.background};
  letter-spacing: 1px;
  padding: 10px 25px;
  border-radius: 10px;
  background: linear-gradient(90deg, #FFB4FF 0%, #19F096 100%);
  font-family: orbitron;
  font-weight: 600;
  
  ${({ theme }) => theme.mediaQueries.xl} {
    font-size: 6vw;
    margin: 0 auto 20px auto;
  }
`
