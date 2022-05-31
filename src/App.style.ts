import styled from 'styled-components'

export const AppContainer = styled.div`
  transition: background-color 0.38s;
  min-width: 370px;
  overflow-x: auto;
`

export const BackTopButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.background};
`
