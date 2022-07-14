import React from 'react'
import { MediumPublication, useBankseaMediumPublicationsQuery } from '@/hooks/queries'
import { Card, Flex, Grid, Text } from '@banksea-finance/ui-kit'
import { ModuleTitle } from '@/components/module-title'

const NewsCard: React.FC<MediumPublication> = ({ imageUrl, link, content, date, title }) => {
  return (
    <Card
      variant={'disabled'}
      activeVariant={'primary'}
      activeOnHover
      flexDirection={'column'}
      width={'100%'}
      height={'fit-content'}
      color={'backgroundSecondary'}
      p={{ sm: '0 0 32px 0', _: '0 0 8px 0' }}
    >
      <img src={imageUrl} alt="" style={{ width: '100%', height: '50%', objectFit: 'cover' }} />
      <Flex mt={{ sm: '28px', _: '12px' }} height={'48px'} ai={'center'}>
        <Text textAlign={'center'} verticalAlign={'text-top'} fontSize={'24px'} width={'90%'} ml={'5%'} maxHeight={'48px'} overflowY={'hidden'} lineHeight={'1.0'}>{title}</Text>
      </Flex>
      <Text mt={{ sm: '14px', _: '4px' }} textAlign={'center'} fontSize={'14px'} color={'primary'}>{date}</Text>
      <Text mt={{ sm: '14px', _: '8px' }} textAlign={'center'} fontSize={'14px'} color={'disabled'} width={'90%'} ml={'5%'} height={'59px'} overflowY={'hidden'}>{content}</Text>
      <Flex mt={{ sm: '14px', _: '8px' }} jc={'end'} ai={'center'} width={'90%'} ml={'5%'}>
        <a href={link} target={'_blank'} rel="noreferrer" >
          <Text>
            Read more {'>'}
          </Text>
        </a>
      </Flex>
    </Card>
  )
}

export const NewsModule: React.FC = () => {
  const { data } = useBankseaMediumPublicationsQuery()

  return (
    <Flex flexDirection={'column'} ai={'center'} width={'100%'}>
      <ModuleTitle>News</ModuleTitle>

      <Grid
        width={'100%'}
        jc={'center'}
        gridTemplateColumns={{ xl: 'repeat(3, min(30.5%, 400px))', xs: 'min(400px, 80%)', _: '94%' }}
        gap={'32px'}
      >
        {
          data?.map(o => (<NewsCard {...o} key={o.link} />))
        }
      </Grid>
    </Flex>
  )
}
