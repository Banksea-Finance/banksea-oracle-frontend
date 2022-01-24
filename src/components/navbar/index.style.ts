import styled from 'styled-components'

export const NavbarContainer = styled.div`
  margin: 0 auto;
  height: 100px;
  max-width: 1400px;
  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  ${({ theme }) => theme.mediaQueries.xl} {
    height: 15vw;
  }
`

export const NavItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 518px;
  z-index: 99;
`
