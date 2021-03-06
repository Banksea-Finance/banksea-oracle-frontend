import React from 'react'
import { Button, Card, CardProps, Flex, Grid, Text } from '@banksea-finance/ui-kit'
import { PageWrapper } from '@/components/page-wrapper'

interface ApiPricePlanCardProps {
  variant: CardProps['variant']
  background: string

  credits: string
  price: string
  name: string
  popular?: boolean
  description: React.ReactNode

  supportedDimensions: Array<{
    label: string
    supported: boolean
  }>

  supportedData: string[]
}

const ApiPricePlanCard: React.FC<ApiPricePlanCardProps> = ({
  price, name, description, supportedDimensions, variant, background, supportedData
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
      <Flex jc={'space-between'} mb={'24px'} ai={'flex-start'}>
        <Text fontSize={'32px'} bold>
          {name}
        </Text>
        <Text fontSize={'24px'} bold>
          {price}
        </Text>
      </Flex>

      <Text color={'textDisabled'} mb={'16px'}>{description}</Text>

      <Grid gridTemplateColumns={'100%'} gap={'6px'} mb={'12px'}>
        {
          supportedDimensions.map(({ label, supported }) => (
            <Flex key={label} ai={'center'}>
              <Text color={supported ? 'primary': 'textDisabled'} mr={'6px'} width={'12px'}>{supported ? '√' : '×'}</Text>
              <Text color={supported ? 'text': 'textDisabled'}>{label}</Text>
            </Flex>
          ))
        }
      </Grid>

      <Grid gridTemplateColumns={'100%'} gap={'6px'} mb={'24px'}>
        {
          supportedData.map(data => (
            <Flex key={data} ai={'center'}>
              <Text color={'primary'} mr={'6px'} width={'12px'}>{'√'}</Text>
              <Text color={'text'}>{data}</Text>
            </Flex>
          ))
        }
      </Grid>

      <Flex jc={'center'}>
        <Button
          as={'a'}
          href={'https://c2dtw7wmuwa.typeform.com/to/DBQ3SUXv'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          Get started {'>'}
        </Button>
      </Flex>
    </Card>
  )
}

const PLANS: Array<ApiPricePlanCardProps> = [
  {
    name: 'Discovery',
    background: 'backgroundSecondary',
    variant: 'disabled',
    price: 'Free',
    credits: '10,000',
    description: <span>Interact with our powerful API for free with our <b>Discovery Plan</b>. Great for traders tracking nft.</span>,
    supportedDimensions: [
      { label: 'Auto Scaling', supported: false },
      { label: '25 Requests / sec', supported: true },
      { label: 'Quick performance', supported: true },
      { label: 'Single Region', supported: true },
    ],
    supportedData: [
      'Metadata',
      'Activity',
      'Analysis'
    ]
  },
  {
    name: 'Build',
    background: 'card',
    variant: 'primary',
    price: 'Enterprise',
    credits: '1 Million',
    description: 'This plan is the starting point for businesses. It will automatically grow as your business grows by auto-scaling.',
    supportedDimensions: [
      { label: 'Auto Scaling', supported: true },
      { label: '100 Requests / sec', supported: true },
      { label: 'Quicker performance', supported: true },
      { label: 'Multiple Region', supported: true },
    ],
    supportedData: [
      'Metadata',
      'All-time Activity',
      'Real-time AI Analysis'
    ]
  },
]

export const ApiPage: React.FC = () => {
  return (
    <PageWrapper py={'48px'}>
      <Text
        fontSize={'min(45px, 6vw)'}
        textAlign={'center'}
        mb={'16px'}
        maxWidth={'1200px'}
        gradient
        important
        fontWeight={600}
      >
        Metadata, Activity, AI analysis designed for you
      </Text>

      <Text color={'textDisabled'} mb={'64px'} maxWidth={'600px'} textAlign={'center'}>
        You can access the service - popularity, market cap, NFT metadata, Transaction, NFT AI valuation, AI floor price etc, and only pay for what you use.
      </Text>

      <Grid
        jc={'center'}
        width={'100%'}
        gap={{ xl: '48px', _: '24px' }}
        gridTemplateColumns={{
          lg: 'repeat(2, min(500px, calc(50vw - 48px)))',
          _: 'repeat(1, min(500px, 90vw))'
        }}
      >
        {
          PLANS.map(plan => (
            <ApiPricePlanCard {...plan} key={plan.name} />
          ))
        }
      </Grid>
    </PageWrapper>
  )
}
