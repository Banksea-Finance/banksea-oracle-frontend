import React from 'react'
import useTokenFeedsQuery from '@/hooks/queries/useTokenFeedsQuery'
import oracle from '@/images/icon/tokenDetail/oracle.svg'
import { OracleBoxContent } from '@/pages/token/index.style'
import OracleCard from '@/pages/token/oracle-card'
import { Flex } from '@banksea-finance/ui-kit'

const OraclesMatrix: React.FC = () => {
  const { data } = useTokenFeedsQuery()

  return (
    <div >
      <OracleBoxContent>
        <Flex flexWrap={'wrap'}>
          {
            data?.nodes.map(({ image, price, nodeName }, index) => (
              <OracleCard logo={image} price={price} name={nodeName} key={index} />
            ))
          }
        </Flex>
      </OracleBoxContent>
    </div>
  )
}

export default OraclesMatrix
