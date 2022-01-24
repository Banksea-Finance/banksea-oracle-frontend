import styled from 'styled-components'
import marketBac from '@/images/market/marketBac.webp'
import { PageWrapper, Text } from '@/libs/uikit/components'

export const TokenDetailContainer = styled.div`
  background: url(${marketBac}) no-repeat;
  background-size: 100%;
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
`

export const TokenImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 500px;

  ${({ theme }) => theme.mediaQueries.xl} {
    height: 30vw;
  }
`

export const TokenDetailWrapper = styled(PageWrapper)`
  margin-top: 50px;
  margin-bottom: 50px;

  .area-left {
    width: 500px;
    height: 500px;
    object-fit: fill;
  }

  .area-right {
    width: 870px;

    .token-name {
      font-size: 30px;
      font-weight: bolder;
    }

    .browse {
      display: flex;
      align-items: center;

      span {
        color: #808080;
      }
    }
  }
`

export const CollapsibleBoxPrimaryContentContainer = styled.div<{ borderTop?: boolean }>`
  padding: 18px 30px;
`

export const CollapsibleBoxSecondaryContentContainer = styled.div<{ borderTop?: boolean }>`
  border-bottom: 1px solid #E6E6E6;
  background: white;
  padding: 13px 30px;

  border-top: ${props => props.borderTop ? '1px solid #E6E6E6' : ''};
`

export const OracleBoxContent = styled.div`
  padding: 0 50px 50px 50px;
  color: red;

  .node-item {
    width: 220px;
    height: 220px;
    background: rgba(255, 255, 255, 0.39);
    border: 1px solid #E6E6E6;
    border-radius: 10px;
    margin-top: 50px;

    .node-type {
      width: 100px;
      height: 24px;
      border: 1px solid #E6E6E6;
      border-radius: 24px;
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        width: 70px;
        height: 8px;
        background: rgba(130, 0, 255, 1);
        border-radius: 8px;
      }
    }

    img {
      margin-top: 26px;
    }
  }
`

export const SecondaryText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
`

