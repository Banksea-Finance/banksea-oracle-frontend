import Flex from '@react-css/flex'
import React from 'react'
import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'

const TitleText = styled.div<{ small?: boolean }>`
  text-align: center;
  color: #333333;
  font-size: ${props => props.small ? '46px' : '50px'};
  font-weight: 600;
  font-family: orbitron;
  letter-spacing: 4px;
  line-height: 120%;

  ${({ theme }) => theme.mediaQueries.xl} {
    max-font-size: 50px;
    font-size: ${props => props.small ? '7.75vw' : '8vw'};
    width: 80vw;
  }
`

const Line = styled.div`
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #FFB4FF 0%, #19F096 100%);
  margin: 30px auto 0 auto;
`

export interface ModuleTitleProps extends LayoutProps, SpaceProps {
  small?: boolean
}

const ModuleTitleContainer = styled(Flex)<LayoutProps>`
  ${layout}
  ${space}
`

const ModuleTitle: React.FC<ModuleTitleProps> = ({ children, small, ...layoutProps }) => {
  return (
    <ModuleTitleContainer column alignItemsCenter {...layoutProps}>
      <TitleText small={small}>
        {children}
      </TitleText>
      <Line />
    </ModuleTitleContainer>
  )
}

export default ModuleTitle
