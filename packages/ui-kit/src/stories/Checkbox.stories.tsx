import React from 'react'

import { Card, Checkbox, Grid, scales, variants } from '..'

export default {
  title: 'Components/Checkbox',
  component: Card,
  argTypes: {
  },
}

export const Scales = () => (
  <Grid p={'32px'} gridTemplateColumns={'repeat(3, 300px)'} gridGap={'16px'}>
    {
      Object.values(scales).map(scale => (
        <Checkbox
          key={`scale-${scale}`}
          scale={scale}
          label={`Scale ${scale}`}
        />
      ))
    }
  </Grid>
)

export const Variants = () => (
  <Grid p={'32px'} gridTemplateColumns={'repeat(3, 300px)'} gridGap={'16px'}>
    {
      Object.values(variants).map(variant => (
        <Checkbox
          key={`variant-${variant}`}
          variant={variant}
          label={`Variant ${variant}`}
        />
      ))
    }
  </Grid>
)

