import styled, { DefaultTheme } from 'styled-components'
import { Variant } from '../Button/types'
import { getButtonMenuTheme } from './theme'

type StyledButtonMenuProps = {
  variant: Variant;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme }: StyledButtonMenuProps) => {
  return theme.isDark ? '#072036' : ''
}


const StyledButtonMenu = styled.div<{ variant: Variant }>`
  background-color: ${getBackgroundColor};
  border-radius: 40px;
  display: inline-flex;
  border: 2px ${p => getButtonMenuTheme(p).borderColor} solid;

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`

export default StyledButtonMenu
