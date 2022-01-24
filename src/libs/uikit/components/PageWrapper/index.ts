import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  
  max-width: ${({ theme }) => theme.siteWidth};
  width: 90%;

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 96%;
  }

  margin-left: auto;
  margin-right: auto;
`

export default PageWrapper
