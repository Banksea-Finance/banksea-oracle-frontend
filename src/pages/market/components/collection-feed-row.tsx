import React, { useMemo } from 'react'
import solanaIcon from '@/images/icon/solana.png'
import etnIcon from '@/images/icon/eth.png'
import { Flex } from '@react-css/flex'
import { CollectionFeed } from '@/hooks/queries/useCollectionFeedsQuery'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CollectionFeedRowContainer = styled(Link)`
  width: 555px;
  padding: 11px 0 11px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #19F096;
  border-left: 10px solid #19F096;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  position: relative;
  cursor: pointer;
  
  transition: all 0.25s;
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
    color: #8200FF;
    font-weight: bolder;
  }
  
  .type {
    width: 120px;
    font-weight: 700;
  }
  
  ${({ theme }) => theme.mediaQueries.xl} {
    width: 100%;
  }
`


const CollectionFeedRow: React.FC<CollectionFeed> = ({ chainSource, nftName, image, slug, announceNumber }) => {
  const icon = useMemo(() => chainSource === 'Solana' ? solanaIcon : etnIcon, [chainSource])

  return (
    <CollectionFeedRowContainer to={`/collection/${slug}`}>
      <Flex alignItemsCenter>
        <img className="avatar" src={image} />
        <Flex column>
          <span className="nft-name">{nftName}</span>
          <span className="num">{announceNumber}</span>
        </Flex>
      </Flex>
      <div className="type">
        <img style={{ width: '20px',marginRight: '10px' }} src={icon} />
        <span>{chainSource}</span>
      </div>
    </CollectionFeedRowContainer>
  )
}

export default CollectionFeedRow
