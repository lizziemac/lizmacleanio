import { ReactElement } from 'react';

import { translate, PAGES } from 'app/utils/localize';

import ThemeToggle from 'app/common/components/ThemeToggle';
import { Nav, NavItem } from './styles';

interface NavigationProps {
  toggleTheme: () => void;
}

const Navigation = (props: NavigationProps): ReactElement => {
  return (
    <Nav>
      <NavItem as='div'><ThemeToggle handleToggle={(): void => props.toggleTheme()} /></NavItem>
      <NavItem to="/">{translate(PAGES.HOME.NAV_LINK)}</NavItem>
      <NavItem to="/about">{translate(PAGES.ABOUT.NAV_LINK)}</NavItem>
    </Nav>
  );
};

export default Navigation;