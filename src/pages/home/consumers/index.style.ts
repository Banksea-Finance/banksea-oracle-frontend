import styled from 'styled-components'
import interfaceBac from '../../../images/home/interface/interfaceBac.png'
import { PageWrapper } from '@/libs/uikit/components'
import Flex from '@react-css/flex'

export const ConsumersModuleContainer = styled.div`
  height: 850px;
  background: url(${interfaceBac}) no-repeat;
  background-size: 100%;
  padding: 150px;
  
  ${({ theme }) => theme.mediaQueries.xl} {
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`

export const CodeContainer = styled.div`
  height: fit-content;
  flex: 9;

  pre {
    overflow: inherit;
    height: fit-content;
    line-height: 120%;
  }

  .hljs {
    width: 100%;
    height: 400px;
    background: rgba(250, 250, 255, 0.39);
    border: 1px solid #E6E6E6;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    color: #333333;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    //transform: scale(58%);
    height: 100%;
    width: 90vw;
    flex: 0;
  }
`

export const ConsumersModuleWrapper = styled(PageWrapper)`
  justify-content: space-between;
  flex-direction: row;

  

  ${({ theme }) => theme.mediaQueries.xl} {
    flex-direction: column;
    justify-content: start;
  }
`

export const DescriptionContainer = styled(Flex.Item)`
  
  ${({ theme }) => theme.mediaQueries.xl} {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    text-align: center;
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

  img:nth-of-type(2) {
    transition: 0.5s;
  }

  &:hover > img:nth-of-type(2) {
    margin-left: 10px;
  }
  
  ${({ theme }) => theme.mediaQueries.xl} {
    margin-top: 20px;
`
