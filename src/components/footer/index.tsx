import React from 'react'
import { Box, Flex, Grid, Text } from '@banksea-finance/ui-kit'
import { BankseaLogoSvg } from '@/components/svgs'
import styled from 'styled-components'

export type SocialMedium = {
  icon: string
  to: string
}

const SOCIAL_MEDIA: SocialMedium[] = [
  { to: 'https://twitter.com/banksea_finance', icon: require('@/images/social-media-logos/twitter.png') },
  { to: 'https://t.me/banksea_finance', icon: require('@/images/social-media-logos/telegram.png') },
  { to: 'https://discord.com/invite/NdRGt4BDFe', icon: require('@/images/social-media-logos/discord.png') },
  { to: 'mailto://contact@banksea.finance', icon: require('@/images/social-media-logos/email.png') },
]

const SocialMediumContainer = styled.a`
  color: #BABAC0;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;

  img {
    width: 37px;
    height: 37px;
  }
`

const Footer: React.FC = () => {
  return (
    <div>
      <Box background={'backgroundSecondary'} p={'48px 10%'}>
        <Flex jc={'space-between'}>
          <Flex ai={'start'} flexDirection={'column'}>
            <BankseaLogoSvg />
            <Text color={'disabled'} my={'16px'}>
              Securely and Fast, Financialize your NFT.
            </Text>
            <Grid gap={'4px'} gridTemplateColumns={'repeat(4, 1fr)'} width={'100%'}>
              {
                SOCIAL_MEDIA.map(({ icon, to }, index) => (
                  <SocialMediumContainer href={to} key={index}>
                    <img src={icon} alt={to} />
                  </SocialMediumContainer>
                ))
              }
            </Grid>
          </Flex>
          {/*<Flex>*/}
          {/*  <Box>*/}
          {/*    <Text>Banksea</Text>*/}
          {/*    <Text>Home</Text>*/}
          {/*    <Text>Roadmap</Text>*/}
          {/*    <Text>Home</Text>*/}
          {/*    <Text>Home</Text>*/}
          {/*  </Box>*/}
          {/*</Flex>*/}
        </Flex>
        <Box my={'32px'} height={'1px'} width={'100%'} background={'primary'} />
        <Text color={'disabled'} textAlign={'center'}>
          @ 2022 Banksea - All rights reserved
        </Text>
      </Box>
    </div>
  )
}

export default Footer
