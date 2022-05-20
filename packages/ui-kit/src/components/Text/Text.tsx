import styled from 'styled-components'
import { layout, space, typography } from 'styled-system'
import { getOverridableStyle, getThemeValue } from '../../utils'
import { TextProps } from './types'

const getColor = getOverridableStyle('Text', 'color', ({ color = 'text', theme }) => {
  return getThemeValue(`colors.${color}`, color)(theme)
})

const getFontSize = getOverridableStyle('Text', 'fontSize', ({ fontSize, small }) => {
  return small ? '14px' : fontSize || '16px'
})

const getFontFamily = getOverridableStyle('Text', 'fontFamily', ({ important }: TextProps) => {
  return important ? 'orbitron' : 'inherit'
})

const getFontWeight = getOverridableStyle('Text', 'fontWeight', ({ bold, important }) => {
  return (bold ? 700 : (important ? 400 : 500))
})

const getLineHeight = getOverridableStyle('Text', 'lineHeight', () => '1.5')

const Text = styled.div<TextProps>`
  color: ${getColor};
  font-size: ${getFontSize};
  font-family: ${getFontFamily};
  font-weight: ${getFontWeight};
  line-height: ${getLineHeight};

  .primary {
    color: ${({ theme }) => theme.colors.primary};
  }

  text-transform: ${({ textTransform }) => textTransform};

  ${space};
  ${layout};
  ${typography};
`

Text.defaultProps = {
  color: 'text',
  fontSize: '16px'
}

export { Text }
