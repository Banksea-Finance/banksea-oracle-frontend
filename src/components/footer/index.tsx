import React from 'react'
import { Box, Button, Flex, Grid, Input, Text } from '@banksea-finance/ui-kit'
import { BankseaLogoSvg } from '@/components/svgs'
import styled from 'styled-components'
import { AiOutlineSend } from 'react-icons/ai'

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
    'Home': 'https://banksea.finance/',
    'Roadmap': 'https://banksea.finance/roadmap',
    'Doc': 'https://banksea-finance.gitbook.io/banksea-finance/',
    'Medium': 'https://medium.com/@BankseaFinance',
  },
  'Information': {
    'FAQ': '',
    'Blog': '',
    'Videos': ''
  },
  'Other': {
    'Banksea Token': '',
    'Disclaimer': '',
    'Brand Guidelines': '',
  }
}

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
    background: url(${require('@/assets/images/footer-bg.png')}) no-repeat;
    background-size: 100%;
  }
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Box background={'transparent'} p={'48px 10%'}>
        <Flex
          jc={{ xl: 'space-between' }}
          ai={{ _: 'flex-start' }}
          flexDirection={{ _: 'column', xl: 'row' }}
        >
          <Flex ai={'start'} flexDirection={'column'} width={'262px'} mb={{ xl: '0', _: '32px' }}>
            <BankseaLogoSvg />
            <Text color={'disabled'} my={'16px'}>
              Securely and Fast, Financialize your NFT.
            </Text>
            <Flex jc={'space-between'} width={'100%'}>
              {
                SOCIAL_MEDIA.map(({ icon, to }, index) => (
                  <SocialMediumContainer href={to} target={'_blank'} rel={'noreferrer'} key={index}>
                    <img src={icon} alt={to} />
                  </SocialMediumContainer>
                ))
              }
            </Flex>
          </Flex>

          <Box width={'min(256px, 5vw)'} />

          <Grid
            gridTemplateColumns={{ md: 'repeat(3, 108px) 220px', sm: '108px 220px', _: '220px' }}
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
                          <Text color={'disabled'} style={{ whiteSpace: 'nowrap' }}>{item}</Text>
                        </a>
                      ))
                    }
                  </Grid>
                </Box>
              ))
            }

            <Box width={'220px'}>
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
            </Box>

          </Grid>
        </Flex>

        <Box my={'32px'}
          height={'2px'}
          width={'100%'}
          background={'linear-gradient(to right, #7864e600, #7864e6, #7864e600)'}
        />

        <Text color={'disabled'} textAlign={'center'}>
          @ 2022 Banksea - All rights reserved
        </Text>
      </Box>
    </StyledFooter>
  )
}

export default Footer
