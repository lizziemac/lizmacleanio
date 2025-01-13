import { ReactElement } from 'react';

import i18n, { PAGES } from 'app/utils/localize';
import { Foot } from './styles';

const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear();
  return (
    <Foot>{i18n.t(PAGES.FOOTER, { replace: { year: currentYear }})}</Foot>
  );
};

export default Footer;