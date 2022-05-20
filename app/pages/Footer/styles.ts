import styled from 'styled-components';

import { Theme } from 'app/utils/themes';

export const Foot = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  bottom: 0;
  margin-top: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  color: ${({ theme }: {theme: Theme}): string => theme.textColor} !important;
`;
