import styled from 'styled-components'
import { layout, LayoutProps } from 'styled-system'

export const SummaryContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

export const RainbowBorderBox = styled.div<LayoutProps>`
  padding: 3px;
  background: linear-gradient(90deg, #FFB4FF 0%, #19F096 100%);
  border-radius: 10px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
  ${layout}
`

export const GridContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  display: grid;
  gap: 10px 24px;
  grid-template-columns: repeat(auto-fill, 282px);
  justify-content: center;
`
