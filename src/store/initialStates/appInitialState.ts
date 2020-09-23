import isMobile from 'is-mobile';

import IStateApp from '../interfaces/IStateApp';

const appInitialState: IStateApp = {
  name: 'sözlük',
  title: 'sözlük',

  loading: true,
  loadingErrorText: null,

  isMobile: isMobile(),
};

export default appInitialState;
