import styled from 'styled-components'
import documentBac from '../../../../images/document/documentBac.webp'

export const DataProvidersModuleContainer = styled.div`
  background: url(${documentBac}) no-repeat;
  background-size: 100%;
  padding-bottom: 100px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  
  ${({ theme }) => theme.mediaQueries.xl} {
    align-items: center;
  }
`

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  
  img {
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    flex-direction: column;
    margin-top: 50px;
  }
`

export const ToButton = styled.a`
  width: fit-content;
  background: #00DBFF;
  display: flex;
  padding: 16px 20px;
  border-radius: 10px;
  font-size: 18px;
  align-items: center;
  cursor: pointer;
  margin-top: 47px;
  font-weight: 600;

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

  img:nth-of-type(1) {
    width: 20px;
  }

  img:nth-of-type(2) {
    transition: 0.5s;
    width: 30px;
    
  }

  &:hover > img:nth-of-type(2) {
    margin-left: 10px;
  }
  
`
