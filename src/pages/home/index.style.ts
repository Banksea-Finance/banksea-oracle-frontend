import styled from 'styled-components'

export const HomeContainer = styled.div`
  ${({ theme }) => theme.mediaQueries.xl} {
    overflow-x: hidden;
  }
`
