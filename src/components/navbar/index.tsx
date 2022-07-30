import React, { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Grid, Text, TextProps, useMatchBreakpoints, useModal, useTheme } from '@banksea-finance/ui-kit'
import { BankseaLogoSvg } from '@/components/svgs'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import { CgCloseO, CgMenuGridR } from 'react-icons/cg'
import { Collapse } from 'react-collapse'
import Dropdown from 'rc-dropdown'
import 'rc-dropdown/assets/index.css'

type BaseNavbarItemProps = {
  name: string
  inner?: boolean
  match?: RegExp
}

type LeafNodeNavbarItemProps = BaseNavbarItemProps
  & { path: string }
  & Pick<TextProps, 'fontSize' | 'bold' | 'color' | 'lineHeight'>

type NavbarItemProps =
  | LeafNodeNavbarItemProps
  | (BaseNavbarItemProps & { children: LeafNodeNavbarItemProps[] })

declare const window: any
declare const navigator: any

function isTouchDevice() {
  return (
    !!(typeof window !== 'undefined' &&
      ('ontouchstart' in window ||
        (window.DocumentTouch &&
          typeof document !== 'undefined' &&
          document instanceof window.DocumentTouch))) ||
    !!(typeof navigator !== 'undefined' &&
      (navigator.maxTouchPoints || navigator.msMaxTouchPoints))
  )
}

const NAVBAR_ITEMS: NavbarItemProps[] = [
  {
    name: 'Products',
    match: /(^\/api)|(^\/oracle)/,
    children: [
      {
        name: 'Oracle',
        path: '/oracle',
        match: /^\/oracle/,
        inner: true
      },
      {
        name: 'API',
        path: '/api',
        inner: true
      }
    ]
  },
  { name: 'Roadmap', path: '/roadmap', inner: true },
  {
    name: 'Docs',
    children: [
      {
        name: 'White Paper',
        path: 'https://banksea-finance.gitbook.io/banksea-finance/',
      },
      {
        name: 'Oracle Docs',
        path: 'https://banksea-finance.gitbook.io/oracle/',
      },
      {
        name: 'API Docs',
        path: 'https://banksea-finance.gitbook.io/banksea-oracle-api/',
      },
    ]
  },
  {
    name: 'Resource',
    children: [
      {
        name: 'CitizenOne',
        path: 'https://nft.banksea.finance/',
      },
      {
        name: 'Staking',
        path: 'https://app.banksea.finance/staking',
      },
    ]
  },
]

const NavbarLinkText = styled(Text)`
  transition: color 0.28s;

  ${({ theme }) => theme.mediaQueries.minLg} {
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
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
  box-shadow: inset 0 -13px 10px -7px ${({ theme }) => `${theme.colors.primary}99`};

  ${({ theme }) => theme.mediaQueries.maxMd} {
    height: 64px;
  }
`

const StyledMenuDrawer = styled(Flex)`
  .ReactCollapse--collapse {
    transition: height 0.38s;
  }
`

const NavbarItemLink: React.FC<LeafNodeNavbarItemProps> = props => {
  const { pathname } = useLocation()
  const { name, match, inner, path } = props
  const { isXl, isLg } = useMatchBreakpoints()

  const Component = inner ? Link : 'a'

  const mergedProps = useMemo(() => ({
    to: path || '',
    href: path,
    target: !inner ? '_blank' : undefined,
    rel: !inner ? 'noreferrer' : undefined
  }), [inner])

  const isActive = useMemo(() => (pathname === path) || match?.test(pathname), [pathname, match, props])

  return (
    <Component {...mergedProps}>
      <NavbarLinkText
        fontSize={props.fontSize || '20px'}
        bold={props.bold || isXl || isLg}
        color={isActive ? 'primary' : (props.color || 'text')}
        lineHeight={props.lineHeight}
      >
        {name}
      </NavbarLinkText>
    </Component>
  )
}

const RootNavbarItem: React.FC<NavbarItemProps> = props => {
  const { pathname } = useLocation()
  const { theme } = useTheme()

  const { name, match } = props

  const path = 'path' in props ? props.path : undefined

  const isActive = useMemo(() => (pathname === path) || match?.test(pathname), [pathname, match, props])

  const Wrapper: React.FC = useCallback(({ children }) => {
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
        {children}
      </Flex>
    )
  }, [isActive])

  if ('path' in props) {
    return (
      <Wrapper>
        <NavbarItemLink {...props} />
      </Wrapper>
    )
  }

  const overlay = (
    <Grid
      mt={'8px'}
      minWidth={'200px'}
      borderRadius={'10px'}
      background={'card'}
      p={'16px'}
      gridTemplateColumns={'100%'}
      gap={'16px 0'}
    >
      {
        props.children.map(item => (<NavbarItemLink {...item} key={item.name} />))
      }
    </Grid>
  )

  return (
    <Wrapper>
      <Dropdown overlay={overlay} animation="slide-up" mouseEnterDelay={0} trigger={isTouchDevice() ? 'click' : 'hover'}>
        <NavbarLinkText fontSize={'20px'} bold color={isActive ? 'primary' : 'text'} style={{ cursor: 'pointer' }}>
          {name}
        </NavbarLinkText>
      </Dropdown>
    </Wrapper>
  )
}

const MobileRootNavbarItem: React.FC<NavbarItemProps> = props => {
  const { pathname } = useLocation()
  const { theme } = useTheme()

  const {  match, name } = props

  const path = 'path' in props ? props.path : undefined

  const isActive = useMemo(() => (pathname === path) || match?.test(pathname), [pathname, match, props])

  const Wrapper: React.FC = useCallback(({ children }) => {
    return (
      <Flex
        flexDirection={'column'}
        height={'fit-content'}
        pl={`calc(12px + ${(isActive ? '0px' : '4px')})`}
        borderLeft={isActive ? `4px solid ${theme.colors.primary}` : undefined}
        borderTop={'6px solid transparent'}
        borderRight={'6px solid transparent'}
        borderBottom={'6px solid transparent'}
      >
        {children}
      </Flex>
    )
  }, [isActive])

  if ('path' in props) {
    return (
      <Wrapper>
        <NavbarItemLink {...props} fontSize={'24px'} lineHeight={1} />
      </Wrapper>
    )
  }

  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Wrapper>
        <NavbarLinkText
          fontSize={'24px'}
          color={isActive ? 'primary' : 'text'}
          style={{ cursor: 'pointer' }}
          onClick={() => setOpen(prev => !prev)}
        >
          {name}
        </NavbarLinkText>
      </Wrapper>

      <Box ml={'32px'}>
        <Collapse isOpened={open}>
          {
            props.children.map(item => (<NavbarItemLink fontSize={'18px'} color={'textDisabled'} {...item} key={item.name} />))
          }
        </Collapse>
      </Box>
    </Box>
  )
}

const MenuDrawer: React.FC = () => {
  const { closeModal } = useModal()

  return (
    <StyledMenuDrawer height={'100vh'} width={'100vw'} jc={'flex-end'}>
      <Box background={'background'} width={'260px'} height={'100%'} p={'16px'} pt={'20%'}>
        <Flex jc={'space-between'} ai={'center'} mb={'24px'}>
          <BankseaLogoSvg width={'150px'} />
          <CgCloseO color={'#ccc'} size={24} onClick={closeModal} />
        </Flex>

        <Grid gap={'16px'} gridTemplateColumns={'100%'}>
          {
            NAVBAR_ITEMS.map(item => <MobileRootNavbarItem {...item} key={item.name} />)
          }
        </Grid>
      </Box>
    </StyledMenuDrawer>
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
                NAVBAR_ITEMS.map((item, index) => (<RootNavbarItem {...item} key={index} />))
              }
            </Flex>
          ) : (
            <CgMenuGridR color={'#ccc'} size={'28px'} onClick={openDrawer} />
          )
        }
      </Flex>
    </NavbarContainer>
  )
}

export default Navbar
