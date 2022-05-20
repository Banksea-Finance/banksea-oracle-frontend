import React from 'react'
import { TokenOverview } from '@/hooks/queries/useCollectionTokensQuery'
import { CollectionTokenItemContainer } from '../index.style'
import EyeIcon from '@/images/icon/eye-green.svg'
import { Skeleton, Text, Flex } from '@banksea-finance/ui-kit'
export const SkeletalTokenCard: React.FC = () => {
  return (
    <CollectionTokenItemContainer to={''}>
      <Skeleton width={'200px'} height={'200px'} />
      <div style={{ width: '100%' }}>
        <Skeleton width={'60%'} height={'15px'} mb={'10px'} />
        <Flex jc={'space-between'} ai={'center'}>
          <Skeleton width={'40%'} height={'15px'} />
          <Skeleton width={'20%'} height={'15px'} />
        </Flex>
      </div>
    </CollectionTokenItemContainer>)
}

const TokenCard: React.FC<TokenOverview & { priceIcon: any }> = ({
  price,
  nftTokenName,
  imageUrl,
  priceIcon,
  assetPublicKey,
  view
}) => {
  return (
    <CollectionTokenItemContainer to={`/token/${assetPublicKey}`}>
      <img src={imageUrl} />
      <div style={{ width: '100%' }}>
        <Text color={'primaryBright'} fontSize={'14px'} fontFamily={'orbitron'} marginBottom={'10px'}>{nftTokenName}</Text>
        <Flex style={{ height: '23px' }}>
          <Flex >
            <img src={priceIcon} alt="" />
            <Text color={'primaryBright'} marginLeft={'3px'}>{price || '-'}</Text>
          </Flex>
          {view ? (
            <div className="browse-num" style={{ height: '23px' }}>
              <img src={EyeIcon} />
              <span>{view}</span>
            </div>
          ) : <></>}
        </Flex>
      </div>
    </CollectionTokenItemContainer>
  )
}

export default TokenCard
