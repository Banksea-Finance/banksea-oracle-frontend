import React from 'react'
import {
  Copyright,
  FooterContainer,
  FootLinkMain,
  FootText,
  LogoAndInfoContainer,
  SocialMediaContainer,
  SocialMediumContainer
} from '@/components/footer/index.style'
import Logo from '@/components/logo'
import { Flex, useResponsive, Text } from '@banksea-finance/ui-kit'

export type SocialMedium = {
  icon: string
  to: string
}

const SOCIAL_MEDIA: SocialMedium[] = [
  { to: 'https://twitter.com/banksea_finance', icon: require('@/images/social-media-logos/twitter.png').default },
  { to: 'https://t.me/banksea_finance', icon: require('@/images/social-media-logos/telegram.png').default },
  { to: 'https://discord.com/invite/NdRGt4BDFe', icon: require('@/images/social-media-logos/discord.png').default },
  { to: 'mailto://contact@banksea.finance', icon: require('@/images/social-media-logos/email.png').default },
]

const Footer: React.FC = () => {
  const { isDesktop } = useResponsive()

  return (
    <div>
      <FooterContainer>
        <LogoAndInfoContainer>
          <Logo width={'222px'} />
          <FootText>
            Securely and Fast,<br />
            Financialize your NFT.
          </FootText>
        </LogoAndInfoContainer>
        <Flex flexDirection={'column'} ai={'center'}>
          <Text mb={'17px'} color={'white'} textAlign={isDesktop ? 'start' : 'center'}>
            Community / Contact
          </Text>
          <SocialMediaContainer>
            {
              SOCIAL_MEDIA.map(({ icon, to }, index) => (
                <SocialMediumContainer href={to} key={index}>
                  <img src={icon} alt={to} />
                </SocialMediumContainer>
              ))
            }
          </SocialMediaContainer>
        </Flex>
        <FootLinkMain>
          <div className="link-title">Developers</div>
          <a className="link-item" target={'_blank'} href={'https://banksea-finance.gitbook.io/oracle/'} rel="noreferrer">
            What is Banksea Oracle
          </a>
        </FootLinkMain>
      </FooterContainer>
      <Copyright>
        @ 2022 Banksea - All rights reserved
      </Copyright>
    </div>
  )
}

export default Footer
