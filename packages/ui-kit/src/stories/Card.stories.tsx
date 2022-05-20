import React from 'react'

import { Card, CardRibbon, Colors, Grid, variants } from '..'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: {
      control: 'color'
    },
    color: {
      control: 'color'
    }
  },
}

const VariantsTemplate = (props: any) => (
  <Grid p={'32px'} gridTemplateColumns={'repeat(3, 300px)'} gridGap={'16px'}>
    {
      Object.values(variants).map(v => (
        <Card
          width={'300px'}
          height={'128px'}
          variant={v}
          key={v}
          color={'white'}
          justifyContent={'center'}
          alignItems={'center'}
          {...props}
        >
          Variant: {v}
        </Card>
      ))
    }
  </Grid>
)

const PlainCardTemplate = (props: any) => (
  <Grid p={'32px'} gridTemplateColumns={'repeat(3, 300px)'} gridGap={'16px'}>
    {
      Object.values(variants).map(v => (
        <Card
          width={'300px'}
          height={'128px'}
          variant={v}
          key={v}
          justifyContent={'center'}
          alignItems={'center'}
          color={'white'}
          plain
          {...props}
        >
          Plain & Variant: {v}
        </Card>
      ))
    }
  </Grid>
)

const CardWithRibbonTemplate = (props: any) => {
  const CardWithRibbonByVariant = ({ variant }: { variant: keyof Colors }) => (
    <Card
      width={'300px'}
      height={'188px'}
      justifyContent={'center'}
      alignItems={'center'}
      color={'white'}
      ribbon={<CardRibbon text={'Ribbon'} variantColor={variant} />}
      {...props}
    >
      Card
    </Card>
  )

  return (
    <Grid p={'32px'} gridTemplateColumns={'repeat(3, 300px)'} gridGap={'16px'}>
      <CardWithRibbonByVariant variant={'primary'} />
      <CardWithRibbonByVariant variant={'secondary'} />
      <CardWithRibbonByVariant variant={'tertiary'} />
      <CardWithRibbonByVariant variant={'danger'} />
      <CardWithRibbonByVariant variant={'success'} />
    </Grid>
  )
}

export const Variants = VariantsTemplate.bind({})
export const PlainCard = PlainCardTemplate.bind({})
export const CardWithRibbon = CardWithRibbonTemplate.bind({})
