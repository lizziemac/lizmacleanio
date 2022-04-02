import { ReactElement } from 'react';
import ThemeToggle from '../../common/components/ThemeToggle';
import { Nav, NavItem } from './styles';

interface NavigationProps {
  toggleTheme: () => void;
}

const Navigation = (props: NavigationProps): ReactElement => {
  return (
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <ThemeToggle handleToggle={(): void => props.toggleTheme()} />
    </Nav>
  );
};

export default Navigation;