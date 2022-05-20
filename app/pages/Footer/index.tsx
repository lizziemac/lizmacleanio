import { ReactElement } from 'react';

import i18n, { PAGES } from 'app/utils/localize';
import { Foot } from './styles';

const Footer = (): ReactElement => {
  return (
    <Foot>{i18n.t(PAGES.FOOTER)}</Foot>
  );
};

export default Footer;