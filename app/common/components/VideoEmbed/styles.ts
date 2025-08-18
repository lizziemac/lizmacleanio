import styled from 'styled-components';

export const VideoEmbedContainer = styled.div`
  width: 80%;
  aspect-ratio: 16 / 9;
  padding-top: 1em;

  @media screen and (max-width:1000px) {
    padding-top: 0.25em;
    width: 100%;
    aspect-ratio: 16 / 9;
  }
`;

export const VideoEmbed = styled.iframe`
  width: 100%;
  height: 100%;
`;