import React from 'react'
import { Button, Grid, Notification } from '../components'
import { useNotify } from '../contexts'

export default {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {},
}

export const Variants = () => {
  return (
    <Grid padding={'16px'} gridTemplateColumns={'repeat(2, max-content)'} gridGap={'32px'}>
      <Notification title={'Here is title'} description={'Here is message'} variant={'success'} />
      <Notification title={'Here is title'} description={'Here is message'} variant={'danger'} />
      <Notification title={'Here is title'} description={'Here is message'} variant={'warning'} />
      <Notification title={'Here is title'} description={'Here is message'} variant={'primary'} />
    </Grid>
  )
}

export const TriggerByHook = () => {
  const { open } = useNotify()

  return (
    <Grid padding={'16px'} gridTemplateColumns={'repeat(2, max-content)'} gridGap={'32px'}>
      <Button
        onClick={() => open({
          title: 'Here is title',
          description: 'Here is description',
          placement: 'bottomLeft'
        })}
      >
        Notify(bottomLeft)
      </Button>
      <Button
        onClick={() => open({
          title: 'Here is title',
          description: 'Here is description',
          placement: 'bottomRight'
        })}
      >
        Notify(bottomRight)
      </Button>
      <Button
        onClick={() => open({
          title: 'Here is title',
          description: 'Here is description',
          placement: 'topLeft'
        })}
      >
        Notify(topLeft)
      </Button>
      <Button
        onClick={() => open({
          title: 'Here is title',
          description: 'Here is description',
          placement: 'topRight'
        })}
      >
        Notify(topRight)
      </Button>
    </Grid>
  )
}
