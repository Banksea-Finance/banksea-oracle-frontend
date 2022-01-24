import React from 'react'
import { TokenOverview } from '@/hooks/queries/useCollectionTokensQuery'
import { CollectionTokenItemContainer } from '../index.style'
import { Flex } from '@react-css/flex'
import EyeIcon from '@/images/icon/eye-green.svg'
import { Image, Skeleton, Text } from '@/libs/uikit/components'

export const SkeletalTokenCard: React.FC = () => {
  return (
    <CollectionTokenItemContainer to={''}>
      <Skeleton width={'200px'} height={'200px'} />
      <div style={{ width: '100%' }}>
        <Skeleton width={'60%'} height={'15px'} mb={'10px'} />
        <Flex justifySpaceBetween alignItemsCenter>
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
      <Image src={imageUrl} height={'200px'} width={'100%'} placeholder={<Skeleton width={'200px'} height={'100%'} />} />
      <div style={{ width: '100%' }}>
        <Text color={'primaryBright'} fontSize={'14px'} fontFamily={'orbitron'} marginBottom={'10px'}>{nftTokenName}</Text>
        <Flex justifySpaceBetween alignItemsCenter style={{ height: '23px' }}>
          <Flex alignItemsCenter>
            <Image src={priceIcon} alt="" width={'15px'} height={'15px'} />
            <Text color={'primaryBright'} marginLeft={'3px'}>{price || '-'}</Text>
          </Flex>
          {view ? (
            <div className="browse-num" style={{ height: '23px' }}>
              <Image src={EyeIcon} width={'20px'} height={'20px'} />
              <span>{view}</span>
            </div>
          ) : <></>}
        </Flex>
      </div>
    </CollectionTokenItemContainer>
  )
}

export default TokenCard
