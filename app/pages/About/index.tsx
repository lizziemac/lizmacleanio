/*
  eslint-disable i18next/no-literal-string
 */
// TODO: re-enable after implementing react-i18next. fun fact! it's not just for Next.js!
import { ReactElement } from 'react';
import i18n, { PAGES } from 'app/utils/localize';

import poe from 'app/media/dark-poe.png';
import  { Blurb, BlurbContainer } from 'app/common/components/Blurb';
import { Trans } from 'react-i18next';

const About = (): ReactElement => {
  return (
    <div>
      <h1>{i18n.t(PAGES.ABOUT.TITLE)}</h1>
      <BlurbContainer>
        <img height={500} width={500} src={poe} alt={i18n.t(PAGES.ABOUT.HEADER_IMAGE_ALT)}/>
        <Blurb>
          <p>
            <Trans i18nKey={PAGES.ABOUT.BLURB_P1} components={[
              <span role='img' aria-label='Coffee cup emoji'>☕</span>,
              <a href='https://www.pronouncenames.com/multinames.php?name=liz%20maclean'>
                lIHz muh-KLAIN
              </a>
            ]} />
          </p>
          <p>
            I grew up in Pittsburgh, PA and came to Philadelphia to study Electrical Engineering at
            Drexel University. (Don't ask me anything about EE, all I retained
            was <code>V = IR</code>). After graduating in 2018, I worked as an embedded
            engineer for a couple of years, and then moved into full stack development in July, 2021. Throughout
            my career so far, I've learned a lot, including React, Redux, Typescript, Python, gRPC, protocol buffers, C,
            a sprinkle of Webpack, and more! As I continue to grow as a developer, I hope to show off
            some of those skills here!
          </p>
          <p>
            If you're curious about the fluffy cat in the drawing on this page, his name is Poe! I adopted him
            almost four years ago, and he's my favorite fluffy friend. His favorite things to do are nap, meow,
            snuggle, and play with homemade foil balls. He doesn't really understand what the internet is,
            but I think if he knew that's where all his treats came from, he'd think it's as cool as I think it is.
          </p>
        </Blurb>
      </BlurbContainer>
    </div>
  );
};

export default About;