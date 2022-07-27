import styled from 'styled-components'
import { Box } from '@banksea-finance/ui-kit'

export const PageWrapper = styled(Box)`
  width: 96vw;
  min-height: 70vh;
  max-width: ${({ theme }) => theme.siteWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  & > * {
    z-index: 10;
  }
`
