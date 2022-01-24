import React from 'react'
import {
  Description,
  DevelopButton,
  MainTitle,
  NewsContainer,
  SeeButton,
  TopButton,
  TopMain,
  TopModuleContainer
} from '@/pages/home/top/index.style'
import toIcon from '../../../images/icon/toIcon.svg'
import arrow from '../../../images/icon/arrow.svg'
import interfaceIcon from '../../../images/icon/interfaceIcon.svg'

const News: React.FC = () => {
  return (
    <NewsContainer>
      <div className="information-degree">NEW</div>
      <div className="information-data">Banksea NFT Oracle is officially live on Solana Devnet</div>
    </NewsContainer>
  )
}

const TopModule: React.FC = () => {
  return (
    <TopModuleContainer>
      <News />
      <TopMain>
        <MainTitle>
          The <b>First</b> AI-driven <br />
          NFT <b>Oracle</b>
        </MainTitle>
        <Description>
          Objective, safe and real-time NFT valuation
        </Description>

        <TopButton>
          <DevelopButton href={'https://banksea-finance.gitbook.io/oracle/'} target={'_blank'} rel="noreferrer">
            <img src={interfaceIcon} />
            <span>Develop with Banksea</span>
          </DevelopButton>
          <SeeButton to={'/market'}>
            <img src={toIcon} />
            <span>View the data</span>
            <img src={arrow} />
          </SeeButton>
        </TopButton>
      </TopMain>
    </TopModuleContainer>
  )
}

export default TopModule
