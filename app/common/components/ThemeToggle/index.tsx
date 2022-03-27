import { getTheme } from '../../../utils/hooks/useTheme';

import Button from './styles';

interface ToggleProps {
  handleToggle: () => void;
};

const Toggle = ({ handleToggle }: ToggleProps) => {
  return (
    <Button onClick={() => handleToggle()} >
      {
        getTheme() === 'dark'
        ? '🌙'
        : '☀️'
      }
    </Button>
  );
};
export default Toggle;
