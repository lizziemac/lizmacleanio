import { ReactElement } from 'react';
import { Trans } from 'react-i18next';

import i18n, { PAGES } from 'app/utils/localize';

import poe from 'app/media/dark-poe.png';
import  { Blurb, BlurbContainer } from 'app/common/components/Blurb';


const About = (): ReactElement => {
  const isEnglish: boolean = (i18n.language.split('-')[0] === 'en');

  return (
    <div>
      <h1>
        <div style={{ height: '2em' }}/>
        {i18n.t(PAGES.ABOUT.TITLE)}
      </h1>
      <BlurbContainer>
        <img height={500} width={500} src={poe} alt={i18n.t(PAGES.ABOUT.HEADER_IMAGE_ALT)}/>
        <Blurb>
          { !isEnglish
            && <p>{ i18n.t(PAGES.ABOUT.BLURB_ENGLISH_DISCLAIMER) }</p>
          }
          <p>
            <Trans
              i18nKey={PAGES.ABOUT.BLURB_P1}
              components={[
                <span role='img' aria-label='Coffee cup emoji'>☕</span>,
                <a href='https://www.pronouncenames.com/multinames.php?name=liz%20maclean'> lIHz muh-KLAIN </a>
              ]}
            />
          </p>
          <p>
            <Trans
              i18nKey={PAGES.ABOUT.BLURB_P2}
              components={[<code>V = IR</code>]}
            />
          </p>
          <p>
            { i18n.t(PAGES.ABOUT.BLURB_P3) }
          </p>
        </Blurb>
      </BlurbContainer>
    </div>
  );
};

export default About;