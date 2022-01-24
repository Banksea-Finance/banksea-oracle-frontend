import React, { useEffect, useState } from 'react'
import { NavbarContainer } from './index.style'
import Logo from '../logo'
import { Flex } from '@react-css/flex'
import { Link, useNavigate } from 'react-router-dom'
import { AutoComplete, Text } from '@/libs/uikit/components'
import { useResponsive } from '@/libs/uikit'
import API from '@/api'
import { BankseaApiPageResult } from '@/api/service'
import { TokenOverview } from '@/hooks/queries/useCollectionTokensQuery'

const navbarData = [
  { name: 'Market', link: '/market', inner: true },
  { name: 'Develop', link: 'https://banksea-finance.gitbook.io/oracle/' },
  { name: 'Data Providers', link: 'https://banksea-finance.gitbook.io/oracle/data-providers/running-node' },
  { name: 'Consumer', link: 'https://banksea-finance.gitbook.io/oracle/consumers/program-client' },
  { name: 'Cooperation', link: 'https://forms.gle/LMwWudrC8vSDV7pz7' }
]

const Search: React.FC = () => {
  const { isDesktop } = useResponsive()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [records, setRecords] = useState<{ label: string, value: string }[]>()

  useEffect(() => {
    API.core.getTokens({
      search
    }).then((r: BankseaApiPageResult<TokenOverview>) => {
      setRecords(
        r.records.map(
          ({ nftTokenName, assetPublicKey }) => ({
            label: nftTokenName, value: assetPublicKey
          })
        )
      )
    })
  }, [search])

  const onSearch = (val: string) => {
    setSearch(val)
  }

  const onSelect = (value: any) => {
    navigate(`/token/${value}`)
  }

  return (
    <AutoComplete
      allowClear
      placeholder={'Search NFTs...'}
      width={isDesktop ? '250px' : '30vw'}
      options={records}
      onSearch={onSearch}
      onSelect={onSelect}
    />
  )
}


const Navbar: React.FC = () => {
  const { isDesktop } = useResponsive()

  return (
    <NavbarContainer>
      <Link to={'/'}>
        <Logo width={isDesktop ? undefined : '35vw'} />
      </Link>
      {
        isDesktop && (
          <Flex justifySpaceBetween style={{ width: '620px', fontWeight: 'bold' }}>
            {
              navbarData.map(({ name, link, inner }, index) => (
                inner ? (
                  <Link to={link} key={index}>
                    <Text fontSize={'20px'} bold>{name}</Text>
                  </Link>
                ) : (
                  <a href={link} target={'_blank'} rel="noreferrer">
                    <Text fontSize={'20px'} bold>{name}</Text>
                  </a>
                )
              ))
            }
          </Flex>
        )
      }
      <Search />
    </NavbarContainer>
  )
}

export default Navbar
