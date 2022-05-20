import { createGlobalStyle } from 'styled-components'
import { NotificationStyleMixin } from '../components/Notification'
import { ResetDefaultStyles } from './ResetDefaultStyles'
import { ScrollBarStyles } from './ScrollBar'

export const GlobalStyles = createGlobalStyle`
  ${ResetDefaultStyles}
  ${NotificationStyleMixin}
  ${ScrollBarStyles}

  body {
    background: ${({ theme }) => theme.colors.background};
  }
`
