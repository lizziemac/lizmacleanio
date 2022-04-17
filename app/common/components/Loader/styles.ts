import styled, { keyframes } from 'styled-components';
import { Theme } from 'app/utils/themes';

const Loading = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: italic;

  background: ${({ theme }: {theme: Theme}): string => theme.primaryColor};

  @media only screen and (max-width:1000px){
  }
`;

const rippleAnimation = keyframes`
  0% {
    visibility: hidden;
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    visibility: block;
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

export const Ripple = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    border: 4px solid ${({ theme }: {theme: Theme}): string => theme.textColor};
    opacity: 1;
    border-radius: 50%;
    animation: ${rippleAnimation} 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -1s
  }
`;

export default Loading;