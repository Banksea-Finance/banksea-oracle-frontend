import React from 'react'
import useTokenFeedsQuery from '@/hooks/queries/useTokenFeedsQuery'
import { CollapsibleBox } from '@/libs/uikit/components'
import oracle from '@/images/icon/tokenDetail/oracle.svg'
import { OracleBoxContent } from '@/pages/token/index.style'
import { Flex } from '@react-css/flex'
import OracleCard from '@/pages/token/oracle-card'

const OraclesMatrix: React.FC = () => {
  const { data } = useTokenFeedsQuery()

  return (
    <CollapsibleBox
      title="Oracles"
      collapsible={true}
      titleIcon={<img src={oracle} alt="detail" />}
      style={{ marginTop: '30px' }}
    >
      <OracleBoxContent>
        <Flex justifySpaceBetween flexWrap={'wrap'}>
          {
            data?.nodes.map(({ image, price, nodeName }, index) => (
              <OracleCard logo={image} price={price} name={nodeName} key={index} />
            ))
          }
        </Flex>
      </OracleBoxContent>
    </CollapsibleBox>
  )
}

export default OraclesMatrix
