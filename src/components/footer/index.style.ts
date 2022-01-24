import styled from 'styled-components'
import { Text } from '@/libs/uikit/components'

export const FooterContainer = styled.div`
  background: #30263F;
  width: 100%;
  padding: 48px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${({ theme }) => theme.mediaQueries.xl} {
    flex-direction: column;
    align-items: center;
  }
`

export const LogoAndInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${({ theme }) => theme.mediaQueries.xl} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 75px;
  }
`

export const Copyright = styled(Text)`
  background: #30263F;
  text-align: center;
  color: #808080;
  padding: 21px 0;
`

export const SocialMediaContainer = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-between;
  
  ${({ theme }) => theme.mediaQueries.xl} {
    margin-bottom: 75px;
  }
`

export const SocialMediumContainer = styled.a`
  color: #BABAC0;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;

  img {
    width: 37px;
    height: 37px;
  }
`

export const FootText = styled.div`
  font-size: 18px;
  line-height: 30px;
  color: #808080;
  margin-left: 20px;
  margin-top: 10px;
`

export const FootLinkMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  
  .link-title {
    font-size: 18px;
    color: white;
    margin-bottom: 10px;
  }
  
  .link-item {
    color: #808080;
    margin-top: 20px;
    cursor: pointer;
  }
  
  a:hover {
    color: ${({ theme }) => theme.colors.primaryBright};
  }
  
  ${({ theme }) => theme.mediaQueries.xl} {
    align-items: center;
  }
`
