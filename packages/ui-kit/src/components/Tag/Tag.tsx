import React from 'react'
import { TagProps } from './types'
import { StyledTag } from './StyledTag'
import { scales } from '../../types'

const Tag: React.FC<TagProps> = ({ startIcon, endIcon, children, ...props }) => (
  <StyledTag {...props}>
    {
      React.isValidElement(startIcon) &&
      React.cloneElement(startIcon, {
        mr: '4px'
      })
    }
    {children}
    {
      React.isValidElement(endIcon) &&
      React.cloneElement(endIcon, {
        ml: '4px'
      })
    }
  </StyledTag>
)

Tag.defaultProps = {
  variant: 'primary',
  scale: scales.M,
  outline: false,
}

export default Tag
