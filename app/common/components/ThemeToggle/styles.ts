import styled from 'styled-components';
import { Theme } from 'app/utils/themes';

const Button = styled.button`
  margin: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }: {theme: Theme}): string => theme.textColor};
  font-size: ${({ theme }: {theme: Theme}): string => theme.h1FontSize};
`;
export default Button;

// https://codepen.io/bheberer/pen/BaNZKmq