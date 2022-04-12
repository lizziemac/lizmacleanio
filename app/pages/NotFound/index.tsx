import { ReactElement } from 'react';
import { translate, PAGES } from 'app/utils/localize';

const NotFound = (): ReactElement => {
  return (
    <div>
      <h1>{translate(PAGES.NOT_FOUND.TITLE)}</h1>
    </div>
  );
};

export default NotFound;