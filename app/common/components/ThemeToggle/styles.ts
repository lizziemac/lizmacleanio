import styled from 'styled-components';
import { Theme } from 'app/utils/themes';

const Button = styled.button`
  background: transparent;
  display: block;
  border: none;
  padding: 0 !important;
  cursor: pointer;
  color: ${({ theme }: {theme: Theme}): string => theme.textColor};
  font-size: ${({ theme }: {theme: Theme}): string => theme.h1FontSize};

  @media only screen and (max-width:1000px){
    font-size: ${({ theme }: {theme: Theme}): string => theme.h1MediaFontSize};
  }
`;
export default Button;

// https://codepen.io/bheberer/pen/BaNZKmq