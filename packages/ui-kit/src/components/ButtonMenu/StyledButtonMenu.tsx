import styled from 'styled-components'
import { space } from 'styled-system'
import { StyledButtonMenuProps } from './types'
import { getOverridableStyle } from '../../utils'
import { scales } from '../../types'

const getBackgroundColor = getOverridableStyle('ButtonMenu', 'backgroundColor', () => 'transparent')

const getPadding = getOverridableStyle('ButtonMenu', 'padding', ({ scale = 'M' }) => ({
  [scales.S]: '2px',
  [scales.M]: '3px',
  [scales.L]: '4px',
}[scale]))

const getBorderRadius = getOverridableStyle('ButtonMenu', 'borderRadius', () => '40px')

const getBorder = getOverridableStyle('ButtonMenu', 'border', ({ theme, variant = 'primary' }) => variant !== 'outlined' ? `1px solid ${theme.colors[variant]}` : '1px solid #ccc')

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
  width: fit-content;
  background-color: ${getBackgroundColor};
  border: ${getBorder};
  padding: ${getPadding};
  border-radius: ${getBorderRadius};
  
  display: inline-flex;

  & > button + button,
  & > a + a {
    margin-left: 2px;
  }

  ${space}
`

export default StyledButtonMenu
