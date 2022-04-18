import styled from 'styled-components';

export const BlurbContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width:1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Blurb = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-right: 10em;
  }

  @media screen and (max-width:1000px) {
    p {
      margin: 1em;
    }
  }
`;