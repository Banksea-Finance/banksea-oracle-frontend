import styled from 'styled-components'
import nodesMap from '@/images/home/AINodes/nodesMap.png'

export const MapContainer = styled.div`
  margin-top: 191px;
  width: 1400px;
  overflow: hidden;
  position: relative;
`

export const MapMain = styled.div<{ scale: number }>`
  position: relative;
  width: 100%;
  height: 650px;
  margin-bottom: 20px;
  background-image: url(${nodesMap});
  background-repeat: no-repeat;
  background-size: 72%;
  background-position: top 10% left 50%;

  ${({ theme }) => theme.mediaQueries.maxXl} {
    transform: scale(${props => props.scale * 1.3}%);
    transform-origin: top;
  }
`

export const Title = styled.div`
  text-align: center;
  color: #333333;
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 4px;
  margin-top: 98px;
  
  ${({ theme }) => theme.mediaQueries.maxXl} {
    font-size: 8vw;
    width: 80vw;
    margin-left: calc((1400px - 80vw) / 2);
  }
`

export const ExecutingNodesContainer = styled.div`
  position: absolute;
  bottom: 15%;
  left: 0;
  width: 450px;

  @media screen and (max-width: 1500px) {
    position: relative;
    margin: -8vw auto 100px auto;
  }
  
  ${({ theme }) => theme.mediaQueries.maxXl} {
    margin: -10vw auto 100px auto;
  }

  ${({ theme }) => theme.mediaQueries.maxMd} {
    margin: -30vw auto 100px auto;
  }

  ${({ theme }) => theme.mediaQueries.maxSm} {
    margin: -100vw auto 100px auto;
    width: 90vw;
  }
`
