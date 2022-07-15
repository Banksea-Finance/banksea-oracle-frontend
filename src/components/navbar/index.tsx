import React, { useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Grid, Text, useMatchBreakpoints, useModal, useTheme } from '@banksea-finance/ui-kit'
import { BankseaLogoSvg } from '@/components/svgs'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import { CgMenuGridR, CgCloseO } from 'react-icons/cg'

interface NavbarLinkProps {
  as?: 'a' | typeof Link
  text: string
  link: string
  match?: RegExp
}

const NAVBAR_ITEMS = [
  { name: 'Product', link: '/product', inner: true },
  { name: 'Free Feeds', link: '/free-feeds', match: /^\/free-feeds/, inner: true },
  { name: 'Develop', link: '/develop', inner: true },
  { name: 'Roadmap', link: '/roadmap', inner: true },
  { name: 'Docs', link: 'https://banksea-finance.gitbook.io/oracle/data-providers/running-node' },
  { name: 'Resource', link: 'https://banksea-finance.gitbook.io/oracle/consumers/program-client' },
]

const NavbarLinkText = styled(Text)`
  transition: color 0.28s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const NavbarContainer = styled(Box)`
  margin: 0 auto;
  width: 100vw;
  padding: 0 15px;
  height: 96px;
  
  & > * {
    z-index: 10;
  }
  
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: inset 0 -13px 10px -7px ${({ theme }) => theme.colors.primary};
  
  ${({ theme }) => theme.mediaQueries.maxMd} {
    height: 64px; 
  }
`

const NavbarLink: React.FC<NavbarLinkProps> = ({ link, text, match, as: As = 'a' }) => {
  const { pathname } = useLocation()
  const { theme } = useTheme()

  const mergedProps = useMemo(() => ({
    to: link,
    href: link,
    target: As === 'a' ? '_blank' : undefined,
    rel: As === 'a' ? 'noreferrer' : undefined
  }), [As])

  const isActive = useMemo(() => pathname === link || match?.test(pathname), [pathname, match, link])

  return (
    <Flex
      height={'100%'}
      ai={'center'}
      px={isActive ? '0' : '8px'}
      borderTop={isActive ? `6px solid ${theme.colors.primary}` : undefined}
      borderLeft={isActive ? '8px solid transparent' : undefined}
      borderRight={isActive ? '8px solid transparent' : undefined}
      borderBottom={isActive ? '6px solid transparent' : undefined}
    >
      <As {...mergedProps}>
        <NavbarLinkText fontSize={'20px'} bold color={isActive ? 'primary' : 'disabled'}>
          {text}
        </NavbarLinkText>
      </As>
    </Flex>
  )
}

const MobileNavLink: React.FC<NavbarLinkProps> = ({  link, text, match, as: As = 'a'  }) => {
  const { pathname } = useLocation()

  const mergedProps = useMemo(() => ({
    to: link,
    href: link,
    target: As === 'a' ? '_blank' : undefined,
    rel: As === 'a' ? 'noreferrer' : undefined
  }), [As])

  const active = useMemo(() => pathname === link || match?.test(pathname), [pathname, match, link])

  return (
    <As {...mergedProps}>
      <Text color={active ? 'primary' : 'textDisabled'} fontSize={'24px'} bold={active}>
        {text}
      </Text>
    </As>
  )
}

const MenuDrawer: React.FC = () => {
  const { closeModal } = useModal()

  return (
    <Flex height={'100vh'} width={'100vw'} jc={'flex-end'}>
      <Box background={'background'} width={'260px'} height={'100%'} p={'16px'} pt={'20%'}>
        <Flex jc={'space-between'} ai={'center'} mb={'24px'}>
          <BankseaLogoSvg width={'150px'} />
          <CgCloseO color={'#ccc'} size={24} onClick={closeModal} />
        </Flex>

        <Grid ml={'16px'} gap={'8px'}>
          {
            NAVBAR_ITEMS.map(({ name, link, inner, match }, index) => (
              <MobileNavLink link={link} text={name} as={inner ? Link : 'a'} match={match} key={index} />
            ))
          }
        </Grid>
      </Box>
    </Flex>
  )
}

const Navbar: React.FC = () => {
  const { isXl, isLg } = useMatchBreakpoints()

  const { openModal } = useModal()

  const openDrawer = useCallback(() => {
    openModal(
      <MenuDrawer />
      , true
    )
  }, [openModal])

  return (
    <NavbarContainer>
      <Flex width="min(1440px, 95vw)" ai={'center'} jc={'space-between'} height={'100%'}>
        <Box>
          <Link to={'/'}>
            <BankseaLogoSvg width={'max(150px, min(204px, 20vw))'} />
          </Link>
        </Box>
        {
          (isXl || isLg) ? (
            <Flex jc={'space-between'} width={{ xl: '620px' }} height={'100%'}>
              {
                NAVBAR_ITEMS.map(({ name, link, inner, match }, index) => (
                  <NavbarLink link={link} text={name} as={inner ? Link : 'a'} match={match} key={index} />
                ))
              }
            </Flex>
          ) : (
            <CgMenuGridR color={'#ccc'} size={'min(28px, 10vw)'} onClick={openDrawer} />
          )
        }
      </Flex>
    </NavbarContainer>
  )
}

export default Navbar
