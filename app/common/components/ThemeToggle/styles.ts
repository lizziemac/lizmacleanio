import styled from 'styled-components';
import { Theme } from 'app/utils/themes';

const Button = styled.button`
  background: ${({ theme }: {theme: Theme}): string => theme.complementary};
  border: none;
  color: ${({ theme }: {theme: Theme}): string => theme.complementary};
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }
`;
export default Button;