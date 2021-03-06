import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Theme } from 'app/utils/themes';

export const Nav = styled.nav`
  align-items: center;
  background-color: ${({ theme }: {theme: Theme}): string => theme.primaryDarkColor};
  min-height: ${({ theme }: {theme: Theme}): string => theme.h1FontSize};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  transition: background-color 1s ease;
  z-index: 999;
  flex-wrap: wrap;

  @media only screen and (max-width:1000px){
    min-height: ${({ theme }: {theme: Theme}): string => theme.h1MediaFontSize};
  }

  div:first-child {
    margin-right: auto;
  }
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  font-weight: none;
  min-height: inherit;
  font-size: ${({ theme }: {theme: Theme}): string => theme.h1FontSize};
  color: ${({ theme }: {theme: Theme}): string => theme.textColor} !important;
  padding: 1rem 2rem;
  border-bottom: 0.10em solid transparent;

  &:hover {
    color: ${({ theme }: {theme: Theme}): string => theme.hover} !important;
  }
  &.active {
    border-bottom: 0.10em solid #0000ff;
    color: ${({ theme }: {theme: Theme}): string => theme.textColor} !important;
  }

  @media only screen and (max-width:1000px){
    font-size: ${({ theme }: {theme: Theme}): string => theme.h1MediaFontSize};
    &:hover {
      color: ${({ theme }: {theme: Theme}): string => theme.textColor} !important;
    }
  }
`;
