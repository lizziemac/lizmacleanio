import { translate, PAGES } from 'app/utils/localize';
import { ReactElement } from 'react';

const Home = (): ReactElement => {
  return (
    <div>
      <h1 className="App-header">
        {translate(PAGES.HOME.TITLE)}
        <p>{translate(PAGES.HOME.SUBTITLE)}<br/>
          <code>my_list = [ key for key in item_dict.keys() ]</code>
        </p>
      </h1>
    </div>
  );
};
export default Home;