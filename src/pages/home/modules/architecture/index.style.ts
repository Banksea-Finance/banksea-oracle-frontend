import styled from 'styled-components'
import AIValuationBac from '../../../../images/home/AIValuationBac.png'
import ReactZmage from 'react-zmage'

export const ArchitectureContainer = styled.div`
  width: 100%;
  background: url(${AIValuationBac}) no-repeat;
  background-size: 100%;
  margin-top: 47px;
`

export const AIValuationContent = styled.div`
`

export const Process = styled.div`
  width: 100%;
  margin: 79px auto 70px auto;
  color: #333333;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  
  .process-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    
    div {
      line-height: 22px;
    }
  }
`

// @ts-ignore
export const ArchitectureImage = styled(ReactZmage)`
  width: 100%;
  //position: relative;
`
