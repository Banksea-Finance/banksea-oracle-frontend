import React from 'react'

import { Button, FormItem, Grid, Input, scales, variants } from '..'
import { AiOutlineEnter, AiOutlineFileSearch, BsSearch, RiTerminalBoxLine } from 'react-icons/all'
import { RiParenthesesFill } from 'react-icons/ri'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
  },
}

export const Scales = () => (
  <Grid p={'32px'} gridTemplateColumns={'repeat(1, max-content)'} gridGap={'32px'}>
    {
      Object.values(scales).map(scale => (
        <FormItem labelWidth={'90px'} label={`Scale ${scale}`} key={scale}>
          <Input scale={scale} key={scale} placeholder={'placeholder...'} />
        </FormItem>
      ))
    }
  </Grid>
)

export const Variants = () => (
  <Grid p={'32px'} gridTemplateColumns={'repeat(3, max-content)'} gridGap={'32px'}>
    {
      Object.values(variants).map(variant => (
        <FormItem labelPosition={'top'} label={`Variant ${variant}`} key={variant}>
          <Input variant={variant} key={variant} placeholder={'placeholder...'} />
        </FormItem>
      ))
    }

    <FormItem labelPosition={'top'} label={'Disabled Input'}>
      <Input disabled placeholder={'placeholder...'} />
    </FormItem>
  </Grid>
)

export const WithPrefixOrSuffix = () => (
  <Grid p={'32px'} gridTemplateColumns={'repeat(1, max-content)'} gridGap={'32px'}>
    <FormItem labelPosition={'top'} label={'Prefix & Suffix'}>
      <Input placeholder={'placeholder...'} startAdornment={<BsSearch />} endAdornment={<AiOutlineEnter />} />
    </FormItem>
    <FormItem labelPosition={'top'} label={'Prefix only'}>
      <Input placeholder={'placeholder...'} startAdornment={<BsSearch />}  />
    </FormItem>
    <FormItem labelPosition={'top'} label={'Suffix only'}>
      <Input placeholder={'placeholder...'} endAdornment={<AiOutlineEnter />} />
    </FormItem>
    <FormItem labelPosition={'top'} label={'Suffix only'}>
      <Input placeholder={'placeholder...'} endAdornment={<Button>Search</Button>} suffixGap={'0'} />
    </FormItem>
  </Grid>
)
