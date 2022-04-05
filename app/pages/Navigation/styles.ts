import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Theme } from 'app/utils/themes';

export const Nav = styled.nav`
  align-items: center;
  background-color: ${({ theme }: {theme: Theme}): string => theme.primaryDarkColor};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  height: 8vh;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  transition: background-color 1s ease;
  z-index: 999;

  div:first-child {
    margin-right: auto;
  }
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: ${({ theme }: {theme: Theme}): string => theme.h1FontSize};
  color: ${({ theme }: {theme: Theme}): string => theme.textColor};
  padding: 1rem 2rem;

  &:hover {
    color: ${({ theme }: {theme: Theme}): string => theme.hover};
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    color: ${({ theme }: {theme: Theme}): string => theme.textColor};
  }

  @media only screen and (max-width:1000px){
    font-size: ${({ theme }: {theme: Theme}): string => theme.h1MediaFontSize};
  }
`;
