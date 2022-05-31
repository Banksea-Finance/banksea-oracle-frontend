import React from 'react'
import { MediumPublication, useBankseaMediumPublicationsQuery } from '@/hooks/queries'
import { Card, Flex, Text } from '@banksea-finance/ui-kit'
import { ModuleTitle } from '@/components/module-title'

const NewsCard: React.FC<MediumPublication> = ({ imageUrl, link, content, date, title }) => {
  return (
    <Card
      variant={'disabled'}
      activeVariant={'primary'}
      activeOnHover
      flexDirection={'column'}
      width={'30.5%'}
      height={'fit-content'}
      color={'backgroundSecondary'}
      p={'0 0 32px 0'}
    >
      <img src={imageUrl} alt="" style={{ width: '100%', height: '50%', objectFit: 'cover' }} />
      <Flex height={'72px'} ai={'center'}>
        <Text mt={'28px'} textAlign={'center'} fontSize={'24px'} width={'90%'} ml={'5%'} maxHeight={'72px'}>{title}</Text>
      </Flex>
      <Text mt={'28px'} textAlign={'center'} fontSize={'14px'} color={'primary'}>{date}</Text>
      <Text mt={'28px'} textAlign={'center'} fontSize={'14px'} color={'disabled'} width={'90%'} ml={'5%'} height={'92px'}>{content}</Text>
      <Flex jc={'end'} ai={'center'} width={'90%'} ml={'5%'}>
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

      <Flex jc={'space-between'}>
        {
          data?.map(o => (
            <NewsCard {...o} key={o.link} />
          ))
        }
      </Flex>
    </Flex>
  )
}
