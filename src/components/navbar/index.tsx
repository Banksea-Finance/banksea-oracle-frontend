import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Text, useThemeWrapper } from '@banksea-finance/ui-kit'
import { BankseaLogoSvg } from '@/components/svgs'
import styled from 'styled-components'
import { useLocation } from 'react-router'

interface NavbarLinkProps {
  as?: 'a' | typeof Link
  text: string
  link: string
}

const NAVBAR_ITEMS = [
  { name: 'Analytics', link: '/analytics', inner: true },
  { name: 'Develop', link: '/develop', inner: true },
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
  width: 100%;
  padding: 0 15px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: inset 0 -13px 10px -7px ${({ theme }) => theme.colors.primary};
`

const NavbarLink: React.FC<NavbarLinkProps> = ({ link, text, as: As = 'a' }) => {
  const { pathname } = useLocation()
  const { themeInstance } = useThemeWrapper()

  const mergedProps = useMemo(() => ({
    to: link,
    href: link,
    target: As === 'a' ? '_blank' : undefined,
    rel: As === 'a' ? 'noreferrer' : undefined
  }), [As])

  const isActive = useMemo(() => pathname === link, [pathname])

  return (
    <Flex
      height={'100%'}
      ai={'center'}
      px={isActive ? '0' : '8px'}
      borderTop={isActive ? `6px solid ${themeInstance.colors.primary}` : undefined}
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

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Flex width={'80%'} ai={'center'} jc={'space-between'} height={'100%'}>
        <Link to={'/'}>
          <BankseaLogoSvg />
        </Link>
        <Flex jc={'space-between'} width={'620px'} height={'100%'}>
          {
            NAVBAR_ITEMS.map(({ name, link, inner }, index) => (
              <NavbarLink link={link} text={name} as={inner ? Link : 'a'} key={index} />
            ))
          }
        </Flex>
      </Flex>
    </NavbarContainer>
  )
}

export default Navbar
