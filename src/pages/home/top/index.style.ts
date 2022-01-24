import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageWrapper } from '@/libs/uikit/components'

export const TopModuleContainer = styled.div`
  height: 960px;
  background: url(${require('@/images/home/topBac.webp').default}) no-repeat;
  background-size: cover;
  
  ${({ theme }) => theme.mediaQueries.xl} {
    height: 80vh;
  }
`

export const NewsContainer = styled.div`
  height: 50px;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  .information-degree {
    padding: 3px;
    background: ${({ theme }) => theme.colors.primaryBright};
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 3px;
    font-size: 14px;
  }

  .information-data {
    color: white;
    margin-left: 11px;
    font-size: 20px;

    ${({ theme }) => theme.mediaQueries.xl} {
      font-size: 4vw;
    }
  }
  
  ${({ theme }) => theme.mediaQueries.xl} {
    padding: 0 10%;
  }
`

export const TopMain = styled(PageWrapper)`
  height: 100%;
  align-items: start;
  justify-content: center;
  position: relative;

  ${({ theme }) => theme.mediaQueries.xl} {
    flex-direction: column;
    align-items: center;
    justify-content: start;
    text-align: center;
    padding-top: 15vh;
  }
`

export const MainTitle = styled.div`
  font-size: 54px;
  opacity: 1;
  font-family: 'orbitron';
  font-weight: bold;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 120%;
  
  b {
    color: #8200FF;
    font-family: 'orbitron';
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    font-size: 8vw;
    line-height: 9vw;
  }
`

export const Description = styled.div`
  font-size: 20px;
  margin-top: 21px;
  line-height: 120%;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 80%;
    font-size: 4.8vw;
  }
`

export const TopButton = styled.div`
  display: flex;
  margin-top: 77px;
  font-weight: 600;

  ${({ theme }) => theme.mediaQueries.xl} {
    font-size: 4vw;
  }
`

export const DevelopButton = styled.a`
  border: 1px solid #00DBFF;
  background: white;
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;

  span {
    margin-left: 9px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 48%;
    padding: 16px;

    img {
      width: 20px;
    }

    font-size: 4.2vw;
  }
`

export const SeeButton = styled(Link)`
  background: #00DBFF;
  display: flex;
  padding: 16px 20px;
  border-radius: 10px;
  font-size: 18px;
  margin-left: 10px;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 6px;
    margin-right: 24px;
  }

  .to-data {
    width: 38px;
    height: 38px;
    background: #333;
    border-radius: 8px;
    margin-left: 24px;
  }

  img:nth-of-type(2) {
    transition: 0.5s;
  }

  &:hover > img:nth-of-type(2) {
    margin-left: 10px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 48%;

    span {
      margin-left: 15px;
      margin-right: 0;
    }
    
    img:nth-of-type(2) {
      display: none;
    }

    padding: 16px;

    img {
      width: 20px;
    }

    font-size: 4.2vw;
  }
;
`
