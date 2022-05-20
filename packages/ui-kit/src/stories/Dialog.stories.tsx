import React from 'react'

import { Dialog, Grid, variants } from '..'
import { RiTerminalBoxLine } from 'react-icons/all'

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
  },
}

export const Variants = () => (
  <Grid p={'32px'} gridTemplateColumns={'repeat(2, max-content)'} gridGap={'32px'}>
    {
      Object.values(variants).map(v => (
        <Dialog
          title={'Dialog Title'}
          width={'300px'}
          variant={v}
          key={v}
          color={'white'}
        >
          Variant: {v}
        </Dialog>
      ))
    }
  </Grid>
)

export const WithFooter = () => (
  <Grid p={'32px'} gridTemplateColumns={'repeat(2, max-content)'} gridGap={'32px'}>
    <Dialog
      title={'Dialog Title'}
      width={'300px'}
      color={'white'}
      onConfirm={() => alert('confirm')}
    >
      Confirm only
    </Dialog>

    <Dialog
      title={'Dialog Title'}
      width={'300px'}
      color={'white'}
      onCancel={() => alert('cancel')}
      onConfirm={() => alert('confirm')}
    >
      Both Confirm & Cancel
    </Dialog>

    <Dialog
      title={'Dialog Title'}
      width={'300px'}
      color={'white'}
      onCancel={() => alert('cancel')}
      onConfirm={() => alert('confirm')}
      cancelButtonProps={{ children: 'No' }}
      confirmButtonProps={{ children: 'Yes' }}
    >
      Custom Button Text
    </Dialog>

    <Dialog
      title={'Dialog Title'}
      width={'300px'}
      color={'white'}
      onCancel={() => alert('cancel')}
      onConfirm={() => alert('confirm')}
      cancelButtonProps={{ disabled: true }}
      confirmButtonProps={{ variant: 'success' }}
    >
      Custom Button Props
    </Dialog>

  </Grid>
)

export const WithBottomMessage = () => (
  <Grid p={'32px'} gridTemplateColumns={'repeat(2, max-content)'} gridGap={'32px'}>
    <Dialog
      title={'Dialog Title'}
      width={'300px'}
      color={'white'}
      onCancel={() => alert('cancel')}
      onConfirm={() => alert('confirm')}
      bottomMessage={'Hello world!'}
    >
      Dialog with Bottom Message
    </Dialog>

    <Dialog
      title={'Dialog Title'}
      width={'300px'}
      color={'white'}
      onCancel={() => alert('cancel')}
      onConfirm={() => alert('confirm')}
      bottomMessage={{ children: 'Error message!!', color: 'danger' }}
    >
      Custom bottom message props
    </Dialog>
  </Grid>
)

export const WithTitlePrefix = () => (
  <Grid p={'32px'} gridTemplateColumns={'repeat(2, max-content)'} gridGap={'32px'}>
    <Dialog
      title={'Dialog Title'}
      width={'300px'}
      color={'white'}
      onCancel={() => alert('cancel')}
      onConfirm={() => alert('confirm')}
      bottomMessage={'Hello world!'}
      titlePrefix={<RiTerminalBoxLine style={{ marginRight: '4px' }} />}
    >
      Dialog with title prefix
    </Dialog>
  </Grid>
)
