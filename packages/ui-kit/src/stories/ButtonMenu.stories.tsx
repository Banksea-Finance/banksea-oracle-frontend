import React, { useState } from 'react'
import { ButtonMenu, Grid } from '..'

export default {
  title: 'Components/ButtonMenu',
  component: ButtonMenu,
  argTypes: {},
}

export const Variants = () => {
  const [key, setKey] = useState('1')

  return (
    <Grid p={'32px'} gridTemplateColumns={'max-content'} gridGap={'16px'}>
      <ButtonMenu activeKey={key} onItemClick={({ key }) => setKey(key!)}>
        <ButtonMenu.Item itemKey={'1'}>Item 1</ButtonMenu.Item>
        <ButtonMenu.Item itemKey={'2'}>Item 2</ButtonMenu.Item>
      </ButtonMenu>

      <ButtonMenu activeKey={key} onItemClick={({ key }) => setKey(key!)} variant={'secondary'}>
        <ButtonMenu.Item itemKey={'1'}>Item 1</ButtonMenu.Item>
        <ButtonMenu.Item itemKey={'2'}>Item 2</ButtonMenu.Item>
      </ButtonMenu>

      <ButtonMenu activeKey={key} onItemClick={({ key }) => setKey(key!)} variant={'primaryContrary'}>
        <ButtonMenu.Item itemKey={'1'}>Item 1</ButtonMenu.Item>
        <ButtonMenu.Item itemKey={'2'}>Item 2</ButtonMenu.Item>
      </ButtonMenu>
    </Grid>
  )
}

export const Scales = () => {
  const [key, setKey] = useState('1')

  return (
    <Grid p={'32px'} gridTemplateColumns={'max-content'} gridGap={'16px'}>
      <ButtonMenu activeKey={key} onItemClick={({ key }) => setKey(key!)} scale={'S'}>
        <ButtonMenu.Item itemKey={'1'}>Item 1</ButtonMenu.Item>
        <ButtonMenu.Item itemKey={'2'}>Item 2</ButtonMenu.Item>
        <ButtonMenu.Item itemKey={'3'}>Item 3</ButtonMenu.Item>
      </ButtonMenu>

      <ButtonMenu activeKey={key} onItemClick={({ key }) => setKey(key!)} scale={'M'}>
        <ButtonMenu.Item itemKey={'1'}>Item 1</ButtonMenu.Item>
        <ButtonMenu.Item itemKey={'2'}>Item 2</ButtonMenu.Item>
        <ButtonMenu.Item itemKey={'3'}>Item 3</ButtonMenu.Item>
      </ButtonMenu>

      <ButtonMenu activeKey={key} onItemClick={({ key }) => setKey(key!)} scale={'L'}>
        <ButtonMenu.Item itemKey={'1'}>Item 1</ButtonMenu.Item>
        <ButtonMenu.Item itemKey={'2'}>Item 2</ButtonMenu.Item>
        <ButtonMenu.Item itemKey={'3'}>Item 3</ButtonMenu.Item>
      </ButtonMenu>
    </Grid>
  )
}
