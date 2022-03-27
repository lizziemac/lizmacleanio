import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Nav = styled.nav` 
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: ${({ theme }) => theme.complementary};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all .2s ease;

  &:hover {
    color: ${({ theme }) => theme.hover};
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    color: ${({ theme }) => theme.hover};
  }

  @media only screen and (max-width:1000px){
      display: block;
      padding: 3rem;
      text-align: center;
      transition: all .2s ease;
  }
`;
