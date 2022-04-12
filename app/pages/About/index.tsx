import { ReactElement } from 'react';
import { translate, PAGES } from 'app/utils/localize';

const About = (): ReactElement => {
  return (
    <div>
      <h1>{translate(PAGES.ABOUT.TITLE)}</h1>
    </div>
  );
};

export default About;