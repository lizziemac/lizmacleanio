import { ReactElement } from 'react';
import { getTheme } from 'app/utils/hooks/useTheme';

import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

import Button from './styles';

interface ToggleProps {
  handleToggle: () => void;
}


const Toggle = ({ handleToggle }: ToggleProps): ReactElement => {
  return (
    <Button onClick={(): void => handleToggle()} >
      {
        getTheme() === 'dark'
          ? <SunIcon />
          : <MoonIcon />
      }
    </Button>
  );
};
export default Toggle;
