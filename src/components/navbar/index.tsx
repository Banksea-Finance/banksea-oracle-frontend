import React from 'react'
import { NavbarContainer } from './index.style'
import Logo from '../logo'
import { Link } from 'react-router-dom'
import { Flex, useResponsive, Text } from '@banksea-finance/ui-kit'

const navbarData = [
  { name: 'Market', link: '/market', inner: true },
  { name: 'Develop', link: 'https://banksea-finance.gitbook.io/oracle/' },
  { name: 'Data Providers', link: 'https://banksea-finance.gitbook.io/oracle/data-providers/running-node' },
  { name: 'Consumer', link: 'https://banksea-finance.gitbook.io/oracle/consumers/program-client' },
  { name: 'Cooperation', link: 'https://forms.gle/LMwWudrC8vSDV7pz7' }
]

const Navbar: React.FC = () => {
  const { isDesktop } = useResponsive()

  return (
    <NavbarContainer>
      <Link to={'/'}>
        <Logo width={isDesktop ? undefined : '35vw'} />
      </Link>
      {
        isDesktop && (
          <Flex jc={'space-between'} style={{ width: '620px', fontWeight: 'bold' }}>
            {
              navbarData.map(({ name, link, inner }, index) => (
                inner ? (
                  <Link to={link} key={index}>
                    <Text fontSize={'20px'} bold>{name}</Text>
                  </Link>
                ) : (
                  <a href={link} target={'_blank'} rel="noreferrer" key={index}>
                    <Text fontSize={'20px'} bold>{name}</Text>
                  </a>
                )
              ))
            }
          </Flex>
        )
      }
      {/*<Search />*/}
    </NavbarContainer>
  )
}

export default Navbar
