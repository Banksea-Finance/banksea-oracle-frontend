import React from 'react'

import { Button, Grid, scales, variants } from '..'
import { BsFillAlarmFill, BsFillArchiveFill } from 'react-icons/bs'
import { upperFirst } from 'lodash'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
}

export const Scales = () => {
  return (
    <Grid p={'32px'} gridGap={'8px'} gridTemplateColumns={'repeat(3, max-content)'} alignItems={'end'}>
      {
        Object.values(scales).map(scale => (
          <Button scale={scale} key={scale}>
            Scale {scale} Button
          </Button>
        ))
      }
    </Grid>
  )
}

export const Variants = () => {
  return (
    <Grid p={'32px'} gridGap={'16px'} gridTemplateColumns={'repeat(5, max-content)'}>
      {
        Object.values(variants).map(v => (
          <Button variant={v} key={v}>
            {upperFirst(v)} Button
          </Button>
        ))
      }

      <Button disabled>
        Disabled
      </Button>
    </Grid>
  )
}

export const WithIcons = () => {
  return (
    <Grid p={'32px'} gridGap={'8px'} gridTemplateColumns={'repeat(5, max-content)'}>
      <Button startIcon={<BsFillAlarmFill />}>
        Prefix
      </Button>
      <Button endIcon={<BsFillArchiveFill />}>
        Suffix
      </Button>
      <Button startIcon={<BsFillAlarmFill />} endIcon={<BsFillArchiveFill />}>
        Prefix & Suffix
      </Button>
    </Grid>
  )
}
