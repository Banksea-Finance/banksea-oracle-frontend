import React, { CSSProperties, useMemo } from 'react'
import useCollectionFeedsQuery, {
  CollectionFeed,
  CollectionFeedFilterType
} from '@/hooks/queries/useCollectionFeedsQuery'
import { Link } from 'react-router-dom'
import arrowRight from '@/images/icon/arrowRight.svg'
import { Box, Flex, Text } from '@banksea-finance/ui-kit'
import styled from 'styled-components'
import solanaIcon from '@/images/icon/solana.png'
import etnIcon from '@/images/icon/eth.png'

const Title = styled(Text)<{ $color: string }>`
  width: fit-content;
  font-size: min(30px, 5vw);
  margin-bottom: 20px;
  letter-spacing: 1px;
  padding: 10px 25px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  background: linear-gradient(90deg, #7864E6 0%, ${props => props.$color} 100%);
  font-weight: 600;
`

const CollectionFeedRowContainer = styled.div<{ $color: string }>`
  width: min(555px, 42vw);
  padding: 11px 48px 11px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid ${props => props.$color};
  border-left: 10px solid ${props => props.$color};
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  position: relative;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  transition: all 0.25s;
  
  ${({ theme }) => theme.mediaQueries.maxLg} {
    width: 100%;
  }
  
  ${({ theme }) => theme.mediaQueries.maxSm} {
    padding: 8px 16px 8px 8px;
  }

  &:hover {
    transform: scale(101%);
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin-right: 10px;
  }

  .nft-name {
    color: #333333;
  }

  .num {
    color: ${props => props.$color};
    font-weight: bolder;
  }

  .type {
    width: 120px;
    font-weight: 700;
  }
`

const CollectionFeedRow: React.FC<CollectionFeed> = ({ chainSource, nftName, image, announceNumber, color = 'white' }) => {
  const icon = useMemo(() => chainSource === 'Solana' ? solanaIcon : etnIcon, [chainSource])

  return (
    <CollectionFeedRowContainer $color={color}>
      <Flex ai={'center'}>
        <img className="avatar" src={image} />
        <Box>
          <Text minWidth={'170px'}>{nftName}</Text>
          <Text color={color}>{announceNumber}</Text>
        </Box>
      </Flex>
      <Flex ai={'center'} width={'93px'}>
        <img style={{ width: '20px', marginRight: '10px' }} src={icon} />
        <Text>{chainSource}</Text>
      </Flex>
    </CollectionFeedRowContainer>
  )
}

export const CollectionsFeedsModule: React.FC<{ type: CollectionFeedFilterType, title: string, color: CSSProperties['color'] }> = ({ type, title, color = 'white' }) => {
  const { data } = useCollectionFeedsQuery({ current: 1, size: 5 }, type)

  return (
    <Flex flexDirection={'column'} ai={{ _: 'start' }}>
      <Title $color={color}>{title}</Title>
      {
        data?.records.map(row => (<CollectionFeedRow {...row} color={color} key={row.nftName} />))
      }
      <Link to={'/collection'} style={{ color: '#333', fontSize: '14px' }}>
        <Flex>
          <Text mr={'10px'}>View more</Text>
          <img src={arrowRight} />
        </Flex>
      </Link>
    </Flex>
  )
}
