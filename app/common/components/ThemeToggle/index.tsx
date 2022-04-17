import { translate, COMMON } from 'app/utils/localize';
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
    <Button
      aria-label={translate(COMMON.COMPONENTS.THEME_TOGGLE.ALT_LABEL)}
      aria-details={translate(COMMON.COMPONENTS.THEME_TOGGLE.ALT_DETAILS)}
      onClick={(): void => handleToggle()}
    >
      {
        getTheme() === 'dark'
          ? <SunIcon />
          : <MoonIcon />
      }
    </Button>
  );
};
export default Toggle;
