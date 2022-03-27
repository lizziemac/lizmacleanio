import ThemeToggle from '../../common/components/ThemeToggle';
import { Nav, NavItem } from './styles';

interface NavigationProps {
  toggleTheme: () => void;
}

const Navigation = (props: NavigationProps) => {
  return (
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <ThemeToggle handleToggle={() => props.toggleTheme()} />
    </Nav>
  )
}

export default Navigation;