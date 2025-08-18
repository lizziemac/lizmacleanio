import { VideoEmbedContainer, VideoEmbed } from 'app/common/components/VideoEmbed';
import i18n, { PAGES } from 'app/utils/localize';
import { ReactElement } from 'react';

const Home = (): ReactElement => {
  return (
    <div>
      <h1>
        <div style={{ height: '2em' }}/>
        {i18n.t(PAGES.HOME.TITLE)}
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1em' }}>
        <p>{i18n.t(PAGES.HOME.SUBTITLE)}<br/></p>
        {/* eslint-disable i18next/no-literal-string */}
        <VideoEmbedContainer>
          <VideoEmbed
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/LCUze7kuNas?si=dICdwOPkI11dqNit&amp;start=1"
            title="Stop motion: Parks and Recreation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </VideoEmbedContainer>
        {/* eslint-enable i18next/no-literal-string */}
      </div>
    </div>
  );
};
export default Home;