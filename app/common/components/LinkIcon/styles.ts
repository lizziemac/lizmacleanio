import styled from 'styled-components';
import { Theme } from 'app/utils/themes';

export const LinkIconSVG = styled.svg`
  fill: ${({ theme }: {theme: Theme}): string => theme.textColor};
  height: ${({ theme }: {theme: Theme}): string => theme.fontSize};
  width: ${({ theme }: {theme: Theme}): string => theme.fontSize};
  color: ${({ theme }: {theme: Theme}): string => theme.textColor};

  @media only screen and (max-width:1000px){
    height: ${({ theme }: {theme: Theme}): string => theme.mediaFontSize};
    width: ${({ theme }: {theme: Theme}): string => theme.mediaFontSize};
  }
`;