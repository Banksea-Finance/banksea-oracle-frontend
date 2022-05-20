import { css } from 'styled-components'

export const ScrollBarStyles = css`
  ::-webkit-scrollbar {
    width: 8px;
    overflow: hidden;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.textSubtle};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.input};
    border-radius: 10px;
  }
`
