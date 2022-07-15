import React from 'react'
import { Text } from '@banksea-finance/ui-kit'
import styled from 'styled-components'

const Container = styled.div`
  & > * {
    z-index: 11;
  }
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 48px 0;
  width: 100%;
`

export const RoadmapPage: React.FC = () => {
  return (
    <Container>
      <Text fontSize={'min(60px, 12vw)'} textAlign={'center'} mb={{ xl: '48px', _: '24px' }} maxWidth={'1200px'} gradient important>
        Roadmap
      </Text>

      <img src={require('@/assets/images/pages/roadmap/roadmap.png')} alt="" style={{ width: 'min(900px, 100%)' }} />
    </Container>
  )
}
