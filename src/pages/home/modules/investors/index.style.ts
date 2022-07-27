import styled from 'styled-components'

export const InvestorsModuleContainer = styled.div`
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .row-1 {
    width: 1440px;
    margin-bottom: 55px;
  }
  
  ${({ theme }) => theme.mediaQueries.maxSm} {
    .row-1 {
      width: 350px;
      margin-bottom: 55px;
    }
  }
  
`
