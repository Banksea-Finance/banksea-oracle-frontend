import React from 'react'
import { Box, Flex, Grid, Image, Text } from '@banksea-finance/ui-kit'
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

const CATEGORIES = {
  'Banksea': {
    'Home': '/',
    'Roadmap': '/roadmap',
    'Oracle': '/oracle',
    'API': '/api',
  },
  'Docs': {
    'White Paper': 'https://banksea-finance.gitbook.io/banksea-finance/',
    'Oracle': 'https://banksea-finance.gitbook.io/oracle/',
    'API': 'https://banksea-finance.gitbook.io/banksea-oracle-api/',
  },
  'Resource': {
    'CitizenOne': 'https://nft.banksea.finance/',
    'Staking': 'https://app.banksea.finance/staking',
  },
  'Information': {
    'Video': 'https://www.youtube.com/channel/UC-XfgMJ9E0SjPHr9dxURdmg',
    'Medium': 'https://medium.com/@BankseaFinance'
  }
}

const SocialMediumContainer = styled.a`
  color: #BABAC0;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  width: 32px;
`

const CategoryTitle = styled(Text)`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;

  ${({ theme }) => theme.mediaQueries.maxMd} {
    margin-bottom: 8px;
  }
`

const StyledFooter = styled.div`
  background-size: 100%;
  position: relative;
  height: fit-content;
  z-index: 1;
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    
    width: 100vw;
    height: 62.5vw;
    z-index: -1;
    background: url(${require('@/assets/images/footer-bg.webp')}) no-repeat;
    background-size: 100%;
  }
`

const FooterText = styled(Text)`
  transition: color 0.28s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Box background={'transparent'} p={'48px 10%'}>
        <Flex jc={{ xl: 'space-between' }} ai={{ _: 'flex-start' }} flexDirection={{ _: 'column', xl: 'row' }}>
          <Flex ai={'start'} flexDirection={'column'} width={'282px'} mb={{ xl: '0', _: '32px' }}>
            <BankseaLogoSvg />
            <Text color={'disabled'} my={{ lg: '16px', _: '8px' }}>
              Safe, objective, and real-time NFT valuation
            </Text>
            <Grid jc={'flex-start'} width={'100%'} gap={'12px'} gridTemplateColumns={'repeat(4, 32px)'}>
              {
                SOCIAL_MEDIA.map(({ icon, to }, index) => (
                  <SocialMediumContainer href={to} target={'_blank'} rel={'noreferrer'} key={index}>
                    <Image width={'32px'} height={'32px'} src={icon} alt={to} />
                  </SocialMediumContainer>
                ))
              }
            </Grid>
          </Flex>

          <Box width={'min(256px, 5vw)'} />

          <Grid
            gridTemplateColumns={{ sm: 'repeat(4, 1fr)', xs: 'repeat(2, 1fr)', _: '220px' }}
            jc={{ md: 'space-between', sm: 'start' }}
            gap={{ md: '0', _: '16px 48px' }}
            flex={1}
            maxWidth={'1100px'}
            width={'100%'}
            justifyItems={{ md: '' }}
          >
            {
              Object.entries(CATEGORIES).map(([category, items]) => (
                <Box key={category}>
                  <CategoryTitle>{category}</CategoryTitle>
                  <Grid gap={'8px'}>
                    {
                      Object.entries(items).map(([item, link]) => (
                        <a href={link} key={item}>
                          <FooterText color={'disabled'} style={{ whiteSpace: 'nowrap' }}>{item}</FooterText>
                        </a>
                      ))
                    }
                  </Grid>
                </Box>
              ))
            }

            {/*<Box width={'220px'}>
              <CategoryTitle>Subscribe Us</CategoryTitle>
              <Input
                scale={'S'}
                placeholder={'your-email@example.com'}
                suffixGap={'0'}
                endAdornment={
                  <Button
                    width={'32px'}
                    scale={'S'}
                    ml={'8px'}
                    p={'12px'}
                    style={{ background: 'linear-gradient(180deg, rgb(120, 100, 230) 0%, rgb(210, 90, 230) 55%)' }}
                  >
                    <AiOutlineSend size={18} />
                  </Button>
                }
              />
            </Box>*/}

          </Grid>
        </Flex>

        <Box my={'32px'} height={'2px'} width={'100%'} background={'linear-gradient(to right, #7864e600, #7864e6, #7864e600)'} />

        <Text color={'disabled'} textAlign={'center'}>
          @ 2022 Banksea - All rights reserved
        </Text>
      </Box>
    </StyledFooter>
  )
}

export default Footer
