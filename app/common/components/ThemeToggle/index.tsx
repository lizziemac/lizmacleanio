import { ReactElement } from 'react';
import { getTheme } from '../../../utils/hooks/useTheme';

import Button from './styles';

interface ToggleProps {
  handleToggle: () => void;
}

const Toggle = ({ handleToggle }: ToggleProps): ReactElement => {
  return (
    <Button onClick={(): void => handleToggle()} >
      {
        getTheme() === 'dark'
          ? '🌙'
          : '☀️'
      }
    </Button>
  );
};
export default Toggle;
