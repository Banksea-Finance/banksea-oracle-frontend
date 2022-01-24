import styled from 'styled-components'
import marketBac from '../../images/market/marketBac.webp'
import { Link } from 'react-router-dom'
import { PageWrapper } from '@/libs/uikit/components'
import ReactMarkdown from 'react-markdown'

export const CollectionDetailContainer = styled.div`
  background: url(${marketBac}) no-repeat;
  background-size: 100%;
  margin: 0 auto;
  min-height: 100vh;
`

export const CollectionDetailWrapper = styled(PageWrapper)`
  padding-bottom: 100px;
`

export const Description = styled(ReactMarkdown)`
  line-height: 32px;
  margin-bottom: 30px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  
  a {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`

export const CollectionImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-top: 40px;
  object-fit: cover;
  margin-bottom: 60px;
`

export const CollectionName = styled.div`
  width: fit-content;
  font-size: 48px;
  font-weight: bolder;
  letter-spacing: 1px;
  border-radius: 10px;
  font-family: 'orbitron';
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 50px;
`

export const CollectionTokenContainer = styled.div`
  margin-top: 78px;
  width: 100%;

  .total {
    margin-top: 22px;
    color: #808080;
  }

  .collectionTokenList {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    flex-wrap: wrap;
  }
`

export const GridContainer = styled.div`
  display: grid;
  margin: 24px 0;

  grid-template-columns: repeat(auto-fill, 220px);
  gap: 15px 25px;
  justify-content: center;
`

export const CollectionTokenItemContainer = styled(Link)`
  cursor: pointer;
  width: 220px;
  height: 300px;
  background-color: #333333;
  border-radius: 10px;
  padding: 10px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .token-price-main {
    display: flex;
    align-items: center;

    .token-currency {
      display: inline-block;
      padding: 0 4px;
      color: white;
      font-weight: bolder;
      background: #19F096;
      border-radius: 4px;
    }

    .token-price {
      margin-left: 5px;
      color: #19F096;
      font-weight: 600;
      font-size: 18px;
    }
  }

  .browse-num {
    display: flex;
    align-items: center;

    span {
      color: #19F096;
    }
  }

  &.empty {
    padding: 0;
    height: 0;
  }
`

export const StatisticsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 291px);
  gap: 36px 10px;
`

export const StatisticContainer = styled.div`
  width: 291px;
  background: ${({ theme }) => theme.colors.rainbow};
  padding: 3px;
  border-radius: 10px;
  margin-bottom: 10px;

  .wrapper {
    border-radius: 10px;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    width: 100%;
  }

  .value {
    font-size: 35px;
    font-family: orbitron;
  }

  .title {
    color: #969696;
    font-weight: 500;
  }

  .divider {
    height: 3px;
    width: 70px;
    margin: 10px 0 14px 0;
    background: ${({ theme }) => theme.colors.rainbow}
  }
`

