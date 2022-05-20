import styled, { css } from 'styled-components'

const FadeEffect = css`
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
`

export const NotificationStyleMixin = css`
  .rc-notification {
    z-index: 19;
    width: fit-content;
    height: fit-content;
    position: fixed;
    bottom: 16px;
    left: 16px;
    min-width: 300px;

    ${({ theme }) => theme.mediaQueries.xl} {
      display: flex;
      justify-content: center;
      width: 100%;
      left: initial;
      top: initial;
      bottom: 0;
    }
    
    & > div {
      display: flex;
      flex-direction: column-reverse;
      padding-bottom: 8px;
    }

    &-notice {
      border-radius: 16px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      border: 0 solid rgba(0, 0, 0, 0);
      display: block;
      width: auto;
      line-height: 1.5;
      position: relative;
      margin: 8px 0 0 0 ;
      
      ${({ theme }) => theme.mediaQueries.xl} {
        margin: 4px 0 0 0;
      }

      &-closable {
        padding-right: 20px;
      }

      &-close {
        position: absolute;
        right: 16px;
        top: 16px;
        color: white;
        cursor: pointer;
        outline: none;
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        text-shadow: 0 1px 0 #fff;
        opacity: 0.6;
        text-decoration: none;

        &-x:after {
          content: '×';
          
          ${({ theme }) => theme.mediaQueries.xl} {
            font-size: 24px;
          }
        }

        &:hover {
          opacity: 1;
          text-decoration: none;
        }
      }
    }

    &-fade-appear,
    &-fade-enter {
      opacity: 0;
      animation-play-state: paused;
      ${FadeEffect}
    }

    &-fade-leave {
      ${FadeEffect};
      animation-play-state: paused;
    }

    &-fade-appear&-fade-appear-active,
    &-fade-enter&-fade-enter-active {
      animation-name: rcNotificationFadeIn;
      animation-play-state: running;
    }

    &-fade-leave&-fade-leave-active {
      animation-name: rcDialogFadeOut;
      animation-play-state: running;
    }

    @keyframes rcNotificationFadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes rcDialogFadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`
