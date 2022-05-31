/// <reference types="react-scripts" />
import 'styled-components'
import { ThemeConfig } from '@banksea-finance/ui-kit'

declare module 'styled-components' {

  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends ThemeConfig {}
}
