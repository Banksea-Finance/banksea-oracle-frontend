import React from 'react'
import { Box, Button, Card, CardProps, Flex, Grid, scales, Tag, Text } from '@banksea-finance/ui-kit'
import { PageWrapper } from '@/components/page-wrapper'

interface ProductPricePlanCardProps {
  variant: CardProps['variant']
  background: string

  credits: string
  price: string
  name: string
  popular?: boolean
  description: string

  supports: Array<{
    label: string
    supported: boolean
  }>
}

const ProductPricePlanCard: React.FC<ProductPricePlanCardProps> = ({
  credits, price, name, popular, description, supports, variant, background
}) => {
  return (
    <Card
      p={'24px 24px 48px 24px'}
      width={'100%'}
      flexDirection={'column'}
      backgroundColor={background}
      activeOnHover
      variant={variant}
    >
      <Flex jc={'space-between'} mb={'24px'}>
        <Box>
          <Text fontSize={'28px'} bold>
            {credits}
          </Text>
          <Text color={'textDisabled'} fontSize={'14px'}>API Credits*</Text>
        </Box>
        <Box>
          <Text fontSize={'28px'} bold>
            {price}
          </Text>
          <Text color={'textDisabled'} fontSize={'14px'}>Monthly</Text>
        </Box>
      </Flex>

      <Flex ai={'center'} mb={'4px'}>
        <Text fontSize={'20px'} bold mr={'4px'}>{name}</Text>
        {
          popular && <Tag scale={scales.S}>Most popular</Tag>
        }
      </Flex>
      <Text color={'textDisabled'} mb={'16px'}>{description}</Text>

      <Flex flexDirection={'column'} gap={'6px'} mb={'24px'}>
        {
          supports.map(({ label, supported }) => (
            <Flex key={label} ai={'center'}>
              <Text color={supported ? 'primary': 'textDisabled'} mr={'6px'} width={'12px'}>{supported ? '√' : '×'}</Text>
              <Text color={supported ? 'text': 'textDisabled'}>{label}</Text>
            </Flex>
          ))
        }
      </Flex>

      <Flex jc={'center'}>
        <Button>Get started {'>'}</Button>
      </Flex>
    </Card>
  )
}

const PLANS: Array<ProductPricePlanCardProps> = [
  {
    name: 'Discovery',
    background: 'backgroundSecondary',
    variant: 'disabled',
    price: 'Free',
    credits: '10,000',
    description: 'Interact with our powerful API’s for free with our Discover Plan, Great for tinkerers,traders, crayon learning web3.',
    supports: [
      { label: 'Auto Scaling', supported: false },
      { label: '25 Requests / sec', supported: true },
      { label: '1 Endpoint', supported: true },
      { label: 'Quick performance', supported: true },
      { label: 'Single Region', supported: true },
      { label: 'Community Support', supported: true }
    ]
  },
  {
    name: 'Build',
    background: 'card',
    variant: 'primary',
    price: '$49',
    credits: '1 Million',
    description: 'This plan is the starting point for businesses. All of our features plus auto-scaling to grow as your business grows.',
    supports: [
      { label: 'Auto Scaling at $20 / additional million', supported: true },
      { label: '100 Requests / sec', supported: true },
      { label: '10 Endpoint', supported: true },
      { label: 'Quicker performance', supported: true },
      { label: 'Multiple Region', supported: true },
      { label: '24hrs Support response time', supported: true }
    ]
  },
]

export const ProductPage: React.FC = () => {
  return (
    <PageWrapper py={'48px'}>
      <Text fontSize={'min(48px, 8vw)'} textAlign={'center'} mb={'16px'} maxWidth={'1200px'} gradient important>
        Simple, Metadata, Activity, AI analysis design for you
      </Text>

      <Text color={'textDisabled'} mb={'64px'} maxWidth={'600px'} textAlign={'center'}>
        With our plan, builders get access to the platform - popularity, market cap, NFT metadata, activity, NFT AI valuation, AI floor - and only pay for what they use.
      </Text>

      <Grid
        jc={'center'}
        flexWrap={'wrap'}
        width={'100%'}
        gap={'48px'}
        gridTemplateColumns={{
          xl: 'repeat(2, 500px)',
          _: 'repeat(1, min(500px, 90vw))'
        }}
      >
        {
          PLANS.map(plan => (
            <ProductPricePlanCard {...plan} key={plan.name} />
          ))
        }
      </Grid>
    </PageWrapper>
  )
}
