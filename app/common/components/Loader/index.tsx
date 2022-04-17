import { translate, COMMON } from 'app/utils/localize';
import { ReactElement } from 'react';
import Loading, { Ripple } from './styles';

const Loader = (): ReactElement => {
  return (
    <Loading>
      <Ripple>
        <div></div>
        <div></div>
        <div></div>
      </Ripple>
      {translate(COMMON.COMPONENTS.LOADER.MESSAGE)}
    </Loading>
  );
};

export default Loader;